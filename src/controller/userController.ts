import { Request, Response } from 'express';
import { address } from 'ip';
import { accessLogger, getReferer } from '../config/logger';

export const usersController = (_req: Request, res: Response) => {
  accessLogger.info(address(), getReferer(_req.headers.referer), 'Processing by: usersController#index');

  return res.status(200).send({
    message: 'usersController',
  });
};
