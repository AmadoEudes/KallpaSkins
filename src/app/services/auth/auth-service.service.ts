import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
@Injectable()
export class AuthService {


  constructor(public afauth : AngularFireAuth, private router : Router) { }

  async login(email : string, password : string):Promise<any>{
    try {
      const result = await this.afauth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/acount/AIzaSyC8JDeAyKIob3kZWaYEDba$$%%%$/user'])
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
}
