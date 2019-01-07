"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_backend_server_1 = require("koa-backend-server");
const router_1 = require("./router");
const ware_1 = require("./ware");
const config_1 = require("./router/config");
const config = {
    address: {
        portocol: 'HTTP'
    },
    database: {
        ormconfig: true
    },
    router: {
        paths: router_1.paths,
        static: {
            path: config_1.localConfig.static
        },
        version: 'v1'
    }
};
const server = [];
for (let i = 0; i < 2; i++) {
    server.push(new koa_backend_server_1.Server(config).use(ware_1.statistic));
    server[i].listen('0.0.0.0', 8080 + i);
}
