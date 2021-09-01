import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(
    private storage: AngularFireStorage,
    private firestore : AngularFirestore
  ) { }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  getUsers():Observable<any>{
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  //obtene productos
  getProducts(): Observable<any>{
    return this.firestore.collection("articulos").snapshotChanges();
  }
}
