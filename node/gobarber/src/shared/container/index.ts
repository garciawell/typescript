import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointsments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUsersTokensRsepository from '@modules/users/repositories/IUsersTokensRsepository';
// import UsersTokensRsepository from '@modules/users/infra/typeorm/repositories/UsersTokensRsepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersepository>(
  'UsersRepository',
  UsersRepository
);
