"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const jsdom_1 = require("jsdom");
const image_entity_1 = require("../entity/image.entity");
class ImageCrawler {
    constructor() { }
    async getHTML(id) {
        return new Promise((rej) => {
            console.log(`正在读取第 ${id} 张图片的网站.`);
            http_1.request(`http://wufazhuce.com/one/${id}`, res => {
                const chunks = [];
                res.on('data', chunk => {
                    chunks.push(chunk);
                });
                res.on('end', async () => {
                    const body = Buffer.concat(chunks);
                    rej({
                        id,
                        dom: new jsdom_1.JSDOM(body.toString()).window.document
                    });
                    console.log(`第 ${id} 张图片的网站读取完毕.`);
                });
            }).end();
        });
    }
    async get(url) {
        return new Promise((rej) => {
            console.log(`开始加载图片, 网址: ${url}`);
            http_1.request(`${url}`, res => {
                const chunks = [];
                res.on('data', chunk => {
                    chunks.push(chunk);
                });
                res.on('end', async () => {
                    console.log(`开始转码图片, 网址: ${url}`);
                    const body = Buffer.concat(chunks);
                    rej(body.toString('base64'));
                    console.log(`图片转码完毕.`);
                });
            }).end();
        });
    }
    async parse(node) {
        console.log(`开始解析网站, 编号: ${node.id}`);
        const dom = node.dom;
        const link = (dom.querySelector('.one-imagen>img').getAttribute('src') || '').trim();
        const image = await this.get(link);
        const text = (dom.querySelector('.one-cita').innerHTML || '').trim();
        const date = new Date(`${(dom.querySelector('.dom').innerHTML || '1').trim()} ${(dom.querySelector('.may').innerHTML || 'Jan 2019').trim()}`).getTime();
        console.log(`网站解析完毕, 编号: ${node.id}`);
        return {
            id: node.id,
            link,
            image,
            text,
            date
        };
    }
    async save(image) {
        if (await image_entity_1.Image.findOne({ id: image.id })) {
            console.log(`图片 ${image.id} 已存在, 进行更新操作.`);
            return image_entity_1.Image.update({ id: image.id }, image);
        }
        else {
            return image_entity_1.Image.insert(image);
        }
    }
    async run(id = 1) {
        console.log(`开始执行检索.`);
        let currect = 0;
        const max = 10;
        for (let i = id; i < 2300; i++) {
            if (++currect > max) {
                await this
                    .getHTML(i)
                    .then(v => this.parse(v))
                    .then(v => this.save(v))
                    .then(v => console.log(`图片已经保存至数据库, 编号 ${i}.`))
                    .catch(r => console.error(`出现错误, 图片可能不存在, 编号: ${i}. ${r}`))
                    .finally(() => console.log(`当前任务数: ${--currect}`));
            }
            else {
                this
                    .getHTML(i)
                    .then(v => this.parse(v))
                    .then(v => this.save(v))
                    .then(v => console.log(`图片已经保存至数据库, 编号 ${i}.`))
                    .catch(r => console.error(`出现错误, 图片可能不存在, 编号: ${i}. ${r}`))
                    .finally(() => console.log(`当前任务数: ${--currect}`));
            }
        }
    }
    async test(id = 2307) {
        await this
            .getHTML(id)
            .then(v => this.parse(v))
            .then(v => this.save(v))
            .then(v => console.log(`图片已经保存至数据库, 编号 ${id}`))
            .catch(r => console.error(`出现错误, 图片可能不存在. ${r}`));
    }
}
exports.ImageCrawler = ImageCrawler;
exports.default = ImageCrawler;
