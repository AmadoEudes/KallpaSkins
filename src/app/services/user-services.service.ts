
import { Injectable } from '@angular/core';

//import {User} from '../models/users'
//import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Observable } from 'rxjs';
//
//const TOKEN_KEY = 'Token-Auth';
//const USER_KEY = 'auth_user';
//
//const httpOptions = {
//  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};
//
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
//
//  API_URL = 'http://localhost:4000/api'; // url del servidor de la API REST
//
//  constructor(private http : HttpClient) { };
//
//  SaveUser(user : User){
//    return this.http.post(`${this.API_URL}/auth/signup`, user, httpOptions);
//  }
//
//  getEmail(email:string){
//    return this.http.get(`${this.API_URL}/auth/emails/${email}`)
//  }
//
//  logger(user: User){
//    return this.http.post(`${this.API_URL}/auth/login`, {
//      e_mail : user.e_mail,
//      password : user.password
//    }, httpOptions)
//  }
//  // login de internet
//
//  login(username: string, password: string): Observable<any> {
//    return this.http.post(`${this.API_URL}/auth/login`, {
//      username,
//      password
//    }, httpOptions);
//  }
//
//  register(username: string, email: string, password: string): Observable<any> {
//    return this.http.post(`${this.API_URL}/auth/signup`, {
//      username,
//      email,
//      password
//    }, httpOptions);
//  }
//}
//
///// servicios de contenido
//
//export class UserService {
//
//  URL = 'http://localhost:4000/api/test'
//  constructor(private http : HttpClient){
//
//  }
//
//  getPublicContent(): Observable<any> {
//    return this.http.get(`${this.URL}/all`)
//  }
//
//  getUserBoard(): Observable<any> {
//    return this.http.get(`${this.URL}/user`)
//  }
//
//  getAdminBoard(): Observable<any> {
//    return this.http.get(`${this.URL}/admin`)
//  }

  constructor(){}
}
