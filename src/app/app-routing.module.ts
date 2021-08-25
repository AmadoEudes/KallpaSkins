import { AuthService } from './services/auth/auth-service.service';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from "./componentes/usuario/usuario.component";
import {LoginComponent} from './login-checkin/login-checkin.component'
import { HomeComponent } from "../app/componentes/home/home.component";
import { AdministradorComponent } from "./componentes/administrador/administrador.component";



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
