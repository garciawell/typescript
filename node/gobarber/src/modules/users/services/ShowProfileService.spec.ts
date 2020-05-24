import 'reflect-metadata';
import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(fakeUsersepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });

    const profile = await showProfileService.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('johdoe@gmail.com');
  });

  it('should not be able to show the profile from non-existing user', async () => {
    expect(
      showProfileService.execute({
        user_id: 'non-existing-user-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
