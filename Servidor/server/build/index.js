"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.TESTING || "hola");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const auth_1 = __importDefault(require("./routes/auth"));
const app_1 = __importDefault(require("./app"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        app_1.default;
        this.config();
        this.routes();
    }
    config() {
        app_1.default.set('port', process.env.PORT || 4000);
        app_1.default.use(morgan_1.default('dev'));
        app_1.default.use(cors_1.default());
        app_1.default.use(express_1.default.json());
        app_1.default.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        app_1.default.use(indexRoutes_1.default);
        app_1.default.use('/api/auth', auth_1.default);
    }
    start() {
        app_1.default.listen(app_1.default.get("port"), () => {
            console.log("servidor ejecuntandose en el puerto: ", app_1.default.get('port'));
        });
    }
}
const server = new Server();
server.start();
