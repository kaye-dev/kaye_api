import { Request, Response } from 'express';
import { UserController } from '../domain/controller/UserController';
import { logging } from '../config/loggers/util';
import { pool } from '../config/db';

export class UserControllerImpl implements UserController {
  async fetch(req: Request, res: Response) {
    try {
      const query = await pool.query('select * from users');
      console.log('query.oid', query.oid);
      console.log('query.fields', query.fields);
      console.log('query.command', query.command);
      console.log('query.rowCount', query.rowCount);
      return res.status(200).json(query.rows);
    } catch (err) {
      return res.status(404).json({ message: 'Error: ' + err.message });
    }
  }
  async getById(req: Request, res: Response) {
    console.log(`req.params.id: ${req.params.id}`);

    const logs = {
      id: 'uid_0001',
      family_name: 'justin',
      first_name: 'kaye',
      display_name: 'kaye',
      email: 'j-kaye@sample.com',
      tel: '09012345678',
      created_date: '2020-10-25 12:30:18',
      updated_date: '2020-10-25 12:30:18',
    };
    logging(logs, 'error');
    return res.status(200).json(logs);
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
