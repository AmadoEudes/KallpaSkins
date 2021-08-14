"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json('text: The API is in /api_rest/user/auth/');
    }
}
exports.indexController = new IndexController();
