"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const image_entity_1 = require("../../entity/image.entity");
exports.images = async (c, next) => {
    const req = {
        amount: c.request.body.amount
    };
    const results = await image_entity_1.Image
        .createQueryBuilder()
        .offset(config_1.getOffset(await image_entity_1.Image.count(), req.amount || 6))
        .limit(req.amount || 6)
        .getMany();
    const data = [];
    for (const result of results) {
        data.push({
            id: result.id,
            link: result.link,
            image: result.image,
            text: result.text,
            date: result.date
        });
    }
    c.body = {
        id: Date.now(),
        status: Boolean(results.length),
        content: data
    };
    await next();
};
exports.default = exports.images;
