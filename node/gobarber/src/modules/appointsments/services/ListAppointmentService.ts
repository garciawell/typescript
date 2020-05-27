import { injectable, inject } from 'tsyringe';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
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
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) {}

  public async execute({
    provider_id,
    day,
    year,
    month,
  }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.cacheProvider.recover('qweqwe');

    console.log('cacheData', cacheData);

    const appointsments = await this.appointmentsRepository.findAllInDay({
      provider_id,
      day,
      year,
      month,
    });

    // await this.cacheProvider.save('qweqwe', 'qwqeqweqeeq');

    return appointsments;
  }
}

export default ListProviderAppointmentsService;
