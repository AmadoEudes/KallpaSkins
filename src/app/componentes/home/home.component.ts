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

  items : Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection("articulos").valueChanges();
  }

  ngOnInit(): void {
  }

}
