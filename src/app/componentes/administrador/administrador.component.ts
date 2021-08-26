import { ArticuloService } from './../../services/producto/articulo.service';
import { Articulo } from './../../models/articulo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  offer : 0
  }

  // lista de categoria
  categorias : string[] = ['FIBRA CARBONO', 'CUERO', 'FROSTED GLITTER', 'CAMUFLAJE',
  'TEXTURA', 'MÁRMOL', 'ASTRONAUTA', 'FRASES', 'CUTE',
  'LITTLE PETS', 'KITTEN', 'SWEET HOLDOVER']

  oferta : string[] = ['NO', 'OFERTAR']

  constructor(private fbuilder : FormBuilder, private articuloService : ArticuloService, private toastr: ToastrService) {
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
    if(this.createArticulo.invalid){
      return
    }
    const articulo : any = {
      nombre : this.createArticulo.value.nombre,
      cantidad : this.createArticulo.value.cantidad,
      Categoria : this.createArticulo.value.Categoria,
      precio : this.createArticulo.value.precio,
      imageURL : this.createArticulo.value.imageURL,
      oferta : this.createArticulo.value.oferta,
      descripción : this.createArticulo.value.descripción,
      offerPrice : this.createArticulo.value.offerPrice,
      created_at : new Date(),
      upload_at : new Date()
    }
    this.articuloService.addArticle(articulo).then(()=> {
      this.toastr.success('Articulo registrado con exito!', 'Articulo registrado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch( err => {
            console.log(err)
    })
    console.log(articulo);
  }

}
