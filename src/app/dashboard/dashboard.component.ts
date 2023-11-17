import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/global-constrants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  responseMessage: any;
  data: any;

  ngAfterViewInit() { }

  constructor(private dashboardServices: DashboardService,
    private ngxServices: NgxUiLoaderService,
    private snackbarServices: SnackbarService) {

    this.ngxServices.start();
    this.dashboardData();

  }

  dashboardData() {
    this.dashboardServices.getDetails().subscribe((response: any) => {
      this.ngxServices.stop();
      this.data = response;

    },(error: any) => {
      this.ngxServices.stop();
      console.error(error);
      if(error.error?.message){
      this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarServices.openSnackbar(this.responseMessage,GlobalConstants.error);
      
    }
    )
  }

}
