"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/signup', usersController_1.default.signup);
        this.router.post('/login', usersController_1.default.login);
        this.router.get('/profile', usersController_1.default.profile);
    }
}
const usersroutes = new UsersRoutes();
exports.default = usersroutes.router;
