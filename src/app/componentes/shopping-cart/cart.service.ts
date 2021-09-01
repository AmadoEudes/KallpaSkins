import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class CartService{
    subject = new Subject();
    subject_remove = new Subject();
    subject_cantidad = new Subject();

    subject_cartIconUp = new Subject();
    subject_cartIconDown = new Subject();

    subject_cartIconRefresh = new Subject();

    subject_productDetails = new Subject();

    subject_editProduct = new Subject();

    subject_userVerify = new Subject();

    subject_categories = new Subject();

    constructor(){}

    // tslint:disable-next-line: typedef
    enviarDatos(item: unknown){
        // console.log(item)
        this.subject.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos(){
        return this.subject.asObservable();
    }

    // tslint:disable-next-line: typedef
    enviarDatos_remove(item: unknown){
        // console.log(item)
        this.subject_remove.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_remove(){
        return this.subject_remove.asObservable();
    }
    
    // tslint:disable-next-line: typedef
    enviarDatos_cantidad(item: unknown){
        // console.log(item)
        this.subject_cantidad.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_cantidad(){
        return this.subject_cantidad.asObservable();
    }

    // tslint:disable-next-line: typedef
    enviarDatos_cartIconUp(item: unknown){
        // console.log(item)
        this.subject_cartIconUp.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_cartIconUp(){
        return this.subject_cartIconUp.asObservable();
    }
    // tslint:disable-next-line: typedef
    enviarDatos_cartIconDown(item: unknown){
        // console.log(item)
        this.subject_cartIconDown.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_cartIconDown(){
        return this.subject_cartIconDown.asObservable();
    }

    enviarDatos_cartIconRefresh(item: unknown){
        // console.log(item)
        this.subject_cartIconRefresh.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_cartIconRefresh(){
        return this.subject_cartIconRefresh.asObservable();
    }

    enviarDatos_productDetails(item: unknown){
        // console.log(item)
        this.subject_productDetails.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_productDetails(){
        return this.subject_productDetails.asObservable();
    }

    enviarDatos_userVerify(item: unknown){
        // console.log(item)
        this.subject_userVerify.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_userVerify(){
        return this.subject_userVerify.asObservable();
    }

    enviarDatos_editProduct(item: unknown){
        // console.log(item)
        this.subject_editProduct.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_editProduct(){
        return this.subject_editProduct.asObservable();
    }

    enviarDatos_categories(item: unknown){
        // console.log(item)
        this.subject_categories.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_categories(){
        return this.subject_categories.asObservable();
    }
}