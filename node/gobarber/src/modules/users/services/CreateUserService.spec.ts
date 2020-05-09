import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateUsersService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
  it('Shoud be able to create a new user', async () => {
    const fakeUsersepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(
      fakeUsersepository,
      fakeHashProvider
    );
    const user = await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Shoud not be able to create a new user with same email from another', async () => {
    const fakeUsersepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(
      fakeUsersepository,
      fakeHashProvider
    );

    await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@gmail.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Jonh Doe',
        email: 'jonhdoe@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
