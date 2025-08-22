import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BillService {
  private url: string = environment.apiUrl;

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  generateReport(data: any): Observable<any> {
    return this.httpClient.post(`${this.url}/bill/generateReport`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPdf(data: any): Observable<Blob> {
    return this.httpClient.post(`${this.url}/bill/getPdf`, data, {
      responseType: 'blob'
    });
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = error.error?.message || 'Server error';
    }
    console.error('Error:', error);
    return throwError(() => errorMessage);
  }

  getBills(): Observable<any> {
    return this.httpClient.get(`${this.url}/bill/getBills`).pipe(
      map((response: any) => {
        // Transform the response if needed
        if (Array.isArray(response)) {
          return response.map(bill => ({
            ...bill,
            productDetails: this.parseProductDetails(bill.productDetails)
          }));
        }
        return response;
      })
    );
  }

  private parseProductDetails(details: any): any[] {
    try {
      if (typeof details === 'string') {
        return JSON.parse(details);
      }
      return Array.isArray(details) ? details : [];
    } catch (error) {
      console.error('Error parsing product details:', error);
      return [];
    }
  }
deleteBill(id: number): Observable<any> {
  return this.httpClient.delete(`${this.url}/bill/delete/${id}`, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  });
}
}
