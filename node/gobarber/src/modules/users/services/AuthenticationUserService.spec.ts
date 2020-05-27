import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import AuthenticationUsersService from './AuthenticationUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authUser: AuthenticationUsersService;

describe('AuthUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authUser = new AuthenticationUsersService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  it('should be able to authentication', async () => {
    await fakeUsersRepository.create({
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

  it('should not be able to authentication with no user', async () => {
    await expect(
      authUser.execute({
        email: 'jonhdoe@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authentication with wrong password', async () => {
    await fakeUsersRepository.create({
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
