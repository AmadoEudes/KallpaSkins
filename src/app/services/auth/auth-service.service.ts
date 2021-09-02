import auth  from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable()
export class AuthService {

  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,

  })


  messageLauch(ico: any, title: string){
    this.Toast.fire({
      icon: ico,
      title: title
    })}

  constructor(public afauth : AngularFireAuth, private router : Router) { }

  async login(email : string, password : string):Promise<any>{
    try {
      const result = await this.afauth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/acount/AIzaSyC8JDeAyKIob3kZWaYEDba$$%%%$/user'])
      this.messageLauch('success', '¡Bienvenido mi estimado!')
      return result;

    } catch (error) {
      console.log(error)
    }

  }

  async register(email : string, password : string):Promise<any>{
    try {
      const result = await this.afauth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/acount/AIzaSyC8JDeAyKIob3kZWaYEDba$$%%%$/user'])
    return result
    } catch (error) {
      console.log(error)
    }

  }

  async logOut(){
    await this.afauth.signOut();
  }

  async getCurrentUser(){
    return await this.afauth.authState.pipe(first()).toPromise()
  }

  async resetPassword(email:string):Promise<any>{
    try {
      return this.afauth.sendPasswordResetEmail(email)
    } catch (error) {
      console.log(error)
    }
  }

  async loginGoogle():Promise<any>{
    try {
      return await this.afauth.signInWithPopup(new auth.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error)
    }
  }
}
