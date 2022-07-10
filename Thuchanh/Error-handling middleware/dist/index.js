"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const port = 8080;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/one', (req, res, next) => {
    fs_1.default.promises.readFile("./one.txt")
        .then(data => res.send(data))
        .catch(err => next(err));
});
app.use((err, req, res, next) => {
    console.error('Error:', err.type);
    if (err.type === 'time-out') {
        res.status(408).send(err);
    }
    else {
        res.status(500).send(err);
    }
});
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=index.js.map