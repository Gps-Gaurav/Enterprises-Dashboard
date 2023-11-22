import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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


  constructor(private productServices: ProductService,
    private ngxServices: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackbarServices: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ngxServices.start()
    this.tableData()
  }
  tableData() {
    this.productServices.getProducts().subscribe((response: any) => {
      this.ngxServices.stop();
      this.dataSource = new MatTableDataSource(response);
    }, (error: any) => {
      this.ngxServices.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;

      } else {
        this.responseMessage = GlobalConstants.genericError;

      }
      this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  handleAddAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    }
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();

    });
    const sub = dialogRef.componentInstance.onAddProduct.subscribe((response) => {
      this.tableData()
    })
  }

  handleEditAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    }
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();

    });
    const sub = dialogRef.componentInstance.onEditProduct.subscribe((response) => {
      this.tableData()
    })
  }


  handleDeleteAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete' + values.name + 'product'
    }
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatuschange.subscribe((response) => {
      this.ngxServices.start();
      this.deleteProduct(values.id)
      dialogRef.close();
    })
  }

  deleteProduct(id: any) {
    this.productServices.delete(id).subscribe((response: any) => {
      this.ngxServices.stop();
      this.tableData();
      this.responseMessage = response?.message;
      this.snackbarServices.openSnackbar(this.responseMessage, "success");
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
  onChange(status: any, id: any) {
    var data = {
      status: status.toString(),
      id: id
    }
    this.productServices.updateStatus(data).subscribe((response: any) => {
      this.ngxServices.stop();
      this.responseMessage = response?.message;
      this.snackbarServices.openSnackbar(this.responseMessage, "success");

    }, (error: any) => {
      this.ngxServices.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;

      } else {
        this.responseMessage = GlobalConstants.genericError;

      }
      this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
    })
  }

}
