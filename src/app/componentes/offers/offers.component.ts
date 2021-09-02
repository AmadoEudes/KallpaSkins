import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { CartService } from '../shopping-cart/cart.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  items : any[] = [];

  categoryValue: string = "OFERTAR";



  constructor(public firestore: AngularFirestore, public authService : AuthService, private firebaseStorageService: FirebaseStorageService, private cartService: CartService) {
    //this.items = firestore.collection("articulos").valueChanges();

  }

  isUser: Boolean = false;

  async userExist(){
    const user = await this.authService.getCurrentUser();
    if(user){
      this.isUser = true;
      console.log(this.isUser);
    }else{
      console.log(this.isUser)
    }
  }

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts(){
    this.firebaseStorageService.getProducts().subscribe(data => {
      this.items = [];
      
      data.forEach((element:any)=>{
        /*console.log(element.payload.doc.id);*/
        /*console.log(element.payload.doc.data());*/
        if(element.payload.doc.data()['oferta'] == this.categoryValue){
          this.items.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        }
      })
      console.log(this.items)
    })
  }

}
