import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  readonly URL9 = "http://localhost:443/users/uploadImage"
   readonly URL10 = "http://localhost:443/users/deleteImage"
  readonly URL11 = "http://localhost:443/users/getImages"
  readonly URL12 = "http://localhost:443/users/searchImg"
  
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

   public uploadImage(image) {
    // const formData = new FormData();

    // formData.append('image', image);

    // return this.http.post('/api/v1/image-upload', formData);
    console.log(image, "image")
    //return this.http.post('/api/v1/image-upload', image);
    const form = {
      image : image
    }
    const httpHeaders = new HttpHeaders ({
      'content-type': 'application/json',
      'Authorization': "Bearer 6458a9661edc3eaac4e1ac5d5079e9782a2579d4",
      "x-rapidapi-key": "7c445669ddmshe6384a2c924d267p17f52bjsn14d187ea123c",
		  "x-rapidapi-host": "imgur-apiv3.p.rapidapi.com",
    })
    return this.http.post("https://imgur-apiv3.p.rapidapi.com/3/image", form, {
      responseType: "text" as "json",
      headers: httpHeaders, 
    });
   }
  
    addphoto(data){
    return this.http.post(this.URL9, data, {
      responseType: "text" as "json",
    });
    }
  
  deleteImage(data) {
     return this.http.post(this.URL10, data, {
      responseType: "text" as "json",
    });
  }

  getImages() {
      return this.http.get(this.URL11);
  }

 searchImg(data) {
     return this.http.post(this.URL12, data, {
      responseType: "text" as "json",
    });
  }

}
