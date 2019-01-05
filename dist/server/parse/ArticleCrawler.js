"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const http_1 = require("http");
const article_entity_1 = require("../entity/article.entity");
async function getArticle(id) {
    return new Promise((rej) => {
        console.log(`正在读取第 ${id} 篇文章.`);
        http_1.request(`http://wufazhuce.com/article/${id}`, res => {
            const chunks = [];
            res.on('data', chunk => {
                chunks.push(chunk);
            });
            res.on('end', async () => {
                const body = Buffer.concat(chunks);
                console.log(`第 ${id} 篇文章读取完毕.`);
                rej({
                    id,
                    dom: new jsdom_1.JSDOM(body.toString()).window.document
                });
            });
        }).end();
    });
}
async function parseArticle(articleNode) {
    console.log(`开始解析第 ${articleNode.id} 篇文章.`);
    const dom = articleNode.dom;
    const article = {
        id: articleNode.id,
        title: dom.querySelector('.articulo-titulo').innerHTML.trim(),
        author: dom.querySelector('.articulo-autor').innerHTML.trim().slice(3),
        date: 0,
        summary: dom.querySelector('.comilla-cerrar').innerHTML.trim(),
        text: dom.querySelector('.articulo-contenido').textContent.trim(),
        html: dom.querySelector('.articulo-contenido').innerHTML
    };
    console.log(`第 ${article.id} 篇文章解析完毕.`);
    return article;
}
async function save(article) {
    if (await article_entity_1.Article.findOne({ id: article.id })) {
        console.log(`文章 ${article.id} ${article.title} 已存在, 进行更新操作.`);
        return article_entity_1.Article.update({ id: article.id }, article);
    }
    else {
        return article_entity_1.Article.insert(article);
    }
}
async function run(id = 1) {
    for (let j = id; j < 3600; j++) {
        await getArticle(j)
            .then(v => parseArticle(v))
            .then(v => save(v))
            .then(v => console.log(`数据已保存至数据库, 编号: ${j}.`))
            .catch(r => console.error(`出现错误: ${r}, 文章可能已被删除.`));
    }
}
exports.run = run;
async function test(id = 3600) {
    getArticle(id)
        .then(v => parseArticle(v))
        .then(v => save(v));
}
exports.test = test;
