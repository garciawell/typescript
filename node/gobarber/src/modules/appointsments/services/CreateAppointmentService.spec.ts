import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateAppointmentsService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentsService;
describe('CreateAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentsService(
      fakeAppointmentsRepository
    );
  });

  it('Shoud be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123123',
      user_id: '123123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123123');
  });

  it('Shoud not be able to create a tow appointment on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123',
      user_id: '123123123123',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123',
        user_id: '123123123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
