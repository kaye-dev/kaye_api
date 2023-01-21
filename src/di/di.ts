import { container } from 'tsyringe';
import { dic, did, dim, dis } from './constants';
import { UserDecoratorImpl } from '../decorators/userDecorator';
import { UserControllerImpl } from '../controllers/userController';
import { UserModelImpl } from '../models/userModel';
import { UserSerializerImpl } from '../serializers/userSerializer';

export const registerDependencies = () => {
  // controllers
  container.register(dic.UserController, {
    useClass: UserControllerImpl,
  });

  // models
  container.register(dim.UserModel, {
    useClass: UserModelImpl,
  });

  // decorators
  container.register(did.UserDecorator, {
    useClass: UserDecoratorImpl,
  });

  // serializers
  container.register(dis.UserSerializer, {
    useClass: UserSerializerImpl,
  });
};
