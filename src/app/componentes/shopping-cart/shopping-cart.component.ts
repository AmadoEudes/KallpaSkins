import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from './cart.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public User$ : Observable<any> = this.authService.afauth.user;
  
  mensaje = "https://wa.me/+51966838629?text="

  cartItems: any[] =[];

  id!: number;
    // Ejemplos con los que se puede llenar la lista
    // { id: 1, nombre: 'Pizza 1', detalles: '', precio: 0, cantidad: 1, imgUrl: '' },
    // { id:2, nombre:"Pizza 2", detalles:"", precio:10, cantidad:2, imgUrl:"" },
    // { id:3, nombre:"Pizza 3", detalles:"", precio:15, cantidad:1, imgUrl:"" },
    // { id:4, nombre:"Pizza 4", detalles:"", precio:20, cantidad:1, imgUrl:"" }
  cartTotal = 0;
  
  constructor(private cartService: CartService, public authService: AuthService, private router: Router){

  }

  isUser: Boolean = false;

  async userExist(){
    const user = await this.authService.getCurrentUser();
    if(user){
      this.isUser = true;
      console.log(this.isUser);
    }else{
      this.isUser = false;
      console.log(this.isUser)
    }
  }

  ngOnInit(): void {
    this.cartService.recibirDatos_userVerify().subscribe(
      (item: any) => {
      // tslint:disable-next-line: no-unused-expression
      this.userExist();
      },
      
    );
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
    this.userExist();
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
      this.cartService.enviarDatos_cartIconUp(productExists);
      this.cartItems.push({
        nombre: item.nombre,
        precio: item.precio,
        precioOferta: item.precioOferta,
        cantidad: item.cantidad,
        cantidadDisponible: item.cantidadDisponible,
        imgUrl: item.imgUrl,
      });
      
      this.cartTotal += (item.cantidad * item.precio);
      this.showAdded()
    } else {
      this.showAlert()
    }

    
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    
  })
  
  
  showAdded(){
    this.Toast.fire({
      icon: 'success',
      title: 'Añadido correctamente'
    })
  }
  showAlert(){
    this.Toast.fire({
      icon: 'info',
      title: 'Ya se encuentra en el carrito'
    })
  }
  ToastII = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    
  })
  showCartEmpty(){
    this.ToastII.fire({
      icon: 'error',
      title: 'No hay ningún producto en el carrito'
    })
  }
  showUsserNotLoged(){
    this.ToastII.fire({
      icon: 'question',
      title: '¿No encuentra el login?'
    })
  }

  removeProductTocart( lista: CartItem[], item: CartItem){
    for(const i in lista){
      if(lista[i].nombre === item.nombre){
          this.cartService.enviarDatos_cartIconDown(true);
          lista.splice(Number(i),1)
          this.cartTotal -= (item.cantidad*item.precio);
          //this.msj.enviarDatos_icono(this.cartTotal);
          break;
      }
    }
  }

  enviarLista(){
    if(this.cartItems.length > 0){
      if(this.isUser == true){
        let url="FranK? He aquí la lista de productos:\n";
    console.log(this.cartItems)
    for (let index = 0; index < this.cartItems.length; index++) {
      console.log(this.cartItems[index])
      url += "\n"+String(index+1)+". " + String(this.cartItems[index].nombre) +"\n"+"  Cantidad: "+ String(this.cartItems[index].cantidad) 
      + "     Precio por unidad: S/."+String(this.cartItems[index].precio) +"\n"+"  Precio Total: "+String(this.cartItems[index].cantidad*this.cartItems[index].precio) + "\n"
      
    }
    let cartTotal_fixed = this.cartTotal.toFixed(2)
    url += "\n Costo total del pedido: S/." +  String(cartTotal_fixed)
    url = encodeURIComponent(url);
    this.mensaje += url;
    window.open(this.mensaje, '_blank');
    console.log(this.User$)
    this.vaciarCarrito()
      } else {
        console.log("Logueate sapazo")
        this.showUsserNotLoged();
        this.router.navigate(['/login'])

      }
    } else {
      this.showCartEmpty();
      console.log("No seas sapo")
    }
  }


  calcularTotal(lista: CartItem[]){
    let aux = 0;
    for (let index = 0; index < lista.length; index++) {
      aux += (lista[index].precio*lista[index].cantidad);
    }
    return aux;
  }

  vaciarCarrito(){
    this.cartItems = [];
    this.cartTotal = 0;
    this.cartService.enviarDatos_cartIconRefresh(true);
    this.mensaje =  "https://wa.me/+51966838629?text=";
  }
}
