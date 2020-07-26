import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AutoGios} from './autogios/autogios';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  


  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  

  login(email: string, password: string) {
    return this.http.post(
      `${this.ROOT_URL}/users/login`,
      {
        email,
        password,
      },
      {
        observe: 'response',
      }
    );
  }

  signup(email: string, password: string) {
    return this.http.post(
      `${this.ROOT_URL}/users`,
      {
        email,
        password,
      },
      {
        observe: 'response',
      }
    );
  }

  addGiosAutomation(autogios:AutoGios){
    let url = `${this.ROOT_URL}/autogios`;
    let body = autogios;
    let headers = new HttpHeaders({
      'x-access-token': localStorage.getItem('x-access-token'),
      'x-refresh-token': localStorage.getItem('x-refresh-token') });
    let options = { headers: headers };
    return this.http.post(url,body,options);
  }
}
