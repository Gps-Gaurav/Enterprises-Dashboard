import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  add(data: any) {
    return this.httpClient.post(this.url +
      "/product/add/", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
  getByName(name: string) {
    return this.httpClient.get(this.url + "/product/getByName/" + name, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  update(data: any) {
    return this.httpClient.patch(this.url +
      "/product/update/", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
  getProducts() {
    return this.httpClient.get(this.url + "/product/get");
  }

updateStatus(data: { id: string; status: boolean }) {
  return this.httpClient.patch(this.url + "/product/updateStatus/", data, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  });
}
delete(id: number): Observable<any> {
  return this.httpClient.delete(`${this.url}/product/delete/${id}`, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  });
}

  getProductByCategory(categoryId: number) {
    return this.httpClient.get(`${this.url}/product/getByCategory/${categoryId}`);
  }

  getById(id: number): Observable<any> {
    if (!id) {
      throw new Error('Product ID is required');
    }

    return this.httpClient.get<any>(`${this.url}/product/getById/${id}`).pipe(
      catchError(error => {
        console.error('Product service error:', error);
        throw error;
      })
    );
  }

}
