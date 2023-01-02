import { Request, Response } from 'express';
import { address } from 'ip';
import { getLogger } from 'log4js';
import { loggerKind } from '../config/logger';

export const adminsController = (_req: Request, res: Response) => {
  getLogger(loggerKind.access).info(address(), _req.headers.referer, 'adminsController');

  return res.status(200).send({
    message: 'adminsController',
  });
};
