import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateUsersService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUsersService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUsersService(fakeUsersepository, fakeHashProvider);
  });

  it('Shoud be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Shoud not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'Jonh Doe',
        email: 'jonhdoe@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
