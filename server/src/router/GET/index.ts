import { Middleware } from 'koa';
import { RouterPaths } from 'koa-backend-server';
import { allowAllCORS } from '../config';
import article from './article';
import image from './image';
import motto from './motto';
import song from './song';

/** GET: index. */
const index: Middleware = async (c, next) => {
  c.body = {
    params: c.params,
    body: c.request.body,
    query: c.query
  };
  await next();
};

/** GET: 404 not found. */
const notFound: Middleware = async (c, next) => {
  await next();
  if (c.status === 404) {
    c.redirect('/');
  }
};

/** All GET paths. */
export const GETPATH: RouterPaths = {
  'index': {
    path: '/',
    ware: index,
    cors: allowAllCORS
  },
  'article': {
    path: '/article',
    ware: article,
    cors: allowAllCORS
  },
  'image': {
    path: '/image',
    ware: image,
    cors: allowAllCORS
  },
  'motto': {
    path: '/motto',
    ware: motto,
    cors: allowAllCORS
  },
  'song': {
    path: '/song',
    ware: song,
    cors: allowAllCORS
  },
  '404': {
    path: '**',
    ware: notFound,
    cors: allowAllCORS,
    withoutPrefix: true
  }
};

export default GETPATH;
