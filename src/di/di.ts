import { container } from 'tsyringe';
import { di } from './constants';
import { UserDecoratorImpl } from '../decorator/userDecorator';

export const registerDependencies = () => {
  container.register(di.UserDecorator, {
    useClass: UserDecoratorImpl,
  });
};
