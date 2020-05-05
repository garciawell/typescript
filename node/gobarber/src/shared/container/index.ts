import { container } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointsments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersepository from '@modules/users/repositories/IUserRepository';
import Usersepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersepository>('UsersRepository', Usersepository);
