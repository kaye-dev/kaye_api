import { Request, Response } from 'express';

export const adminsController = (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'adminsController',
  });
};
