import { ArticuloService } from './../../services/producto/articulo.service';
import { Articulo } from './../../models/articulo';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  createArticulo : FormGroup;
  submitted = false;
  articulo : Articulo = {
  id: "",
  nombre : "",
  cantidad : 0,
  categoria : '',
  precio : 0,
  imageURL : '',
  imageName: "",
  oferta : '',
  descripcion : '',
  offerPrice : 0
  }

  // lista de categoria
  categorias : string[] = ['FIBRA CARBONO', 'CUERO', 'FROSTED GLITTER', 'CAMUFLAJE',
  'TEXTURA', 'ASTRONAUTA']

  oferta : string[] = ['NO', 'OFERTAR']


  constructor(private fbuilder : FormBuilder, private articuloService : ArticuloService, private toastr: ToastrService,private firebaseStorage: FirebaseStorageService) {

    this.createArticulo = this.fbuilder.group({
      nombre : ['',Validators.required],
      cantidad : ['',Validators.required],
      categoria : ['',Validators.required],
      precio : ['',Validators.required],
      imageURL : ['',Validators.required],
      oferta : ['',Validators.required],
      descripcion : [''],
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

  fileName: string = "";

  agregarArticulo(){
    this.isSubmit = true
    if(this.createArticulo.invalid){
      return
    }
    
    const Articulo : any = {
      nombre : this.createArticulo.value.nombre,
      cantidad : this.createArticulo.value.cantidad,
      categoria : this.createArticulo.value.categoria,
      precio : this.createArticulo.value.precio,
      imageURL : this.createArticulo.value.imageURL,
      imageName : this.fileName,
      oferta : this.createArticulo.value.oferta,
      descripcion : this.createArticulo.value.descripcion,
      offerPrice : this.createArticulo.value.offerPrice,
      created_at : new Date(),
      upload_at : new Date()
    }
    this.articuloService.addArticle(Articulo).then(()=> {
      this.toastr.success('Articulo registrado con exito!', 'Articulo registrado', {
        positionClass: 'toast-bottom-right'
      });

    }).catch( err => {
            console.log(err)
    })
    this.articulo.nombre = '';
    this.articulo.cantidad = 0;
    this.articulo.categoria = '';
    this.articulo.precio = 0;
    this.articulo.oferta = '';
    this.articulo.imageURL = '';
    this.articulo.descripcion = '';
    this.articulo.offerPrice = 0;
    this.submitted = false

  }

  //Esto es para conectarse con el Storage de Firebase y subir la imagen
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  })

  public mensajeArchivo = 'Selecccione un archivo';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  downloadURL: any;

  public cambioArchivo(event: any) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
        this.fileName = this.mensajeArchivo;
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

    tarea.snapshotChanges().pipe(
      finalize(()=>{
      this.downloadURL= referencia.getDownloadURL()
      this.downloadURL.subscribe((url: string) =>(this.articulo.imageURL =url));
      })
      )
      .subscribe();

    referencia.getDownloadURL().subscribe((URL) => {
      this.articulo.imageURL = URL;

    });
    console.log(this.fileName)
    console.log(this.nombreArchivo)

  }
}

