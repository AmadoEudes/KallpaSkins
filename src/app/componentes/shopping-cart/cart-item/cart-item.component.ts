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

  value: number=1;


  constructor(private cartService: CartService) { 
    // this.cartItem = new CartItem(cartitem.id, cartitem.nombre, cartitem.detalles, cartitem.precio, cartitem.cantidad, cartitem.imgUrl);
  }

  ngOnInit(): void {
  }
  
  quitarCartItem(){

    this.cartItem = new CartItem(this.cartItem.nombre, this.cartItem.precio, this.cartItem.precioOferta, this.cartItem.cantidad, this.cartItem.cantidadDisponible, this.cartItem.imgUrl);
    
    this.cartService.enviarDatos_remove(this.cartItem);
    


  }
  calcularTotal(){
    this.cartItem.cantidad = this.value
    return this.cartItem.cantidad*this.cartItem.precio;
  }

  addItem(newItem: string) {
    
    this.value = Number(newItem)
    this.calcularTotal()
    console.log(this.value)
    this.cartService.enviarDatos_cantidad(this.value)
  }

}
