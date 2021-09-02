import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
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
import { FooterComponent } from './componentes/footer/footer.component';
import { CartItemComponent } from './componentes/shopping-cart/cart-item/cart-item.component';
import { ProductItemDetailsComponent } from './componentes/home/product-item-details/product-item-details.component';
import { ProductItemEditComponent } from './componentes/home/product-item-edit/product-item-edit.component';
import { OffersComponent } from './componentes/offers/offers.component';
import { FibraCarbonoComponent } from './componentes/categories/fibra-carbono/fibra-carbono.component';
import { CueroComponent } from './componentes/categories/cuero/cuero.component';
import { FrostedGlitterComponent } from './componentes/categories/frosted-glitter/frosted-glitter.component';
import { CamuflajeComponent } from './componentes/categories/camuflaje/camuflaje.component';
import { TexturaComponent } from './componentes/categories/textura/textura.component';
import { MarmolComponent } from './componentes/categories/marmol/marmol.component';
import { AstronautaComponent } from './componentes/categories/astronauta/astronauta.component';
import { FrasesComponent } from './componentes/categories/frases/frases.component';
import { CuteComponent } from './componentes/categories/cute/cute.component';
import { LittlePetsComponent } from './componentes/categories/little-pets/little-pets.component';
import { KittenComponent } from './componentes/categories/kitten/kitten.component';
import { SweetHoldoverComponent } from './componentes/categories/sweet-holdover/sweet-holdover.component';
import { ViewUserComponent } from './componentes/usuario/view-user/view-user.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




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
    ShoppingCartComponent,
    FooterComponent,
    CartItemComponent,
    ProductItemDetailsComponent,
    ProductItemEditComponent,
    OffersComponent,
    FibraCarbonoComponent,
    CueroComponent,
    FrostedGlitterComponent,
    CamuflajeComponent,
    TexturaComponent,
    MarmolComponent,
    AstronautaComponent,
    FrasesComponent,
    CuteComponent,
    LittlePetsComponent,
    KittenComponent,
    SweetHoldoverComponent,
    ViewUserComponent
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
    NgParticlesModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [UserServicesService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
