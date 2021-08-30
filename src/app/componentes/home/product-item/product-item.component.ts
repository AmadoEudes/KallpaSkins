import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { CartItem } from 'src/app/models/cart-item';
import { Spin } from 'tsparticles/Options/Classes/Particles/Move/Spin';
import { CartService } from '../../shopping-cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input () articulo!: Articulo;
  @Input () valor!: 1;
  
  cartItem!: CartItem;

  item : Observable<any[]>;

  value: number=1;
  

  constructor(firestore: AngularFirestore, private cartService: CartService) {
    this.item = firestore.collection("articulos").valueChanges();

  }
  ngOnInit(): void {
  }

  addToCart(){
    this.cartItem = new CartItem(this.articulo.nombre,this.articulo.precio, this.value,this.articulo.cantidad,this.articulo.imageURL);
    this.cartService.enviarDatos(this.cartItem);
    
  }

  addItem(newItem: string) {
    
    this.value = Number(newItem)
    console.log(this.value)
  }

}
