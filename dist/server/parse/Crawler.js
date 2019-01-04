"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const jsdom_1 = require("jsdom");
class Crawler {
    constructor() { }
    async fetch(url) {
        return new Promise((rej) => {
            console.log(`正在获取文档: ${url}`);
            http_1.request(url, res => {
                const chunks = [];
                res.on('data', chunk => {
                    chunks.push(chunk);
                });
                res.on('end', async () => {
                    const body = Buffer.concat(chunks);
                    rej({
                        id: Date.now(),
                        url,
                        doc: new jsdom_1.JSDOM(body.toString()).window.document
                    });
                    console.log(`文档读取完毕: ${url}`);
                });
            }).end();
        });
    }
    async parse(data) {
        console.log(`请重写此方法.`);
        return {};
    }
    async save(data) {
        console.log(`请重写此方法`);
        return false;
    }
    async run(url) {
        console.log(`开始执行爬取: ${url}`);
        return this
            .fetch(url)
            .then(v => this.parse(v))
            .then(v => this.save(v))
            .then(v => {
            console.log(`资源已经保存至数据库: ${url}`);
            return true;
        })
            .catch(r => {
            console.error(`出现错误, 资源可能不存在, 链接: ${url}, 原因: ${r}.`);
            return false;
        });
    }
}
exports.Crawler = Crawler;
exports.default = Crawler;
