import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constrants';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  onAddProduct = new EventEmitter();
  onEditProduct = new EventEmitter();

  ProductForm: any = FormGroup;
  dialogAction: any = "Add";
  action: any = "Add";
  responseMessage: any;
  categorys: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private productServices: ProductService,
    private categoryServices: CategoryService,
    public dialogRef: MatDialogRef<ProductComponent>,
    private snackbarServices: SnackbarService
  ) { }

  ngOnInit(): void {
    this.ProductForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      categoryId: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

    if (this.dialogData.action === 'Edit') {
      this.dialogAction = "Edit";
      this.action = "update";
      this.ProductForm.patchValue(this.dialogData.data);
    }

    this.getCategorys();
  }

  getCategorys() {
    this.categoryServices.getCategory().subscribe(
      (response: any) => {
        this.categorys = response;
      },
      (error: any) => {
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  handleSubmit() {
    if (this.dialogAction === "Edit") {
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    const formData = this.ProductForm.value;
    const data = {
      name: formData.name,
      categoryId: formData.categoryId,
      price: formData.price,
      description: formData.description,
    };

    this.productServices.add(data).subscribe(
      (response: any) => {
        this.dialogRef.close();
        this.onAddProduct.emit();
        this.responseMessage = response.message;
        this.snackbarServices.openSnackbar(this.responseMessage, "success");
      },
      (error: any) => {
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

edit() {
  const formData = this.ProductForm.value;

  // Ensure all fields are properly formatted
  const data = {
    id: this.dialogData.data._id || this.dialogData.data.id, // _id from MongoDB
    name: formData.name?.trim() || '',
    categoryId: formData.categoryId || '',
    price: Number(formData.price),  // Ensure it's a number
    description: formData.description?.trim() || ''
  };

  this.productServices.update(data).subscribe(
    (response: any) => {
      this.dialogRef.close();
      this.onEditProduct.emit();
      this.responseMessage = response.message;
      this.snackbarServices.openSnackbar(this.responseMessage, "success");
    },
    (error: any) => {
      this.responseMessage = error.error?.message || GlobalConstants.genericError;
      this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
    }
  );
}

}
