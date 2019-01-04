"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowAllCORS = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': ['POST', 'OPTIONS', 'GET'],
    'Access-Control-Allow-Origin': '*'
};
function getOffset(total, amount) {
    return Math.ceil(Math.random() * Math.max(total - amount, 0));
}
exports.getOffset = getOffset;
