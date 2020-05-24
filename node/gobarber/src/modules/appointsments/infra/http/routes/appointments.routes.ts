import { Router } from 'express';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointsmentsRouter = Router();

const appointmentControllers = new AppointmentController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointsmentsRouter.use(ensureAuthentication);

appointsmentsRouter.post('/', appointmentControllers.create);
appointsmentsRouter.get('/me', providerAppointmentsController.index);

export default appointsmentsRouter;
