import 'reflect-metadata';
// import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProvidersService = new ListProvidersService(
      fakeUsersepository,
      fakeCacheProvider
    );
  });

  it('should be able to list providers', async () => {
    const user1 = await fakeUsersepository.create({
      name: 'John Doe',
      email: 'johdoe@gmail.com',
      password: '1234567',
    });
    const user2 = await fakeUsersepository.create({
      name: 'John Trê',
      email: 'johdoetre@gmail.com',
      password: '1234567',
    });
    const loggedUser = await fakeUsersepository.create({
      name: 'Wellington Garcia',
      email: 'garciawell@gmail.com',
      password: 'qwer1234',
    });

    const providers = await listProvidersService.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
