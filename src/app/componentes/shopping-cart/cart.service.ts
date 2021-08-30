import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class CartService{
    subject = new Subject();
    subject_remove = new Subject();
    subject_cantidad = new Subject();




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
}