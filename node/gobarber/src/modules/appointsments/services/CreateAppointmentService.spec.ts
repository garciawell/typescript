import 'reflect-metadata';
import CreateAppointmentsService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointments', () => {
  it('Shoud be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentsService(
      fakeAppointmentsRepository
    );
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123123');
  });

  // it('Shoud not be able to create a tow appointment on the same time', () => {

  // });
});
