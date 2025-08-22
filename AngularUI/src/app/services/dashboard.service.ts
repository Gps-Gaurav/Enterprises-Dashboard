import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  private url: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getDetails() {
    return this.httpClient.get(this.url+"/dashboard/details/")
  }
}
