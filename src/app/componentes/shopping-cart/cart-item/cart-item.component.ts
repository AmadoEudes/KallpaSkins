import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor(private cartService: CartService) { 
    // this.cartItem = new CartItem(cartitem.id, cartitem.nombre, cartitem.detalles, cartitem.precio, cartitem.cantidad, cartitem.imgUrl);
  }

  ngOnInit(): void {
  }
  
  quitarCartItem(){

    this.cartItem = new CartItem(this.cartItem.nombre, this.cartItem.precio, this.cartItem.cantidad, this.cartItem.cantidadDisponible, this.cartItem.imgUrl);
    
    this.cartService.enviarDatos_remove(this.cartItem);
    console.log("Enviado")


  }
  calcularTotal(){
    return this.cartItem.cantidad*this.cartItem.precio;
  }
  

}
