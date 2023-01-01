import { Request, Response } from 'express';
import { address } from 'ip';
import { accessLogger, getReferer, controllerLogFormat } from '../config/logger';

export const usersController = (_req: Request, res: Response) => {
  accessLogger.info(controllerLogFormat('usersController#index', address(), getReferer(_req.headers.referer)));

  return res.status(200).send({
    message: 'usersController',
  });
};
