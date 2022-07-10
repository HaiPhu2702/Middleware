"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const on_headers_1 = __importDefault(require("on-headers"));
const routes = (0, express_1.Router)();
routes.use((req, res, next) => {
    let start = new Date().getTime();
    (0, on_headers_1.default)(res, () => {
        let duration = new Date().getTime() - start;
        console.log("Router-level middleware url: " + req.url + " có duration " + duration + "ms");
    });
});
exports.default = routes;
//# sourceMappingURL=router.js.map