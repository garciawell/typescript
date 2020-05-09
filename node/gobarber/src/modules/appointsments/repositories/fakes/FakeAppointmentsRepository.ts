import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointsments/dtos/ICreateAppointmentDTO';
import { uuid } from 'uuidv4';
import { isEqual } from 'date-fns';
import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private appoinetments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appoinetments.find((app) =>
      isEqual(app.date, date)
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appoinetments.push(appointment);

    return appointment;
  }
}
export default AppointmentsRepository;
