import { UserSerializer } from '../domains/serializers/userSerializer';
import { singleton } from 'tsyringe';

@singleton()
export class UserSerializerImpl implements UserSerializer {
  get() {
    console.log('get');
  }
  getById() {
    console.log('getById');
  }
}
