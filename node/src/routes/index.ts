import { Router } from 'express';
import appointsmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointsmentsRouter);
routes.use('/users', usersRouter);

export default routes;
