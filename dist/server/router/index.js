"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GET_1 = __importDefault(require("./GET"));
const POST_1 = __importDefault(require("./POST"));
exports.paths = {
    GET: GET_1.default,
    POST: POST_1.default
};
