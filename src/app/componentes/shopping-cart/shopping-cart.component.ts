import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from './cart.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public User$ : Observable<any> = this.authService.afauth.user;
  
  mensaje = "https://wa.me/+51940447433?text="

  cartItems: any[] =[];

  id!: number;
    // Ejemplos con los que se puede llenar la lista
    // { id: 1, nombre: 'Pizza 1', detalles: '', precio: 0, cantidad: 1, imgUrl: '' },
    // { id:2, nombre:"Pizza 2", detalles:"", precio:10, cantidad:2, imgUrl:"" },
    // { id:3, nombre:"Pizza 3", detalles:"", precio:15, cantidad:1, imgUrl:"" },
    // { id:4, nombre:"Pizza 4", detalles:"", precio:20, cantidad:1, imgUrl:"" }
  cartTotal = 0;
  
  constructor(private cartService: CartService, public authService : AuthService,
              
      ) { }
  ngOnInit(): void {
    this.cartService.recibirDatos().subscribe(
      (item: any) => {
      // tslint:disable-next-line: no-unused-expression
      this.addProductToCart(item)
      console.log(this.cartItems);
      },
      
    );

    this.cartService.recibirDatos_remove().subscribe(
      (item_remove: any) => {
      // tslint:disable-next-line: no-unused-expression
      this.removeProductTocart(this.cartItems, item_remove)
      console.log(this.cartItems);
      },
      
    );
    this.cartService.recibirDatos_cantidad().subscribe(
      (item_cantidad: any) => {
      // tslint:disable-next-line: no-unused-expression
      console.log(this.calcularTotal(this.cartItems));
      this.cartTotal = this.calcularTotal(this.cartItems);
      },
      
    );

  }

  // tslint:disable-next-line: typedef
  addProductToCart(item: CartItem){
    let productExists = false;
    for(let i in this.cartItems){
      if(this.cartItems[i].nombre === item.nombre){
        if(this.cartItems[i].cantidad === item.cantidadDisponible){
          productExists = true;
          console.log("No hay más")
          break;
        }
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
        cantidadDisponible: item.cantidadDisponible,
        imgUrl: item.imgUrl,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(cartItem => {
      this.cartTotal += (cartItem.cantidad * cartItem.precio);
      //this.msj.enviarDatos_icono(this.cartTotal);
    });
  }

  removeProductTocart( lista: CartItem[], item: CartItem){
    for(const i in lista){
      if(lista[i].nombre === item.nombre){
        
          lista.splice(Number(i),1)
          this.cartTotal -= (item.cantidad*item.precio);
          //this.msj.enviarDatos_icono(this.cartTotal);
          break;
       
        
      }
    }
  }

  enviarLista(){
    let url="FranK? He aquí la lista de productos:\n";
    console.log(this.cartItems)
    for (let index = 0; index < this.cartItems.length; index++) {
      console.log(this.cartItems[index])
      url += "\n"+String(index+1)+". " + String(this.cartItems[index].nombre) +"\n"+"  Cantidad: "+ String(this.cartItems[index].cantidad) 
      + "     Precio por unidad: S/."+String(this.cartItems[index].precio) +"\n"+"  Precio Total: "+String(this.cartItems[index].cantidad*this.cartItems[index].precio) + "\n"
      
    }
    url += "\n Costo total del pedido: S/." +  String(this.cartTotal)
    url = encodeURIComponent(url);
    this.mensaje += url;
    window.open(this.mensaje, '_blank');
    console.log(this.User$)
  }


  calcularTotal(lista: CartItem[]){
    let aux = 0;
    for (let index = 0; index < lista.length; index++) {
      aux += (lista[index].precio*lista[index].cantidad);
    }
    return aux;
  }
}
