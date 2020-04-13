import { Router } from 'express';
import appointsmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointsmentsRouter);

export default routes;
