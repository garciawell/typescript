import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointsments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointsments/services/CreateAppointmentService';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointsmentsRouter = Router();
const appointsmentsRepository = new AppointmentsRepository();
appointsmentsRouter.use(ensureAuthentication);

// appointsmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointsmentsRepository.find();

//   return response.json(appointments);
// });

appointsmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointsmentsRepository
  );

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointsmentsRouter;
