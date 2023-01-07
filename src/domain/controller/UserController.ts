import { Request, Response } from 'express';

export interface UserController {
  fetch(req: Request, res: Response);
  getById(req: Request, res: Response);
  create(req: Request, res: Response);
  update(req: Request, res: Response);
  destroy(req: Request, res: Response);
}
