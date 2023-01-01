import { Request, Response } from 'express';

export const rootsController = (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'rootsController',
  });
};
