import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointsmentsRouter = Router();
const appointsmentsRepository = new AppointmentsRepository();

appointsmentsRouter.get('/', (request, response) => {
  const appointments = appointsmentsRepository.all();

  return response.json(appointments);
});

appointsmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointsmentsRepository.findByDate(
    parsedDate
  );

  if (findAppointmentInSameDate) {
    return response
      .status(401)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointsmentsRepository.create({
    provider,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointsmentsRouter;
