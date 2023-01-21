import { UserSerializer } from '../domains/serializers/userSerializer';

export class UserSerializerImpl implements UserSerializer {
  get() {
    console.log('get');
  }
  getById() {
    console.log('getById');
  }
}
