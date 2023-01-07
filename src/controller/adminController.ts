import { Request, Response } from 'express';
import { AdminController } from '../domain/controller/adminController';

export class AdminControllerImpl implements AdminController {
  async fetch(req: Request, res: Response) {
    return res.status(200).send([
      {
        id: 'uid_0001',
        family_name: 'suzuki',
        first_name: 'taro',
        display_name: 'taro',
        email: 'suzuki-taro@sample.com',
        tel: '07012345678',
      },
      {
        id: 'uid_0002',
        family_name: 'matsu',
        first_name: 'yuu',
        display_name: 'yuu',
        email: 'matsu-yuu@sample.com',
        tel: '08012345678',
      },
    ]);
  }
  async getById(req: Request, res: Response) {
    return res.status(200).send({
      id: 'uid_0001',
      family_name: 'justin',
      first_name: 'kaye',
      display_name: 'kaye',
      email: 'j-kaye@sample.com',
      tel: '09012345678',
    });
  }
  async create(req: Request, res: Response) {
    return res.status(204).send({ status: 'success create' });
  }
  async update(req: Request, res: Response) {
    return res.status(204).send({ status: 'success update' });
  }
  async destroy(req: Request, res: Response) {
    return res.status(204).send({ status: 'success destroy' });
  }
}
