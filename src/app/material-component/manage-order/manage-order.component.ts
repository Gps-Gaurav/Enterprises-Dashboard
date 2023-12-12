import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as saveAs from 'file-saver';
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
      name: [null, [Validators.required], Validators.pattern(GlobalConstants.nameRegex)],
      email: [null, [Validators.required], Validators.pattern(GlobalConstants.emailRegex)],
      contactNumber: [null, [Validators.required], Validators.pattern(GlobalConstants.contactNumberRegex)],
      PaymentMethod: [null, [Validators.required]],
      product: [null, [Validators.required]],
      category: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
      total: [0, [Validators.required]],
    })
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
    this.productServices.getProductByCategory(value.id).subscribe((response: any) => {
      this.products = response;
      this.manageOrderForm.controls['price'].setValue('');
      this.manageOrderForm.controls['quantity'].setValue('');
      this.manageOrderForm.controls['total'].setValue(0);
    },
      (error: any) => {
        this.ngxServices.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;

        } else {
          this.responseMessage = GlobalConstants.genericError;

        }
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      })
  }

  getProductDetails(value: any) {
    this.productServices.getById(value.id).subscribe((response: any) => {
      this.price = response.price;
      this.manageOrderForm.controls['price'].setValue(response.price);
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(this.price * 1);
    },
      (error: any) => {
        this.ngxServices.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;

        } else {
          this.responseMessage = GlobalConstants.genericError;

        }
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      })
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
    return true;
    // if (this.manageOrderForm.controls['total'].value === 0 || this.manageOrderForm.controls['total'].value === null || this.manageOrderForm.controls['quantity'].value <= 0)
    //   return true;
    // else
    //   return false;
  }

  validateSubmit() {
    if (this.totalAmount === 0 || this.manageOrderForm.controls['name'].value === null || this.manageOrderForm.controls['email'].value === null || this.manageOrderForm.controls['contactNumber'].value === null || this.manageOrderForm.controls['paymentMethod'].value === null || !(this.manageOrderForm.controls['contactNumber'].valid) || !(this.manageOrderForm.controls['email'].valid))
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
    var formData = this.manageOrderForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      paymentMethod: formData.paymentMethod,
      totalAmount: formData.totalAmount,
      productDetails: JSON.stringify(this.dataSource)
    }
    this.billService.generateReport(data).subscribe((response: any) => {
      this.downloadFile(response?.uuid);
      this.manageOrderForm.reset();
      this.dataSource = [];
      this.totalAmount = 0;
    },
      (error: any) => {
        this.ngxServices.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;

        } else {
          this.responseMessage = GlobalConstants.genericError;

        }
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      })
  }

  downloadFile(fileName: any) {
    var data = {
      uuid: fileName
    }
    this.billService.getPdf(data).subscribe((response: any) => {
      saveAs(response, fileName + '.pdf');;
      this.ngxServices.stop();
    })
  }

}
