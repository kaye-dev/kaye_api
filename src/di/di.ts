import { container } from 'tsyringe';
import { di } from './constants';
import { UserDecoratorImpl } from '../decorators/userDecorator';

export const registerDependencies = () => {
  container.register(di.UserDecorator, {
    useClass: UserDecoratorImpl,
  });
};
