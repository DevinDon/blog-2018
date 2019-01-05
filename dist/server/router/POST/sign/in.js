"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = async (c, next) => {
    const req = c.request.body || {};
    c.body = {
        id: Date.now(),
        status: req.name === 'testname' && req.password === 'password'
    };
    await next();
};
exports.default = exports.signin;
