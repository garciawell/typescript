import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateUsersService from './CreateUserService';
import AuthenticationUsersService from './AuthenticationUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUsersService;
let authUser: AuthenticationUsersService;

describe('AuthUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider);
    authUser = new AuthenticationUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  it('Shoud be able to authentication', async () => {
    await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    const response = await authUser.execute({
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  it('Shoud not be able to authentication with no user', async () => {
    await expect(
      authUser.execute({
        email: 'jonhdoe@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Shoud not be able to authentication with wrong password', async () => {
    await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    await expect(
      authUser.execute({
        email: 'jonhdoe@gmail.com',
        password: 'wrong',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
