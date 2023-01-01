import { Request, Response } from 'express';
import { getLogger } from 'log4js';

export const usersController = (_req: Request, res: Response) => {
  getLogger('system').info('test test');

  return res.status(200).send({
    message: 'usersController',
  });
};
