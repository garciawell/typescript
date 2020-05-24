import { getRepository, Repository, Raw } from 'typeorm';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointsments/dtos/ICreateAppointmentDTO';
import IFindMonthDTO from '@modules/appointsments/dtos/IFindMonthDTO';
import Appointment from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async findAllInMonth({
    provider_id,
    year,
    month,
  }: IFindMonthDTO): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, '0');

    const appointments = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          (dateFieldName) =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${year}'`
        ),
      },
    });

    return appointments;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointsment = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointsment);

    return appointsment;
  }
}
export default AppointmentsRepository;
