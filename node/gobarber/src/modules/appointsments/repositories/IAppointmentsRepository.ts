import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindMonthDTO from '../dtos/IFindMonthDTO';
import IFindDayDTO from '../dtos/IFindDayDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMonth(date: IFindMonthDTO): Promise<Appointment[]>;
  findAllInDay(date: IFindDayDTO): Promise<Appointment[]>;
}
