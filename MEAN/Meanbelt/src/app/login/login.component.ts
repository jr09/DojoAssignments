import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registrationErrors;
  registerUser = new User();
  loginUser = {
    email: "",
    password: ""
  }
  confpass= "";

  constructor(private _userservice: UserserviceService, private _router: Router) { }

  ngOnInit() {
  }

  register_form(event){
    event.preventDefault();
    console.log("Sending to service", this.registerUser);
    this._userservice.userRegister(this.registerUser)
    .then(() => this._router.navigate(['dashboard']))
    .catch(response => this.handleErrors(response.json()));
    this.registerUser = new User();
  }

  login_form(event){
    console.log("Sending to service", this.loginUser);
    this._userservice.userLogin(this.loginUser)
    .then(() => this._router.navigate(['dashboard']))
    .catch(response => this.handleErrors(response.json()));
    this.loginUser = { email: "", password: "" };
  }

  private handleErrors(errors: string[]) {
    console.log(errors);
    this.registrationErrors = errors;
  }

}
