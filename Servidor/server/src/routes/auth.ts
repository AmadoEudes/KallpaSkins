import { Router} from "express";
import usersController from "../controllers/usersController";

import UsersController from '../controllers/usersController'

class UsersRoutes{
    public router : Router = Router();
    constructor(){
        this.config()
    }
    config(): void{
        this.router.post('/signup', UsersController.signup);
        this.router.post('/signin', UsersController.signin);
        this.router.get('/profile', UsersController.profile);
        
    }
}
const usersroutes = new UsersRoutes();
export default usersroutes.router;