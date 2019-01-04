"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const article_entity_1 = require("../../entity/article.entity");
exports.articles = async (c, next) => {
    const req = {
        amount: c.request.body.amount
    };
    const results = await article_entity_1.Article
        .createQueryBuilder()
        .offset(config_1.getOffset(await article_entity_1.Article.count(), req.amount || 6))
        .limit(req.amount || 6)
        .getMany();
    const data = [];
    for (const result of results) {
        data.push({
            id: result.id,
            title: result.title,
            author: result.author,
            date: Date.now(),
            summary: result.summary,
            text: result.text,
            html: result.html
        });
    }
    c.body = {
        id: Date.now(),
        status: Boolean(results.length),
        content: data
    };
    await next();
};
exports.default = exports.articles;
