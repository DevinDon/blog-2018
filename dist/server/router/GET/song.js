"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const song_entity_1 = __importDefault(require("../../entity/song.entity"));
exports.song = async (c, next) => {
    const req = {
        id: c.query.id
    };
    const result = await song_entity_1.default.findOne(req.id);
    c.body = {
        id: Date.now(),
        status: Boolean(result),
        content: result || {}
    };
    await next();
};
exports.default = exports.song;
