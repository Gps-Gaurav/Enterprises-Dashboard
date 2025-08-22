import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constrants';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'status'];
  dataSource: any;
  responseMessage: any;

  constructor(
    private userServices: UserService,
    private dialog: MatDialog,
    private snackbarServices: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.userServices.getUser().subscribe(
      (response: any) => {
        this.dataSource = new MatTableDataSource(response);
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

handleChangeAction(status: boolean, id: string, element: any) {
  if (!id) {
    this.snackbarServices.openSnackbar('User ID missing', GlobalConstants.error);
    return;
  }

  const data = { id: id, status: status }; // pass boolean

  this.userServices.update(data).subscribe(
    (response: any) => {
      this.responseMessage = response?.message;
      this.snackbarServices.openSnackbar(this.responseMessage, 'success');

      // Update local element to reflect new status immediately
      element.status = status;
    },
    (error: any) => {
      this.responseMessage = error.error?.message || GlobalConstants.genericError;
      this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);

      // Revert toggle if failed
      element.status = !status;
    }
  );
}



}
