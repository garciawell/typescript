import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointsmentsRouter = Router();

const appointmentControllers = new AppointmentController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointsmentsRouter.use(ensureAuthentication);

appointsmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentControllers.create
);
appointsmentsRouter.get('/me', providerAppointmentsController.index);

export default appointsmentsRouter;
