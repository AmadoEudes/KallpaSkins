
import { AuthService } from './../services/auth/auth-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainnav-bar',
  templateUrl: './mainnav-bar.component.html',
  styleUrls: ['./mainnav-bar.component.css']
})
export class MainnavBarComponent {

  categorias : string[] = ['FIBRA CARBONO', 'CUERO', 'FROSTED GLITTER', 'CAMUFLAJE',
  'TEXTURA', 'MÁRMOL', 'ASTRONAUTA', 'FRASES', 'CUTE',
  'LITTLE PETS', 'KITTEN', 'SWEET HOLDOVER']

  title = 'KallpaSkins';

  isAdmin = false
  showAdminBoard = false;
  username : any = '';
  public User$ : Observable<any> = this.authService.afauth.user;



  constructor (public authService : AuthService, private router : Router) { }



  async logOut(){
    localStorage.clear()
    this.authService.logOut();
    this.router.navigate(["/home"])
  }



}
