import { Request, Response } from 'express';
import { getLogger } from 'log4js';

export const usersController = (_req: Request, res: Response) => {
  const logger = getLogger('system');
  logger.info('usersController');
  logger.error('error');

  return res.status(200).send({
    message: 'usersController',
  });
};
