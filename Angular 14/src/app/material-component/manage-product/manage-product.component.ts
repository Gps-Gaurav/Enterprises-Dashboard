import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constrants';
import { ProductComponent } from '../dialog/product/product.component';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  displayedColumns: string[] = ['name', 'categoryName', 'description', 'price', 'edit'];
  dataSource: any;
  responseMessage: any;

  constructor(
    private productServices: ProductService,
    private dialog: MatDialog,
    private snackbarServices: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData() {
    this.productServices.getProducts().subscribe(
      (response: any) => {
        this.dataSource = new MatTableDataSource(
          response.map((p: any) => ({
            _id: p._id,
            productId: p.productId,
            name: p.name,
            description: p.description,
            price: p.price,
            status: p.status,
            categoryId: p.categoryId,
            categoryName: p.categoryName
          }))
        );
      },
      (error: any) => {
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { action: 'Add' };
    dialogConfig.width = '850px';

    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onAddProduct.subscribe(() => {
      this.loadTableData();
      sub.unsubscribe();
    });

    this.router.events.subscribe(() => dialogRef.close());
  }

handleEditAction(values: any) {
  if (!values._id) {
    this.snackbarServices.openSnackbar('Product ID missing', GlobalConstants.error);
    return;
  }

  this.productServices.getById(values._id).subscribe(
    (product: any) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { action: 'Edit', data: product };
      dialogConfig.width = '850px';

      const dialogRef = this.dialog.open(ProductComponent, dialogConfig);

      const sub = dialogRef.componentInstance.onEditProduct.subscribe(() => {
        this.loadTableData();
        sub.unsubscribe();
      });

      this.router.events.subscribe(() => dialogRef.close());
    },
    () => {
      this.snackbarServices.openSnackbar('Failed to fetch product details', GlobalConstants.error);
    }
  );
}


  handleDeleteAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { message: `Delete ${values.name} product?` };

    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatuschange.subscribe(() => {
      if (!values._id) {
        this.snackbarServices.openSnackbar('Product ID missing', GlobalConstants.error);
        dialogRef.close();
        return;
      }
      this.deleteProduct(values._id);
      dialogRef.close();
      sub.unsubscribe();
    });
  }

  deleteProduct(id: any) {
    this.productServices.delete(id).subscribe(
      (response: any) => {
        this.loadTableData();
        this.responseMessage = response?.message;
        this.snackbarServices.openSnackbar(this.responseMessage, 'success');
      },
      (error: any) => {
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

onChange(status: boolean, id: string) {
  if (!id) {
    this.snackbarServices.openSnackbar('Product ID missing', GlobalConstants.error);
    return;
  }

  const data = {
    id: id,
    status: status // boolean directly
  };

  this.productServices.updateStatus(data).subscribe(
    (response: any) => {
      this.responseMessage = response?.message;
      this.snackbarServices.openSnackbar(this.responseMessage, 'success');
    },
    (error: any) => {
      this.responseMessage = error.error?.message || GlobalConstants.genericError;
      this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
    }
  );
}



}
