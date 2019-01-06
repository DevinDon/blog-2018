import { Middleware } from 'koa';
import { RouterPaths } from 'koa-backend-server';
import { allowAllCORS, files } from '../config';
import article from './article';
import image from './image';
import motto from './motto';
import song from './song';
import Statistic from '../../entity/statistic.entity';

/** GET: index. */
const index: Middleware = async (c, next) => {
  c.body = {
    query: c.query,
    request: c.request,
    times: {
      today: await Statistic
        .createQueryBuilder()
        .where('`when` > :today', { today: new Date(new Date().toLocaleDateString()).getTime() })
        .getCount(),
      total: await Statistic.count()
    }
  };
  await next();
};

/** GET: 404 not found. */
const notFound: Middleware = async (c, next) => {
  await next();
  if (c.status === 404) {
    c.body = files.index.toString();
    c.status = 200;
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
