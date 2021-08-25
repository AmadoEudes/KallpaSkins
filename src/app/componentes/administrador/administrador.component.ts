import { Articulo } from './../../models/articulo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  createArticulo : FormGroup;
  submitted = false;
  articulo : Articulo = {
    nombre : "",
  cantidad : 0,
  categoria : '',
  precio : 0,
  imageURL : '',
  oferta : '',
  descripcion : '',
  offerPrice : 0
  }

  // lista de categoria
  categorias : string[] = ['FIBRA CARBONO', 'CUERO', 'FROSTED GLITTER', 'CAMUFLAJE',
  'TEXTURA', 'MÁRMOL', 'ASTRONAUTA', 'FRASES', 'CUTE',
  'LITTLE PETS', 'KITTEN', 'SWEET HOLDOVER']

  oferta : string[] = ['NO', 'OFERTAR']

  constructor(private fbuilder : FormBuilder) {
    this.createArticulo = this.fbuilder.group({
      nombre : ['',Validators.required],
      cantidad : ['',Validators.required],
      Categoria : ['',Validators.required],
      precio : ['',Validators.required],
      imageURL : ['',Validators.required],
      oferta : ['',Validators.required],
      descripción : [''],
      offerPrice : ['']
    })
  }

  ngOnInit(): void {
  }
   // Choose city using select dropdown
   changeCategory(e:any) {
    this.createArticulo.setValue(e.target.value, {
      onlySelf: true
    })

  }
  isSubmit = false

  agregarArticulo(){
    this.isSubmit = true
    console.log(this.createArticulo);
  }

}
