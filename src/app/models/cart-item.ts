import {Inject} from '@angular/core';
export class CartItem {

    nombre:string="";

    cantidad!: number;
    cantidadDisponible!: number;

    precio!: number;
    imgUrl:string="";
    
    constructor(@Inject(String) nombre:string, @Inject(Number) precio:number, @Inject(Number) cantidad:number, @Inject(Number) cantidadDisponible:number,
        @Inject(Number) imgUrl:string) {
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.cantidadDisponible = cantidadDisponible;
    this.imgUrl=imgUrl;
    }
}