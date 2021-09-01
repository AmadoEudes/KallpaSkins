import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

import { UserServicesService } from "../../services/user-services.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth/auth-service.service";
import { FirebaseStorageService } from "src/app/services/firebase-storage.service";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : any[] = [];

  constructor(public firestore: AngularFirestore, public authService : AuthService, private firebaseStorageService: FirebaseStorageService) {
    //this.items = firestore.collection("articulos").valueChanges();
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
    this.getProducts()
  }

  getProducts(){
    this.firebaseStorageService.getProducts().subscribe(data => {
      this.items = [];
      data.forEach((element:any)=>{
        /*console.log(element.payload.doc.id);*/
        /*console.log(element.payload.doc.data());*/
        this.items.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.items)
    })
  }
}
