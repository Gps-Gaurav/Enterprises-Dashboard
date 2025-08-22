import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  signUp(data: any) {
    return this.httpClient.post(this.url + "/user/signup", data,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')

      })
  }


  forgotPassword(data: any) {
    return this.httpClient.post(this.url +
      "/user/forgotPassword/", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })

  }

  changePassword(data: any) {
    return this.httpClient.post(this.url +
      "/user/changePassword/", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })

  }

  login(data: any) {
    return this.httpClient.post(this.url +
      "/user/login/", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })

  }
  checkToken(){
    return this.httpClient.get(this.url + "/user");
  }

  getUser(){
    return this.httpClient.get(this.url + "/user/get");
  }

update(data: { id: string; status: boolean }) {
  return this.httpClient.patch(
    this.url + "/user/update",
    data,
    { headers: new HttpHeaders().set('Content-Type', 'application/json') }
  );
}


}
