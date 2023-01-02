import { Request, Response } from 'express';
import { address } from 'ip';
import { accessLogger, getReferer, controllerLogFormat, errorLogger } from '../config/logger';

export const usersController = (_req: Request, res: Response) => {
  // const ss = new Error('something error');
  errorLogger.error('test logs');

  return res.status(200).send({
    message: 'usersController',
  });
};
