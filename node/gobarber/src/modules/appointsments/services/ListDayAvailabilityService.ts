import { injectable, inject } from 'tsyringe';
import { getHours } from 'date-fns';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
// import { getDaysInMonth, getDate } from 'date-fns';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListDayAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
  }: IRequest): Promise<IResponse> {
    const appointsments = await this.appointmentsRepository.findAllInDay({
      provider_id,
      year,
      month,
      day,
    });

    const hourStart = 8;
    const eachHourArray = Array.from(
      {
        length: 10,
      },
      (_, index) => index + hourStart
    );

    const availability = eachHourArray.map((hour) => {
      const hasAppointmentInHour = appointsments.find(
        (app) => getHours(app.date) === hour
      );

      return {
        hour,
        available: !hasAppointmentInHour,
      };
    });

    return availability;
  }
}

export default ListDayAvailabilityService;