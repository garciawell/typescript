import 'reflect-metadata';
import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersepository,
      fakeHashProvider
    );
  });

  it('Shoud be able to update the profile', async () => {
    const user = await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John THREE',
      email: 'johdoe22@gmail.com',
    });

    expect(updatedUser.name).toBe('John THREE');
    expect(updatedUser.email).toBe('johdoe22@gmail.com');
  });

  it('Shoud not be able to change to another user e-mail', async () => {
    await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });

    const user = await fakeUsersepository.create({
      name: 'Teste',
      email: 'teste@gmail.com',
      password: '1234567',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'johdoe@gmail.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Shoud be able to update the password', async () => {
    const user = await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John THREE',
      email: 'johdoe22@gmail.com',
      old_password: '1234567',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('Shoud not be able to update the password without old password', async () => {
    const user = await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John THREE',
        email: 'johdoe22@gmail.com',
        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Shoud not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John THREE',
        email: 'johdoe22@gmail.com',
        password: '123123',
        old_password: 'wrong-old-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it('Shoud not be able to update the profile from non-existing user', async () => {
    expect(
      updateProfileService.execute({
        user_id: 'non-existing-user-id',
        name: 'teste',
        email: 'teste@gmail.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
