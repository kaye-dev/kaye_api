import { Request, Response } from 'express';
import { address } from 'ip';
import { accessLogger, getReferer, controllerLogFormat, countLines } from '../config/logger';
import path from 'path';
const targetFilePath = path.resolve(__dirname, './userController.ts');

export const usersController = (_req: Request, res: Response) => {
  console.log('targetFilePath', targetFilePath);
  countLines(targetFilePath, function (error: Error, numberOfLines: number) {
    console.log('counter:', numberOfLines);
  }),
    accessLogger.info(controllerLogFormat('usersController#index', address(), getReferer(_req.headers.referer)));

  return res.status(200).send({
    message: 'usersController',
  });
};
