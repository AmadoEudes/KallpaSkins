import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgParticlesModule} from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavBarComponent } from './mainnav-bar/mainnav-bar.component';
import { LoginComponent } from './login-checkin/login-checkin.component';
import { ToastrModule } from 'ngx-toastr';

import { UserServicesService } from "../app/services/user-services.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from "../app/services/auth/auth-service.service";

import { HomeComponent } from './componentes/home/home.component';
import { AccessComponent } from './login-checkin/access/access.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RegisterComponent } from './register/register.component';
import { SpinItemComponent } from './componentes/spin-item/spin-item.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';


import { ProductItemComponent } from './componentes/home/product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainnavBarComponent,
    LoginComponent,
    HomeComponent,
    AccessComponent,
    UsuarioComponent,
    AdministradorComponent,
    RegisterComponent,
    ProductItemComponent,
    SpinItemComponent,
    SpinItemComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgParticlesModule
  ],
  providers: [UserServicesService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
