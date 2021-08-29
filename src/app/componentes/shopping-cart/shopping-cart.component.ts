import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //lista de carrito
  shopping_cart: any[];


  constructor() {
    this.shopping_cart = [{nombre: "SKIN",
    cantidad : "5",
    importe : "256.29"
  },
  {nombre: "SKIN",
  cantidad : "5",
  importe : "256.29"
},
{nombre: "SKIN2",
    cantidad : "5",
    importe : "256.29"
  }]
  }

  ngOnInit(): void {
  }

}
