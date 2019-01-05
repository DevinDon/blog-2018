"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ArticleCrawler = __importStar(require("./parse/ArticleCrawler"));
const ImageCrawler_1 = __importDefault(require("./parse/ImageCrawler"));
typeorm_1.createConnection();
setTimeout(() => {
    const imagec = new ImageCrawler_1.default();
    imagec.run(0);
    ArticleCrawler.run(0);
}, 5000);
