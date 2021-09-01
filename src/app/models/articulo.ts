import { Inject } from "@angular/core";
export interface Articulo{
  id: string;
  nombre : string;
  cantidad : number;
  categoria : string;
  precio : number;
  imageURL : string;
  imageName : string;
  oferta : string;
  descripcion : string;
  offerPrice : number;
  
}
