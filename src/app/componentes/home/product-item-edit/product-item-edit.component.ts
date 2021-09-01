import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { Articulo } from 'src/app/models/articulo';
import { Product } from 'src/app/models/product';
import { ArticuloService } from 'src/app/services/articulo.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { CartService } from '../../shopping-cart/cart.service';

@Component({
  selector: 'app-product-item-edit',
  templateUrl: './product-item-edit.component.html',
  styleUrls: ['./product-item-edit.component.css']
})
export class ProductItemEditComponent implements OnInit {
  createArticulo : FormGroup;
  submitted = false;

  oferta_aux: string="";
  id: string | null; 

  // lista de categoria
  categorias : string[] = ['FIBRA CARBONO', 'CUERO', 'FROSTED GLITTER', 'CAMUFLAJE',
  'TEXTURA', 'MÁRMOL', 'ASTRONAUTA', 'FRASES', 'CUTE',
  'LITTLE PETS', 'KITTEN', 'SWEET HOLDOVER']

  oferta : string[] = ['NO', 'OFERTAR']


  constructor(private fbuilder : FormBuilder, private firebaseStorage: FirebaseStorageService, private aRoute: ActivatedRoute, private router: Router) {
    this.productLocal = JSON.parse(localStorage.getItem('product')!)
    this.id  = this.aRoute.snapshot.paramMap.get('id')
    console.log(this.id)
    this.createArticulo = this.fbuilder.group({
      nombre : ['',Validators.required],
      cantidad : ['',Validators.required],
      categoria : ['',Validators.required],
      precio : ['',Validators.required],
      oferta : ['',Validators.required],
      descripcion : [''],
      offerPrice : ['']
    })
  }
  productLocal!: Articulo;

  ngOnInit() {
    this.esEditar();
  }
   // Choose city using select dropdown
  changeCategory(e:any) {
    this.createArticulo.setValue(e.target.value, {
      onlySelf: true
    })

  }

  esEditar(){
    if(this.id !== null){
      this.firebaseStorage.getProduct(this.id).subscribe(data => {
        //console.log(data.payload.data()['nombre']);
        this.createArticulo.setValue({
          nombre : data.payload.data()['nombre'],
          cantidad : data.payload.data()['cantidad'],
          categoria : data.payload.data()['categoria'],
          precio : data.payload.data()['precio'],
          oferta : data.payload.data()['oferta'],
          descripcion : data.payload.data()['descripcion'],
          offerPrice : data.payload.data()['offerPrice']
        })
      })
    }
  }

  productUpdate(){
      console.log(this.id)
      if(this.id != null){
        console.log("this.editarproducto()")
        this.editarProducto(this.id);
      }
  }
  editarProducto(id: string){
    const producto: any = {
      nombre : this.createArticulo.value.nombre,
      cantidad : this.createArticulo.value.cantidad,
      categoria : this.createArticulo.value.categoria,
      precio : this.createArticulo.value.precio,
      oferta : this.createArticulo.value.oferta,
      descripcion : this.createArticulo.value.descripcion,
      offerPrice : this.createArticulo.value.offerPrice,
    }

    this.firebaseStorage.actualizarProducto(id, producto).then(() =>{
      console.log("actualizado con éxito")
      this.router.navigate(['/home'])
    })
  }
}
