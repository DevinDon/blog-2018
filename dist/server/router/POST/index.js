"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const articles_1 = __importDefault(require("./articles"));
const images_1 = __importDefault(require("./images"));
const mottos_1 = __importDefault(require("./mottos"));
const songs_1 = __importDefault(require("./songs"));
const in_1 = __importDefault(require("./sign/in"));
const index = async (c, next) => {
    c.body = {
        id: Date.now(),
        status: true,
        content: {
            test10_5: config_1.getOffset(10, 5),
            test10_10: config_1.getOffset(10, 10),
            cowsay: `
 ________
< Hello! >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
    `
        }
    };
    await next();
};
const notFound = async (c, next) => {
    await next();
    if (c.status === 404) {
        c.body = {
            id: Date.now(),
            status: false,
            content: '404 Not Found'
        };
    }
};
exports.POSTPATHS = {
    'index': {
        path: '/',
        ware: index,
        cors: config_1.allowAllCORS
    }, 'articles': {
        path: '/articles',
        ware: articles_1.default,
        cors: config_1.allowAllCORS
    }, 'images': {
        path: '/images',
        ware: images_1.default,
        cors: config_1.allowAllCORS
    }, 'mottos': {
        path: '/mottos',
        ware: mottos_1.default,
        cors: config_1.allowAllCORS
    }, 'songs': {
        path: '/songs',
        ware: songs_1.default,
        cors: config_1.allowAllCORS
    }, 'sign in': {
        path: '/sign/in',
        ware: in_1.default,
        cors: config_1.allowAllCORS
    }
};
exports.default = exports.POSTPATHS;
