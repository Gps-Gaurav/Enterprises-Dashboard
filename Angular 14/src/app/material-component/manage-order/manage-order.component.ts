import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constrants';


@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'total', 'edit'];
  dataSource: any = [];
  manageOrderForm: any = FormGroup;
  categorys: any = [];
  products: any = [];
  price: any;
  totalAmount: number = 0;
  responseMessage: any;


  constructor(private formBuilder: FormBuilder,
    private productServices: ProductService,
    private categoryService: CategoryService,
    private billService: BillService,
    private ngxServices: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackbarServices: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ngxServices.start();
    this.getCategory();
    this.manageOrderForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      paymentMethod: [null, [Validators.required]],
      product: [null, [Validators.required]],
      category: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
      total: [0, [Validators.required]],

    })
    this.manageOrderForm.get('category').valueChanges.subscribe((value: any) => {
      if (value) {
        this.getProductByCategory(value);
      }
    });

    this.manageOrderForm.get('product').valueChanges.subscribe((value: any) => {
      if (value) {
        this.getProductDetails(value);
      }
    });
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((response: any) => {
      this.ngxServices.stop();
      this.categorys = response;
    }
      , (error: any) => {
        this.ngxServices.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;

        } else {
          this.responseMessage = GlobalConstants.genericError;

        }
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      })

  }
  getProductByCategory(value: any) {
    // Add loading state
    this.ngxServices.start(); // Add this line

    this.productServices.getProductByCategory(value.id).subscribe({
      next: (response: any) => {
        this.products = response;
        this.manageOrderForm.controls['price'].setValue('');
        this.manageOrderForm.controls['quantity'].setValue('');
        this.manageOrderForm.controls['total'].setValue(0);
        this.ngxServices.stop(); // Stop loading
      },
      error: (error: any) => {
        this.ngxServices.stop();
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    });
  }

  getProductDetails(value: any) {
    // Input validation
    if (!value || !value.id) {
      this.snackbarServices.openSnackbar('Invalid product selection', GlobalConstants.error);
      return;
    }

    // Start loading indicator
    this.ngxServices.start();

    this.productServices.getById(value.id).subscribe({
      next: (response: any) => {
        if (!response || typeof response.price !== 'number') {
          throw new Error('Invalid product data received');
        }

        this.price = response.price;

        // Update form controls safely using patchValue
        this.manageOrderForm.patchValue({
          price: response.price,
          quantity: '1',
          total: response.price * 1
        });

        this.ngxServices.stop();
      },
      error: (error: any) => {
        console.error('Error fetching product details:', error);
        this.ngxServices.stop();

        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);

        // Reset form values on error
        this.manageOrderForm.patchValue({
          price: null,
          quantity: null,
          total: 0
        });
      },
      complete: () => {
        this.ngxServices.stop();
      }
    });
  }
  serQuantity(value: any) {
    var temp = this.manageOrderForm.controls['quantity'].value;
    if (temp > 0) {
      this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value)
    }
    else if (temp != '') {
      this.manageOrderForm.controls['quantity'].setValue(1);
      this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value)
    }
  }

  validateProductAdd() {
    if (this.manageOrderForm.controls['total'].value === 0 || this.manageOrderForm.controls['total'].value === null || this.manageOrderForm.controls['quantity'].value <= 0)
      return true;
    else
      return false;
  }

  add() {

    var formData = this.manageOrderForm.value;
    var productName = this.dataSource.find((e: { id: number; }) => e.id == formData.product.id);
    if (productName === undefined) {
      this.totalAmount = this.totalAmount + formData.total;

      this.dataSource.push({
        id: formData.product.id, name: formData.product.name, category: formData.category.name,
        quantity: formData.quantity, price: formData.price, total: formData.total
      })

      this.dataSource = [...this.dataSource];
      this.snackbarServices.openSnackbar(GlobalConstants.productAdded, "success");
    }
    else {
      this.snackbarServices.openSnackbar(GlobalConstants.productExistError, GlobalConstants.error);
    }

  }
  handleDeleteAction(value: any, element: any) {
    this.totalAmount = this.totalAmount - element.total;
    this.dataSource.splice(value, 1);
    this.dataSource = [...this.dataSource]
  }
  submitAction() {
    if (this.validateSubmit()) {
      this.snackbarServices.openSnackbar('Please fill all required fields', GlobalConstants.error);
      return;
    }

    this.ngxServices.start();

    // Create order data
    const formData = this.manageOrderForm.value;
    const orderData = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      paymentMethod: formData.paymentMethod,
      totalAmount: this.totalAmount,
      // Send productDetails as is, don't stringify it here
      productDetails: this.dataSource
    };

    this.billService.generateReport(orderData).subscribe({
      next: (response: any) => {
        if (response?.uuid) {
          this.downloadFile(response.uuid);
          this.resetForm();
          this.snackbarServices.openSnackbar('Order placed successfully', 'success');
        }
      },
      error: (error: any) => {
        console.error('Order submission error:', error);
        this.ngxServices.stop();
        const errorMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbarServices.openSnackbar(errorMessage, GlobalConstants.error);
      },
      complete: () => {
        this.ngxServices.stop();
      }
    });
  }

  // Helper method to reset the form
  private resetForm(): void {
    this.manageOrderForm.reset();
    this.dataSource = [];
    this.totalAmount = 0;

    // Reset to initial state
    this.manageOrderForm.patchValue({
      name: null,
      email: null,
      contactNumber: null,
      paymentMethod: null,
      product: null,
      category: null,
      quantity: null,
      price: null,
      total: 0
    });
  }

  // Improved validation method
  public validateSubmit(): boolean {
    if (!this.manageOrderForm) return true;

    const requiredFields = ['name', 'email', 'contactNumber', 'paymentMethod'];
    const hasEmptyFields = requiredFields.some(field => {
      const control = this.manageOrderForm.get(field);
      return !control || !control.value || control.invalid;
    });

    return hasEmptyFields || this.totalAmount <= 0;

  }


  downloadFile(fileName: any) {
    var data = {
      uuid: fileName
    }
    this.billService.getPdf(data).subscribe((response: any) => {
      saveAs(response, fileName + '.pdf');
      this.ngxServices.stop();
    })
  }

}
