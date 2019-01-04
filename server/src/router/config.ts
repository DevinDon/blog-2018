import { CORS } from 'koa-backend-server';

export const allowAllCORS: CORS = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': ['POST', 'OPTIONS', 'GET'],
  'Access-Control-Allow-Origin': '*'
};

export function getOffset(total: number, amount: number): number {
  return Math.ceil(Math.random() * Math.max(total - amount, 0));
}
