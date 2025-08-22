import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
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
  stats: any[] = [];

  constructor(
    private dashboardServices: DashboardService,
    private snackbarServices: SnackbarService
  ) { }

  ngAfterViewInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.dashboardServices.getDetails().subscribe(
      (response: any) => {
        this.data = response;
        this.stats = [
          { title: 'Category', value: this.data?.category, link: '/cafe/view-category', color: '#2196f3' },
          { title: 'Product', value: this.data?.product, link: '/cafe/view-product', color: '#1e88e5' },
          { title: 'Bill', value: this.data?.bill, link: '/cafe/bill', color: '#028ee1' }
        ];
      },
      (error: any) => {
        console.error(error);
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbarServices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    );
  }
}
