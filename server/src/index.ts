import { Server, KBSConfig } from 'koa-backend-server';
import { paths } from './router';

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
      path: './web'
    },
    version: 'v1'
  }
};

const server: Server[] = [];

for (let i = 0; i < 2; i++) {
  server.push(new Server(config));
  server[i].listen('0.0.0.0', 8080 + i);
}
