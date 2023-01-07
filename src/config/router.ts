import express, { Application, Request, Response } from 'express';
import { usersController } from '../controller/userController';
import { adminsController } from '../controller/adminController';
import { rootsController } from '../controller/rootsController';
import { address } from 'ip';
import { getLogger } from 'log4js';
import { loggerKind } from './loggers/util';

// FYI: https://www.wakuwakubank.com/posts/632-nodejs-express-overview/#index_id2
export const app: Application = express();

// 全リクエスト対象::logging
app.use((req: Request, _: Response, next) => {
  getLogger(loggerKind.access).info(
    `request::logging\n[req:url]: ${req.originalUrl}\n[ip]: ${address()},\n[referer]: ${req.headers.referer}`,
  );
  next();
});

app.get('/v1/users', usersController);
app.get('/v1/admins', adminsController);
app.get('/v1/roots', rootsController);

app.get('/', function (req: Request, res: Response) {
  getLogger(loggerKind.access).error(
    `request::logging\n[req:url]: ${req.originalUrl}\n[ip]: ${address()}\n[referer]: ${
      req.headers.referer
    }\n[error]: Not Found`,
  );
  res.status(404).send('Not Found');
});
