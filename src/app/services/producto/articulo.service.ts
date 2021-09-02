import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private firestore: AngularFirestore) { }

  addArticle(articulo : any): Promise<any>{
    return this.firestore.collection('articulos').add(articulo);
  }

  async addUser(user:any):Promise<any>{
    return await this.firestore.collection('usuarios').add(user);
  }
}
