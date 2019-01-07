import { Middleware } from 'koa';
import Statistic from '../entity/statistic.entity';

export const statistic: Middleware = async (c, next) => {
  await next();
  Statistic.insert({
    who: c.request.ips[0].slice(0, 128),
    when: Date.now(),
    where: c.request.path.slice(0, 255),
    what: c.method.slice(0, 32)
  });
};

export default statistic;
