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

  title = 'KallpaSkins';

  isAdmin = false
  showAdminBoard = false;
  username : any = '';
  public User$ : Observable<any> = this.authService.afauth.user;

  constructor (public authService : AuthService, private router : Router) {  }


  logOut(): void{
    this.authService.logOut();
    this.router.navigate(["/home"])
  }

}
