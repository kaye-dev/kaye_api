import { Request, Response } from 'express';

export const usersController = (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'usersController',
  });
};
