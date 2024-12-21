import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-view-bill-products',
  templateUrl: './view-bill-products.component.html',
  styleUrls: ['./view-bill-products.component.scss']
})
export class ViewBillProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'total'];
  dataSource: any[] = [];
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogRef: MatDialogRef<ViewBillProductsComponent>,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    try {
      // Store the dialog data
      this.data = this.dialogData.data;
      console.log('Dialog Data:', this.data); // Debug log

      // Parse product details
      if (this.data && this.data.productDetails) {
        if (typeof this.data.productDetails === 'string') {
          this.dataSource = JSON.parse(this.data.productDetails);
        } else if (Array.isArray(this.data.productDetails)) {
          this.dataSource = this.data.productDetails;
        } else {
          throw new Error('Invalid product details format');
        }
        console.log('Parsed Product Details:', this.dataSource); // Debug log
      } else {
        throw new Error('No product details found');
      }
    } catch (error) {
      console.error('Error processing product details:', error);
      this.snackbarService.openSnackbar('Error loading product details', 'error');
      this.dataSource = [];
    }
  }

  // Helper method to calculate total amount
  getTotalAmount(): number {
    return this.dataSource.reduce((sum, item) =>
      sum + (parseFloat(item.total) || 0), 0
    );
  }

  // Helper method to check if data is available
  hasData(): boolean {
    return Array.isArray(this.dataSource) && this.dataSource.length > 0;
  }

  // Format currency values
  formatPrice(price: any): string {
    return `₹${parseFloat(price).toFixed(2)}`;
  }
}
