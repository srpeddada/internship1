import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selcetedData = new Data;
  constructor(public http: HttpClient) { }

  readonly URL1 = "http://localhost:443/users/register"
  readonly URL2 = "http://localhost:443/users/login"
  readonly URL3 = "http://localhost:443/users/update"
    readonly URL4 = "http://localhost:443/users/getinfo"

  postRegister(data: Data) {
    return this.http.post(this.URL1, data, {
      responseType: "text" as "json",
    });
  }
  postLogin(data: Data) {
    return this.http.post(this.URL2, data , {
      responseType: "text" as "json",
    });
  } 
  
  postUpdate(data) {
    return this.http.post(this.URL3, data, {
      responseType: "text" as "json",
    });
  }

  getInfo(data) {
    return this.http.post(this.URL4, data, {
      responseType: "text" as "json",
    });
  }
}
