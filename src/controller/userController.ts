import { Request, Response } from 'express';
import { getLogger } from 'log4js';
import { loggerKind } from '../config/logger';

export const usersController = (_req: Request, res: Response) => {
  const err = new Error('something error');
  getLogger(loggerKind.error).error(err.name, err.message);

  return res.status(200).send({
    message: 'usersController',
  });
};
