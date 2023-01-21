import { UserModel } from '../domains/models/userModel';
import { singleton } from 'tsyringe';

@singleton()
export class UserModelImpl implements UserModel {
  get() {
    console.log('get');
  }
  getById() {
    console.log('getById');
  }
}
