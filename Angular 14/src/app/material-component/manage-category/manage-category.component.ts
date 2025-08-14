import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../dialog/category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'console';
import { GlobalConstants } from 'src/app/shared/global-constrants';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'edit'];
  dataSource: any;
  responseMessage: any;


  constructor(private categoryServices: CategoryService,
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
    this.categoryServices.getCategory().subscribe((response: any) => {
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
    const dialogRef = this.dialog.open(CategoryComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();

    });
    const sub = dialogRef.componentInstance.onAddCategory.subscribe((response) => {
      this.tableData()
    })
  }
  handleEditAction(values : any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data:values
    }
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(CategoryComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();

    });
    const sub = dialogRef.componentInstance.onEditCategory.subscribe((response) => {
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
    this.categoryServices.delete(id).subscribe((response: any) => {
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
}
