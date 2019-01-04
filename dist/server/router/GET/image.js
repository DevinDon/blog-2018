"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_entity_1 = require("../../entity/image.entity");
exports.image = async (c, next) => {
    const req = {
        id: c.query.id
    };
    const result = await image_entity_1.Image.findOne(req.id);
    c.body = {
        id: Date.now(),
        status: Boolean(result),
        content: result || {}
    };
    await next();
};
exports.default = exports.image;
