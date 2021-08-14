import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.TESTING || "hola")

import morgan from 'morgan'
import cors from 'cors'

import indexRoutes  from './routes/indexRoutes';
import usersRoutes  from './routes/auth';

import app from "./app";
import express from 'express';

class Server{
    

    constructor(){
        app;
        this.config();
        this.routes();
    }

    config(): void{
        app.set('port', process.env.PORT || 4000);
        app.use(morgan('dev'));
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
    }

    routes():void {
        app.use(indexRoutes);
        app.use('/api/auth',usersRoutes);
    }

    start () : void {
        app.listen(app.get("port"),  () => {
            console.log("servidor ejecuntandose en el puerto: ", app.get('port'));
        });
    }
}

const server = new Server();
server.start();