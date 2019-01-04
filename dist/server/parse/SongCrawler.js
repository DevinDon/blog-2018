"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const Crawler_1 = __importDefault(require("./Crawler"));
const song_entity_1 = __importDefault(require("../entity/song.entity"));
const fs_1 = require("fs");
class SongCrawler extends Crawler_1.default {
    constructor() {
        super();
    }
    async fetch(url) {
        const document = fs_1.readFileSync('./test.html').toString();
        console.log(document);
        return {
            id: 123,
            url,
            doc: new jsdom_1.JSDOM(document).window.document
        };
    }
    async parse(data) {
        console.log(`开始解析文档: ${data.url}`);
        const doc = data.doc;
        console.log(doc, doc.textContent);
        const mids = [];
        doc.querySelectorAll('li[mid]').forEach(v => mids.push(Number(v.getAttribute('mid'))));
        console.log(doc.querySelectorAll('li[mid]'));
        const titles = [];
        doc.querySelectorAll('a.js_song[title]').forEach(v => titles.push(v.getAttribute('title')));
        const artists = [];
        doc.querySelectorAll('div.songlist__artist').forEach(v => artists.push(v.getAttribute('title')));
        const albums = [];
        doc.querySelectorAll('div.album_name').forEach(v => albums.push(v.getAttribute('title').trim()));
        const times = [];
        doc.querySelectorAll('div.songlist__time').forEach((v, i) => v.innerHTML
            .trim()
            .split('.')
            .reverse()
            .forEach((n, j) => times[i] = (times[i] || 0) + Number(n) * Math.pow(60, j)));
        const result = [];
        for (let i = 0; i < mids.length; i++) {
            result.push({
                id: mids[i],
                title: titles[i],
                artist: artists[i],
                album: albums[i],
                time: times[i]
            });
        }
        console.log(`文档解析完毕: ${data.url}`);
        console.log(result);
        return result;
    }
    async save(data) {
        for (const song of data) {
            song_entity_1.default.findOne(song.id)
                .then(v => {
                if (v) {
                    song_entity_1.default.update({ id: v.id }, song);
                }
                else {
                    song_entity_1.default.insert(song);
                }
            });
        }
        return true;
    }
}
exports.SongCrawler = SongCrawler;
exports.default = SongCrawler;
