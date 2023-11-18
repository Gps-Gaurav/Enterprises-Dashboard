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
      this.responseMessage.openSnackbar(this.responseMessage, GlobalConstants.error);
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
}
