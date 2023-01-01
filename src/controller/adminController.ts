import { Request, Response } from 'express';
import { getLogger } from 'log4js';

export const adminsController = (_req: Request, res: Response) => {
  const logger = getLogger('system');
  logger.info('adminsController');
  logger.info('success!');

  return res.status(200).send({
    message: 'adminsController',
  });
};
