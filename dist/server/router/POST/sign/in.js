"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = async (c, next) => {
    const req = c.body || {};
    if (req.name === 'testname' && req.password === 'password') {
        c.body = {
            id: Date.now(),
            status: true
        };
    }
    else {
        c.body = {
            id: Date.now(),
            status: true
        };
    }
    await next();
};
exports.default = exports.signin;
