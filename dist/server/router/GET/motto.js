"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const motto_entity_1 = require("../../entity/motto.entity");
exports.motto = async (c, next) => {
    const req = {
        id: c.query.id
    };
    const result = await motto_entity_1.Motto.findOne(req.id);
    c.body = {
        id: Date.now(),
        status: Boolean(result),
        content: result || {}
    };
    await next();
};
exports.default = exports.motto;
