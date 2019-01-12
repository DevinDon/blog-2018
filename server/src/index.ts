import { KBSConfig, Server } from 'koa-backend-server';
import { paths } from './router';
import { statistic } from './ware';

const config: KBSConfig = {
  router: {
    paths,
    version: 'v1'
  }
};

const server: Server = new Server(config).use(statistic);

server.listen();
