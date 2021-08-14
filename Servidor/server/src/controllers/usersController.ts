
import {Request, response, Response} from 'express';

import pool from '../database'; // db es equivalente a pool del tutorial


import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
class UsersController{

    constructor(){
        pool;
    }

    private isLower(letter:string):boolean{
        return letter == letter.toLowerCase();
    }

    private isUpper(letra:string):boolean{
        return letra == letra.toUpperCase();
    }
    
    public passwordCorrect(passwd:string):boolean{
        let numbers:number = 0;
        let LowLetters:number  = 0;
        let UpperLetters :number = 0;

        for(let paswd_leter:number = 0; paswd_leter < passwd.length; paswd_leter ++){

            var valoresAceptados = /^[0-9]+$/;

            if(this.isLower(passwd.charAt(paswd_leter))){
                LowLetters = LowLetters + 1;
            };
            if(this.isUpper(passwd.charAt(paswd_leter))){
                UpperLetters = UpperLetters + 1;
            };
            if(passwd.charAt(paswd_leter).match(valoresAceptados)){
                numbers = numbers + 1;
            };
            console.log(passwd.charAt(paswd_leter));
        };
        const total : number = LowLetters + UpperLetters + numbers
        return total >= 8 && numbers > 0 && LowLetters > 0 && UpperLetters > 0;
    }

    public async signup(req : Request, res : Response) {
        const password_begin : string = req.body.password;

        if(true){
            console.log("verdad")
            req.body.password = bcrypt.hashSync(password_begin, 10);
            await pool.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json(req.body);
        }else{
            res.json({
                message : "La contraseña debe contener al menos 8 caracteres entre números, mayúsculas y minúsculas"
            });
        }
            
        //
        
    };


    public signin(req : Request, res : Response){
        res.send('SIGNIN')
    };

    public profile(req : Request, res : Response){
        res.send('PROFILE')
    };

    
}

const  usersController = new UsersController();
export default usersController;