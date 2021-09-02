import { AuthService } from './services/auth/auth-service.service';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from "./componentes/usuario/usuario.component";
import {LoginComponent} from './login-checkin/login-checkin.component'
import { HomeComponent } from "../app/componentes/home/home.component";
import { AdministradorComponent } from "./componentes/administrador/administrador.component";
import { ProductItemComponent } from './componentes/home/product-item/product-item.component';
import { ProductItemEditComponent } from './componentes/home/product-item-edit/product-item-edit.component';
import { OffersComponent } from './componentes/offers/offers.component';
import { AstronautaComponent } from './componentes/categories/astronauta/astronauta.component';



const routes: Routes = [
  {
    path : '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'offers',
    component : OffersComponent
  },
  {
    path : 'categories/Astronauta',
    component : AstronautaComponent,
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'signup',
    component : RegisterComponent
  },
  {
    path : 'acount/AIzaSyC8JDeAyKIob3kZWaYEDbZBrb1epwDJA9g/admin',
    component : AdministradorComponent
  },
  {
    path : 'acount/AIzaSyC8JDeAyKIob3kZWaYEDba$$%%%$/user',
    component : UsuarioComponent
  },
  {
    path : 'editProduct/:id',
    component : ProductItemEditComponent
  },
  {
    path: '**',
    redirectTo :'/@home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
