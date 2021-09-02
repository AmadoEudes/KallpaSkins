import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private firebaseStorageService:FirebaseStorageService) {
  constructor(public authService : AuthService,) { }

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
    this.getUserdates();
    this.userExist();

  }



  userDatas = (localStorage.getItem('user'))
  usercollection = JSON.parse(localStorage.getItem('KIob3kZW_INfo')!);

  user = JSON.parse(this.userDatas!)

  datos = this.user.providerData[0]

  date = 0;

  datosUsuario = {
    apellidos: "",
    celphone: "",
    departamento: "",
    distrito: "",
    email: "",
    id: "",
    nombres: "",
    photoURL: "",
    provincia: "",
  }


  getUserdates(){
    for(let i = 0; i < this.usercollection.length; i++){
      if(this.usercollection[i].email == this.datos.email){
        this.datosUsuario = this.usercollection[i];
        break
      }
    }
    console.log(this.datosUsuario)
  }



}
