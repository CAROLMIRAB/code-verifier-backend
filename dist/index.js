"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('Welcome to my API Restfull: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => console.log(`The server is running on port ${port}`));
//# sourceMappingURL=index.js.map