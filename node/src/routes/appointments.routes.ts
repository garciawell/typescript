import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointsmentsRouter = Router();
const appointsmentsRepository = new AppointmentsRepository();

appointsmentsRouter.get('/', (request, response) => {
  const appointments = appointsmentsRepository.all();

  return response.json(appointments);
});

appointsmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointsmentsRepository
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

export default appointsmentsRouter;
