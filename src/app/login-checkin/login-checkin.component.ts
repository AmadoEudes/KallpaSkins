import { AuthService } from './../services/auth/auth-service.service';

import { User } from './../models/users';
import { Router, ActivatedRoute } from "@angular/router";
import { UserServicesService } from '../services/user-services.service';

//import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


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

  correo:string = ""

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, password} = this.loginForm.value;
    await this.authService.login(email, password)
    localStorage.setItem('user',  JSON.stringify(await this.authService.getCurrentUser()))
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,

  })


  messageLauch(ico: any, title: string){
    this.Toast.fire({
      icon: ico,
      title: title
    })
  }

  async resetPass(){
    if(this.correo.length > 0){
      await this.authService.resetPassword(this.correo);
    this.messageLauch('success', 'Se envió el correo de reestablecimiento, con éxito!');
    }else{
      this.messageLauch('error', 'escribe tu correo')
    }
  }

  async googleSignin(){
    try {
      await this.authService.loginGoogle()
      this.router.navigate(['/home'])
      localStorage.setItem('user',  JSON.stringify(await this.authService.getCurrentUser()))
    } catch (error) {
      console.log(error)
    }
  }

}
