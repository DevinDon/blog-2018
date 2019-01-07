"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statistic_entity_1 = __importDefault(require("../entity/statistic.entity"));
exports.statistic = async (c, next) => {
    await next();
    statistic_entity_1.default.insert({
        who: (c.headers['x-forwarded-for'] || '').split(', ')[0] || c.ip || 'unknown',
        when: Date.now(),
        where: c.request.path.slice(0, 255),
        what: c.method.slice(0, 32)
    });
};
exports.default = exports.statistic;
