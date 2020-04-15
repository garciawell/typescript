import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthentication from '../middlewares/ensureAuthenticated';

const appointsmentsRouter = Router();
appointsmentsRouter.use(ensureAuthentication);

appointsmentsRouter.get('/', async (request, response) => {
  console.log('USUARIO HEADER', request.user);
  const appointsmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointsmentsRepository.find();

  return response.json(appointments);
});

appointsmentsRouter.post('/', async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

export default appointsmentsRouter;
