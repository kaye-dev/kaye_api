import { Request, Response } from 'express';
import { address } from 'ip';
import { accessLogger, systemLogger } from '../config/logger';

export const usersController = (_req: Request, res: Response) => {
  accessLogger.info(address(), _req.headers.referer, 'usersController');
  systemLogger.info('success!');

  return res.status(200).send({
    message: 'usersController',
  });
};
