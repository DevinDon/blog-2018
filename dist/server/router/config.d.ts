/// <reference types="node" />
import { CORS } from 'koa-backend-server';
import { LocalConfig } from '../type';
export declare const allowAllCORS: CORS;
export declare function getOffset(total: number, amount: number): number;
export declare let localConfig: LocalConfig;
export declare const files: {
    index: Buffer;
};
