import { Request, Response } from 'express';
import { address } from 'ip';
import { getLogger } from 'log4js';
import { loggerKind } from '../config/loggers/util';

export const rootsController = (_req: Request, res: Response) => {
  getLogger(loggerKind.access).info(address(), _req.headers.referer, 'rootsController');

  return res.status(200).send({
    message: 'rootsController',
  });
};
