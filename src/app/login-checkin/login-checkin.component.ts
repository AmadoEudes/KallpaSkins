import { AuthService } from './../services/auth/auth-service.service';

import { User } from './../models/users';
import { Router, ActivatedRoute } from "@angular/router";
import { UserServicesService } from '../services/user-services.service';

//import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login-checkin.component.html',
  styleUrls: ['./login-checkin.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password : new FormControl('')
  })

  constructor(private authService : AuthService) { }
  isUser: Boolean = false;

  async userExist(){
    const user = await this.authService.getCurrentUser();
    if(user){
      this.isUser = true;
      console.log(this.isUser);
    }else{
      this.isUser = false;
      console.log(this.isUser)
    }
  }

  ngOnInit(): void {
  this.userExist();
  }

  onLogin(){
    const {email, password} = this.loginForm.value;
    this.authService.login(email, password)
    
  }
}
