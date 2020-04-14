import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointsmentsRouter = Router();

appointsmentsRouter.get('/', async (request, response) => {
  const appointsmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointsmentsRepository.find();

  return response.json(appointments);
});

appointsmentsRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

export default appointsmentsRouter;
