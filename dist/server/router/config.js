"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.allowAllCORS = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': ['POST', 'OPTIONS', 'GET'],
    'Access-Control-Allow-Origin': '*'
};
function getOffset(total, amount) {
    return Math.ceil(Math.random() * Math.max(total - amount, 0));
}
exports.getOffset = getOffset;
try {
    exports.localConfig = JSON.parse(fs_1.readFileSync('./server.config.json').toString());
}
catch (err) {
    exports.localConfig = { static: '' };
    console.warn(`无法读取本地配置, 将不会加载静态文件. Cannot read local config file.`);
}
exports.files = {
    index: exports.localConfig.static ? fs_1.readFileSync(`${exports.localConfig.static}/index.html`).toString() : ''
};
