import { Router } from 'express';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentController';

const appointsmentsRouter = Router();

const appointmentControllers = new AppointmentController();

appointsmentsRouter.use(ensureAuthentication);
appointsmentsRouter.post('/', appointmentControllers.create);

export default appointsmentsRouter;
