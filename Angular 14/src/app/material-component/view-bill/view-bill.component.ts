import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constrants';
import { ViewBillProductsComponent } from '../dialog/view-bill-products/view-bill-products.component';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'paymentMethod', 'total', 'view' ];
  dataSource: any;
  responseMessage: any;


  constructor(private billServices: BillService,
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
    this.billServices.getBills().subscribe((response: any) => {
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

  handleViewAction(values:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      data: values
    }
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(ViewBillProductsComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();

    });
  }
  downloadReportAction(values:any){
    this.ngxServices.start();
    var data ={
      name:values.name,
      email:values.email,
      uuid:values.uuid,
      contactNumber:values.contactNumber,
      paymentMethod:values.paymentMethod,
      totalAmount:values.totalAmount,
      productDetails:values.productDetails
    }
    this.billServices.getPdf(data).subscribe((response)=>{
      saveAs(response,values.uuid+'.pdf');
      this.ngxServices.stop();
    })
  }
  handleDeleteAction(values:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete' + values.name + 'bill'
    }
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatuschange.subscribe((response) => {
      this.ngxServices.start();
      this.deleteProduct(values.id)
      dialogRef.close();
    })
  }
  deleteProduct(id:any){
    this.billServices.delete(id).subscribe((response: any) => {
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
