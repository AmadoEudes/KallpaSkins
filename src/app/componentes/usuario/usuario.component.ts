import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.usercollection)
    console.log(this.datos)
  }

  userDatas = (localStorage.getItem('user'))
  usercollection = JSON.parse(localStorage.getItem('KIob3kZW_INfo')!);

  user = JSON.parse(this.userDatas!)

  datos = this.user.providerData[0]
}
