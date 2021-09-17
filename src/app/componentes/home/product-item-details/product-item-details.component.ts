import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from '../../shopping-cart/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  public product= new Product("", "",0,"",0,"", "","","",0);
  
  public img : string = ""
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.recibirDatos_productDetails().subscribe(
      (item: any) => {
      
      this.cargarProducto(item);
      console.log(item.imageURL+"&imwidth=300")
      this.img = item.imageURL+"&imwidth=300"
      },
      
    );
  }

  cargarProducto(item: Product){
    this.product.id = item.id;
    this.product.nombre = item.nombre;
    this.product.cantidad = item.cantidad;
    this.product.categoria = item.categoria;
    this.product.precio = item.precio;
    this.product.imageURL = item.imageURL;
    this.product.imageName = item.imageName;
    this.product.oferta = item.oferta;
    this.product.descripcion = item.descripcion;
    this.product.offerPrice = item.offerPrice;
  }
  
}
