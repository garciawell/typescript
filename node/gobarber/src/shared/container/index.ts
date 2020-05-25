import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointsments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokenRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
);
container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository
);
