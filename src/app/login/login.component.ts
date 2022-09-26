import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ServiceService } from '../shared/service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ServiceService],
})
export class LoginComponent implements OnInit {

  not = false;
  array;
  constructor(
     public service: ServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {

  }

   onSubmit(form: NgForm) {
    this.service.postLogin(form.value).subscribe((res) => {
      if (res == "wrong") {
        this.not = true;
      } else {
        // this.CookieService.set("login", res.name);
        this.array = res;
        var obj = JSON.parse(this.array);
        console.log(obj)
        localStorage.setItem("email", obj.email);
         localStorage.setItem("login", "true");
        this.not = false;
        this.router.navigate(["/index"]);
      }
    });
    form.reset();
  }
}
