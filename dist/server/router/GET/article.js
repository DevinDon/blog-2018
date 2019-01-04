"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_entity_1 = require("../../entity/article.entity");
exports.article = async (c, next) => {
    const req = {
        id: c.query.id
    };
    const result = await article_entity_1.Article.findOne(req.id);
    c.body = {
        id: Date.now(),
        status: Boolean(result),
        content: result || {}
    };
    await next();
};
exports.default = exports.article;
