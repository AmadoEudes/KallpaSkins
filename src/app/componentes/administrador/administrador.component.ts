import { Articulo } from './../../models/articulo';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';

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

  constructor(private fbuilder : FormBuilder, private firebaseStorage: FirebaseStorageService) {
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

  //Esto es para conectarse con el Storage de Firebase y subir la imagen
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  })

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  public cambioArchivo(event: any) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  //Sube el archivo a Cloud Storage
  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);


    referencia.getDownloadURL().subscribe((URL) => {
      this.articulo.imageURL = URL;
      
    });
    console.log(this.URLPublica)
  }
}




