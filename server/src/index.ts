import { KBSConfig, Server } from 'koa-backend-server';
import { paths } from './router';
import { statistic } from './ware';
import { localConfig } from './router/config';

const config: KBSConfig = {
  address: {
    portocol: 'HTTP'
  },
  database: {
    ormconfig: true
  },
  router: {
    paths,
    static: {
      path: localConfig.static
    },
    version: 'v1'
  }
};

const server: Server[] = [];

for (let i = 0; i < 2; i++) {
  server.push(new Server(config).use(statistic));
  server[i].listen('0.0.0.0', 8080 + i);
}
