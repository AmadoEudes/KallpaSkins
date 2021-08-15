"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // db es equivalente a pool del tutorial
const moment_1 = __importDefault(require("moment"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsersController {
    constructor() {
        //creamos una constante para crear un token del usurario
        this.CreateToken = (user) => {
            let payload = {
                userId: user.id,
                created_at: moment_1.default().unix(),
                expire_at: moment_1.default().add(1, 'day').unix()
            };
            return jsonwebtoken_1.default.encode(payload, process.env.TOKEN_KEY || "Token-Auth");
        };
        database_1.default;
    }
    isLower(letter) {
        return letter == letter.toLowerCase();
    }
    isUpper(letra) {
        return letra == letra.toUpperCase();
    }
    passwordCorrect(passwd) {
        let numbers = 0;
        let LowLetters = 0;
        let UpperLetters = 0;
        for (let paswd_leter = 0; paswd_leter < passwd.length; paswd_leter++) {
            var valoresAceptados = /^[0-9]+$/;
            if (this.isLower(passwd.charAt(paswd_leter))) {
                LowLetters = LowLetters + 1;
            }
            ;
            if (this.isUpper(passwd.charAt(paswd_leter))) {
                UpperLetters = UpperLetters + 1;
            }
            ;
            if (passwd.charAt(paswd_leter).match(valoresAceptados)) {
                numbers = numbers + 1;
            }
            ;
            console.log(passwd.charAt(paswd_leter));
        }
        ;
        const total = LowLetters + UpperLetters + numbers;
        return total >= 8 && numbers > 0 && LowLetters > 0 && UpperLetters > 0;
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const password_begin = req.body.password;
            if (true) {
                req.body.password = bcrypt_1.default.hashSync(password_begin, 10);
                yield database_1.default.query('INSERT INTO usuarios SET ?', [req.body]);
                res.json(req.body);
            }
            else {
                res.json({
                    message: "La contraseña debe contener al menos 8 caracteres entre números, mayúsculas y minúsculas"
                });
            }
            //
        });
    }
    ;
    login(req, res) {
        res.send('LOGIN');
    }
    ;
    profile(req, res) {
        res.send('PROFILE');
    }
    ;
}
const usersController = new UsersController();
exports.default = usersController;
