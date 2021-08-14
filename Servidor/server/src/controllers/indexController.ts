import {Request, Response} from 'express';

class IndexController{
    public index (req: Request , res : Response){
        res.json('text: The API is in /api_rest/user/auth/')
    }
}

export const  indexController = new IndexController();