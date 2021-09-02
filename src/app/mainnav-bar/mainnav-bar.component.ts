
import { AuthService } from './../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../componentes/shopping-cart/cart.service';

@Component({
  selector: 'app-mainnav-bar',
  templateUrl: './mainnav-bar.component.html',
  styleUrls: ['./mainnav-bar.component.css']
})
export class MainnavBarComponent implements OnInit {

  categoryValue: string | null;

  cartIconValue: number= 0;

  categorias : string[] = ['FIBRA CARBONO', 'CUERO', 'FROSTED GLITTER', 'CAMUFLAJE',
  'TEXTURA', 'MÁRMOL', 'ASTRONAUTA', 'FRASES', 'CUTE',
  'LITTLE PETS', 'KITTEN', 'SWEET HOLDOVER']

  title = 'KallpaSkins';

  isAdmin = false
  showAdminBoard = false;
  username : any = '';
  public User$ : Observable<any> = this.authService.afauth.user;

  constructor (public authService : AuthService, private router : Router, private cartService: CartService, private aRoute: ActivatedRoute,) { 
    this.categoryValue  = this.aRoute.snapshot.paramMap.get('categoryValue')
  }


  isUser: Boolean = false;

  async userExist(){
    const user = await this.authService.getCurrentUser();
    if(user){
      this.isUser = true;
      console.log(this.isUser);
    }else{
      this.isUser = false;
      console.log(this.isUser)
    }
  }

  ngOnInit(): void {
    this.cartService.recibirDatos_cartIconUp().subscribe(
      (item: any) => {
        this.cartIconValue+=1;
      },
    );
    this.cartService.recibirDatos_cartIconDown().subscribe(
      (item: any) => {
      this.cartIconValue-=1;
      },
    );
    this.cartService.recibirDatos_cartIconRefresh().subscribe(
      (item: any) => {
      this.cartIconValue = 0;
      },
    );
  }

  async logOut(){
    this.authService.logOut();
    localStorage.clear()
    this.router.navigate(["/home"])
  }
  verificarLogin(){
    this.userExist()
    this.cartService.enviarDatos_userVerify(this.isUser);
  }

  sendCategory(category: string){
      
      this.cartService.enviarDatos_categories(category);
      
      
    }




}
