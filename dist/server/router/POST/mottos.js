"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const motto_entity_1 = require("../../entity/motto.entity");
exports.mottos = async (c, next) => {
    const req = {
        amount: c.request.body.amount
    };
    const results = await motto_entity_1.Motto
        .createQueryBuilder()
        .offset(config_1.getOffset(await motto_entity_1.Motto.count(), req.amount || 6))
        .limit(req.amount || 6)
        .getMany();
    const data = [];
    for (const result of results) {
        data.push({
            id: result.id,
            author: result.author,
            text: result.text
        });
    }
    c.body = {
        id: Date.now(),
        status: Boolean(data.length),
        content: data
    };
    await next();
};
exports.default = exports.mottos;
