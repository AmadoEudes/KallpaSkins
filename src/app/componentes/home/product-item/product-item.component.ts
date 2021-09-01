import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';



import { CartService } from '../../shopping-cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public User$ : Observable<any> = this.authService.afauth.user;

  @Input () articulo!: Articulo;
  @Input () valor!: 1;
  
  product!: Product;

  cartItem!: CartItem;

  item : Observable<any[]>;

  value: number=1;

  editar: Boolean= true;
  

  constructor(firestore: AngularFirestore, private cartService: CartService, private authService: AuthService, private firebaseStorageService: FirebaseStorageService) {
    this.item = firestore.collection("articulos").valueChanges();

  }
  ngOnInit(): void {
  }

  

  addToCart(){
    this.cartItem = new CartItem(this.articulo.nombre,this.articulo.precio, this.articulo.offerPrice, this.value,this.articulo.cantidad,this.articulo.imageURL);
    this.cartService.enviarDatos(this.cartItem);
  }

  addItem(newItem: string) {
    
    this.value = Number(newItem)
    console.log(this.value)
  }

  verDetalles(){
    this.product = new Product(this.articulo.id, this.articulo.nombre, this.articulo.cantidad, this.articulo.categoria, this.articulo.precio, this.articulo.imageURL, this.articulo.imageName,
      this.articulo.oferta, this.articulo.descripcion, this.articulo.offerPrice);
      console.log(this.product);
    this.cartService.enviarDatos_productDetails(this.product);
    
  }

  editarProducto(){
    localStorage.removeItem('product')
    this.product = new Product(this.articulo.id, this.articulo.nombre, this.articulo.cantidad, this.articulo.categoria, this.articulo.precio, this.articulo.imageURL, this.articulo.imageName,
      this.articulo.oferta, this.articulo.descripcion, this.articulo.offerPrice);
      console.log(this.product);
      localStorage.setItem('product',JSON.stringify(this.product))
    
  }


  eliminarProducto(id: string){
    
    // Create a reference to the file to delete
    var desertRef = this.firebaseStorageService.storage.ref(this.articulo.imageName)

    // Delete the file
    desertRef.delete();
    this.firebaseStorageService.deleteProduct(id).then(() => {
      console.log("a ver")
    })
  }




}
