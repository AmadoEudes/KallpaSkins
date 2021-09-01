import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  

  constructor(
    public storage: AngularFireStorage, public firestore: AngularFirestore
  ) { }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  getProducts(): Observable<any>{
    return this.firestore.collection('articulos').snapshotChanges();
  }

  getProduct(id: string): Observable<any>{
    return this.firestore.collection('articulos').doc(id).snapshotChanges();
  }

  deleteProduct(id: string): Promise<any>{
    return this.firestore.collection('articulos').doc(id).delete();
  }

  actualizarProducto(id: string, data: any):  Promise<any>{
    return this.firestore.collection('articulos').doc(id).update(data);
  }
}