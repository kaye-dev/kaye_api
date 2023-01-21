import { container } from 'tsyringe';
import { dic, did, dim, dis } from './constants';
import { UserDecoratorImpl } from '../decorators/userDecorator';

export const registerDependencies = () => {
  // controllers
  container.register(dic.UserController, {
    useClass: UserDecoratorImpl,
  });

  // models
  container.register(dim.UserModel, {
    useClass: UserDecoratorImpl,
  });

  // decorators
  container.register(did.UserDecorator, {
    useClass: UserDecoratorImpl,
  });

  // serializers
  container.register(dis.UserSerializer, {
    useClass: UserDecoratorImpl,
  });
};
