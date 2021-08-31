import { Inject } from "@angular/core";
export class Product{
    nombre : string;
    cantidad : number;
    categoria : string;
    precio : number;
    imageURL : string;
    oferta : string;
    descripcion : string;
    offerPrice : number;
    constructor(@Inject(String) nombre:string,@Inject(Number) cantidad:number,@Inject(String) categoria:string, @Inject(Number) precio:number,
            @Inject(String) imageURL:string, @Inject(String) oferta:string, @Inject(String) descripcion:string,  @Inject(Number) offerPrice:number,) {
    this.nombre=nombre;
    this.cantidad=cantidad;
    this.categoria = categoria;
    this.precio=precio;
    this.imageURL = imageURL;
    this.oferta = oferta;
    this.descripcion = descripcion;
    this.offerPrice = offerPrice;
    }
}