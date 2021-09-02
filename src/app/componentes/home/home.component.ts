import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

import { UserServicesService } from "../../services/user-services.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : any[] = [];

  constructor( private firestore: AngularFirestore,private firebaseStorageService : FirebaseStorageService,private aRoute : ActivatedRoute) {

  }

  ngOnInit(): void {

    // fin
    this.getProductos();
    this.getUsers()
  }


  getUsers(){
    localStorage.removeItem('KIob3kZW_INfo')
    let users: any[] = [];
    this.firebaseStorageService.getUsers().subscribe( data =>{
      data.forEach((element:any) => {
        users.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
      localStorage.setItem('KIob3kZW_INfo', JSON.stringify(users))
    })
  }


  getProductos(){
    localStorage.removeItem('products')
    this.firebaseStorageService.getProducts().subscribe(data =>{
      this.items = [];
      data.forEach((element:any) => {

        this.items.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      localStorage.setItem('products',JSON.stringify(this.items))
    })
  }

}
