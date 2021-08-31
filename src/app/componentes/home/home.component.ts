import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

import { UserServicesService } from "../../services/user-services.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth/auth-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : Observable<any[]>;

  constructor(firestore: AngularFirestore, public authService : AuthService) {
    this.items = firestore.collection("articulos").valueChanges();
  }

  isUser: Boolean = false;

  async userExist(){
    const user = await this.authService.getCurrentUser();
    if(user){
      this.isUser = true;
      console.log(this.isUser);
    }else{
      console.log(this.isUser)
    }
  }

  ngOnInit(): void {
    this.userExist();
  }

}
