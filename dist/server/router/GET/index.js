"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const article_1 = __importDefault(require("./article"));
const image_1 = __importDefault(require("./image"));
const motto_1 = __importDefault(require("./motto"));
const song_1 = __importDefault(require("./song"));
const statistic_entity_1 = __importDefault(require("../../entity/statistic.entity"));
const index = async (c, next) => {
    c.body = {
        query: c.query,
        request: c.request,
        times: {
            today: await statistic_entity_1.default
                .createQueryBuilder()
                .where('`when` > :today', { today: new Date(new Date().toLocaleDateString()).getTime() })
                .getCount(),
            total: await statistic_entity_1.default.count()
        }
    };
    await next();
};
const notFound = async (c, next) => {
    await next();
    if (c.status === 404) {
        c.body = config_1.files.index.toString();
        c.status = 200;
    }
};
exports.GETPATH = {
    'index': {
        path: '/',
        ware: index,
        cors: config_1.allowAllCORS
    },
    'article': {
        path: '/article',
        ware: article_1.default,
        cors: config_1.allowAllCORS
    },
    'image': {
        path: '/image',
        ware: image_1.default,
        cors: config_1.allowAllCORS
    },
    'motto': {
        path: '/motto',
        ware: motto_1.default,
        cors: config_1.allowAllCORS
    },
    'song': {
        path: '/song',
        ware: song_1.default,
        cors: config_1.allowAllCORS
    },
    '404': {
        path: '**',
        ware: notFound,
        cors: config_1.allowAllCORS,
        withoutPrefix: true
    }
};
exports.default = exports.GETPATH;
