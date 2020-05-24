import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointsments/dtos/ICreateAppointmentDTO';
import IFindMonthDTO from '@modules/appointsments/dtos/IFindMonthDTO';
import IFindDayDTO from '@modules/appointsments/dtos/IFindDayDTO';
import { uuid } from 'uuidv4';
import { isEqual, getMonth, getYear, getDate } from 'date-fns';
import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private appoinetments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appoinetments.find((app) =>
      isEqual(app.date, date)
    );

    return findAppointment;
  }

  public async findAllInMonth({
    provider_id,
    year,
    month,
  }: IFindMonthDTO): Promise<Appointment[]> {
    const appointments = this.appoinetments.filter(
      (app) =>
        app.provider_id === provider_id &&
        getMonth(app.date) + 1 === month &&
        getYear(app.date) === year
    );

    return appointments;
  }

  public async findAllInDay({
    provider_id,
    year,
    month,
    day,
  }: IFindDayDTO): Promise<Appointment[]> {
    const appointments = this.appoinetments.filter(
      (app) =>
        app.provider_id === provider_id &&
        getDate(app.date) === day &&
        getMonth(app.date) + 1 === month &&
        getYear(app.date) === year
    );

    return appointments;
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
