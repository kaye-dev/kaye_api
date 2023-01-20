import { singleton } from 'tsyringe';
import { UserDecorator } from '../domain/decorator/userDecorator';

type UserDecoratorModel = {
  family_name: string;
  first_name: string;
  display_name: string;
  age: number;
};

@singleton()
export class UserDecoratorImpl implements UserDecorator {
  family_name: string;
  first_name: string;
  display_name: string;
  age: number;

  constructor(e: UserDecoratorModel) {
    this.family_name = e.family_name;
    this.first_name = e.first_name;
    this.display_name = e.display_name;
    this.age = e.age;
  }

  getFullName(): string {
    return `${this.family_name} ${this.first_name}-san`;
  }

  getAge(): string {
    return `${this.age}歳`;
  }
}
