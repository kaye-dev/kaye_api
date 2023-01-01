import { Request, Response } from 'express';
import { getLogger } from 'log4js';

export const rootsController = (_req: Request, res: Response) => {
  const logger = getLogger('error');
  logger.info('rootsController');
  logger.error('error');

  return res.status(200).send({
    message: 'rootsController',
  });
};
