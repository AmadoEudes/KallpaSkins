import {Inject} from '@angular/core';
export class CartItem {

    nombre:string="";

    cantidad!: number;
    precio!: number;
    imgUrl:string="";
    
    constructor(@Inject(String) nombre:string, @Inject(Number) precio:number, @Inject(Number) cantidad:number,
        @Inject(Number) imgUrl:string) {
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.imgUrl=imgUrl;
    }
}