import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selcetedData = new Data;
  constructor(public http: HttpClient) { }

  readonly URL1 = "https://techavant.herokuapp.com/users/register"
  readonly URL2 = "https://techavant.herokuapp.com/users/login"
  readonly URL3 = "https://techavant.herokuapp.com/users/update"
  readonly URL4 = "https://techavant.herokuapp.com/users/getinfo"
  readonly URL5 = "http://localhost:443/users/getlist"
  readonly URL6 = "http://localhost:443/users/postlistdata"
  readonly URL7 = "http://localhost:443/users/upadteList"
  readonly URL8 = "http://localhost:443/users/deleteItem"

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


  getlist() {
    return this.http.post(this.URL5, {
      responseType: "text" as "json",
    });
  }

  postListData(data) {
     return this.http.post(this.URL6, data, {
      responseType: "text" as "json",
    });
  }

  updateList(data) {
     return this.http.post(this.URL7, data, {
      responseType: "text" as "json",
    });
  }

  deleteItem(data) {
     return this.http.post(this.URL8, data, {
      responseType: "text" as "json",
    });
  }
}
