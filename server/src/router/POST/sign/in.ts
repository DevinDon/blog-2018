import { Middleware } from 'koa';

export const signin: Middleware = async (c, next) => {
  const req = c.body || {};
  if (req.name === 'testname' && req.password === 'password') {
    c.body = {
      id: Date.now(),
      status: true
    };
  } else {
    c.body = {
      id: Date.now(),
      status: false
    };
  }
  await next();
};

export default signin;
