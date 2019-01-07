"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const song_entity_1 = __importDefault(require("../../entity/song.entity"));
exports.songs = async (c, next) => {
    const req = {
        amount: c.request.body.amount || 6
    };
    const results = await song_entity_1.default
        .createQueryBuilder()
        .offset(config_1.getOffset(await song_entity_1.default.count(), req.amount))
        .limit(req.amount)
        .getMany();
    const data = [];
    for (const result of results) {
        data.push({
            id: result.id,
            title: result.title,
            artist: result.artist,
            album: result.album,
            time: result.time
        });
    }
    c.body = {
        id: Date.now(),
        status: Boolean(results.length),
        content: data
    };
    await next();
};
exports.default = exports.songs;
