import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateUsersService from './CreateUserService';
import AuthenticationUsersService from './AuthenticationUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('AuthUser', () => {
  it('Shoud be able to authentication', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );
    const authUser = new AuthenticationUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );

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
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const authUser = new AuthenticationUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );

    expect(
      authUser.execute({
        email: 'jonhdoe@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Shoud not be able to authentication with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );
    const authUser = new AuthenticationUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );

    await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    expect(
      authUser.execute({
        email: 'jonhdoe@gmail.com',
        password: 'wrong',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
