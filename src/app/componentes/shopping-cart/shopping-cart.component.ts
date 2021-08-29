import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from './cart.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[] =[];

  id!: number;
    // Ejemplos con los que se puede llenar la lista
    // { id: 1, nombre: 'Pizza 1', detalles: '', precio: 0, cantidad: 1, imgUrl: '' },
    // { id:2, nombre:"Pizza 2", detalles:"", precio:10, cantidad:2, imgUrl:"" },
    // { id:3, nombre:"Pizza 3", detalles:"", precio:15, cantidad:1, imgUrl:"" },
    // { id:4, nombre:"Pizza 4", detalles:"", precio:20, cantidad:1, imgUrl:"" }
  cartTotal = 0;
  
  constructor(private msj: CartService,
              
      ) { }
  ngOnInit(): void {
    

  }

  // tslint:disable-next-line: typedef
  addProductToCart(item: CartItem){
    let productExists = false;
    for(let i in this.cartItems){
      if(this.cartItems[i].nombre === item.nombre){
        this.cartItems[i].cantidad+=1;
        productExists = true;
        break;
      }
    }

    if (!productExists){
      this.cartItems.push({
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
        imgUrl: item.imgUrl,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(cartItem => {
      this.cartTotal += (cartItem.cantidad * cartItem.precio);
      this.msj.enviarDatos_icono(this.cartTotal);
    });
  }

  removeProductTocart( lista: CartItem[], item: CartItem){
    for(const i in lista){
      if(lista[i].nombre === item.nombre){
        lista.splice(Number(i),1)
        this.cartTotal -= (item.cantidad*item.precio);
        this.msj.enviarDatos_icono(this.cartTotal);
        break;
      }
    }
  }

  enviarLista(){
    if (this.cartItems.length != 0){
      // tslint:disable-next-line: forin
      
      this.msj.enviarDatos_shoppingcart(this.cartItems);
      let fecha=new Date();
      this.cartTotal=Number(this.cartTotal.toFixed(2));
    }
    
  }

  vaciarCarrito(){
    this.cartItems = [];
  }

  enviarIconoCartTotal(){
    this.msj.enviarDatos_icono(this.cartTotal);
    console.log("El total del Carrito es: " + this.cartTotal)
  }
  
  enviarHistorial(){
    console.log("Se envía el historial")
    //this.msg.enviarHistorial(this.cartItems_historial);
  }
  
  confirmarPedido(){
    //Envía la señal para que el historial se cargue
    //this.msg.enviarSeñal();
    if(this.cartItems.length != 0){
      this.showConfirm();
    } else {
      console.log("No seas sapo")
    }
  }

  showConfirm(){
    console.log("xd?")
  }
}
