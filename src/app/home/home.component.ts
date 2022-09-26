import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ServiceService } from '../shared/service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photo;
  name
  constructor(
     public service: ServiceService,
    public router: Router
  ) { }
  update = false

  ngOnInit(): void {
    if (localStorage.getItem("login") != "true") {
       this.router.navigate(["/login"]);
    }
   var data = {
      "email": localStorage.getItem("email")
   }
    this.service.getInfo(data).subscribe((res) => {
      
      var obj = JSON.parse(res.toString())
      console.log(obj)
      this.photo = obj.link
      this.name = obj.name
    })
  }
displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


  onSubmit(form: NgForm) {
    var send = {
      link: form.value.link,
      email: localStorage.getItem("email")
    }
    this.service.postUpdate(send).subscribe((res) => {
      if (res == "done") {
        this.displayStyle = "none";
        
        location.reload();
      } 
    });
    form.reset();
  }


}
