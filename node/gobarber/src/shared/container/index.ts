import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointsments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUsersTokensRepository from '@modules/users/repositories/IUserTokenRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
);
