import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input () articulo!: Articulo;

  item : Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.item = firestore.collection("articulos").valueChanges();

  }
  ngOnInit(): void {
  }

}
