import { UserModel } from '../domains/models/userModel';

export class UserModelImpl implements UserModel {
  get() {
    console.log('get');
  }
  getById() {
    console.log('getById');
  }
}
