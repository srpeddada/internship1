import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ServiceService],
})
export class RegisterComponent implements OnInit {

  constructor(public service : ServiceService ) { }
normal = true;
  loading = false;
  gif = false;
  not = false;
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
     console.log(form.value)
    this.normal = false;
    this.loading = true;
    this.service.postRegister(form.value).subscribe((res) => {
      if (res == "registerd") {
        this.loading = false;
        this.gif = true;
        this.not = false;
      }
      if (res == "not registerd") {
        this.loading = false;
        this.normal = true;
        this.not = true;
      }
    });
    form.reset();
  }
}
