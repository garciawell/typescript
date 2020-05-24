import { injectable, inject } from 'tsyringe';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  public async execute({
    provider_id,
    day,
    year,
    month,
  }: IRequest): Promise<Appointment[]> {
    const appointsments = await this.appointmentsRepository.findAllInDay({
      provider_id,
      day,
      year,
      month,
    });

    return appointsments;
  }
}

export default ListProviderAppointmentsService;
