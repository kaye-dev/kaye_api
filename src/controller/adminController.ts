import { Request, Response } from 'express';
import { getLogger } from 'log4js';
import { address } from 'ip';
import { accessLogger, systemLogger } from '../config/logger';

export const adminsController = (_req: Request, res: Response) => {
  accessLogger.info(address(), _req.headers.referer, 'adminsController');
  systemLogger.info('success!');

  return res.status(200).send({
    message: 'adminsController',
  });
};
