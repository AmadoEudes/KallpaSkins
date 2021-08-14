"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
const gamesController_2 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_2.default.lista);
        this.router.get('/:id', gamesController_2.default.onegame);
        this.router.post('/', gamesController_1.default.createGame);
        this.router.put('/:id/', gamesController_2.default.update);
        this.router.delete('/:id/', gamesController_2.default.delete);
    }
}
const gamesroutes = new GamesRoutes();
exports.default = gamesroutes.router;
