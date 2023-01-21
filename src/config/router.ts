import express, { Application, Request, Response } from 'express';
import { UserControllerImpl } from '../controllers/userController';
import { address } from 'ip';
import { getLogger } from 'log4js';
import { loggerKind } from './loggers/util';

// controllers
const userController = new UserControllerImpl();

export const app: Application = express();

// 全リクエスト対象::logging
app.use((req: Request, _: Response, next) => {
  getLogger(loggerKind.access).info(
    `request::logging\n[req:url]: ${req.originalUrl}\n[method]: ${req.method}\n[ip]: ${address()}\n[referer]: ${
      req.headers.referer
    }`,
  );
  next();
});

// fetch
app.get('/v1/users', userController.fetch);

// getById
app.get('/v1/users/:id', userController.getById);

// create

// update

// destroy

app.get('/', function (req: Request, res: Response) {
  getLogger(loggerKind.access).error(
    `request::logging\n[req:url]: ${req.originalUrl}\n[ip]: ${address()}\n[referer]: ${
      req.headers.referer
    }\n[error]: Not Found`,
  );
  res.status(404).send('Not Found');
});
