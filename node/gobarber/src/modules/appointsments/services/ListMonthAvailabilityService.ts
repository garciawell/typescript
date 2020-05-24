import { injectable, inject } from 'tsyringe';
import IAppointmentsRepository from '@modules/appointsments/repositories/IAppointmentsRepository';
import { getDaysInMonth, getDate } from 'date-fns';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  public async execute({
    provider_id,
    year,
    month,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonth({
      provider_id,
      year,
      month,
    });

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDaysArray = Array.from(
      {
        length: numberOfDaysInMonth,
      },
      (_, index) => index + 1
    );

    const availability = eachDaysArray.map((day) => {
      const appointmentsInDay = appointments.filter((appoint) => {
        return getDate(appoint.date) === day;
      });

      return {
        day,
        available: appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}

export default ListMonthAvailabilityService;
