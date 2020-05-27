import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListAppointmentService from '@modules/appointsments/services/ListAppointmentService';
import { classToClass } from 'class-transformer';

class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.query;

    const listAppointmentService = container.resolve(ListAppointmentService);

    const appointments = await listAppointmentService.execute({
      provider_id,
      year: Number(year),
      day: Number(day),
      month: Number(month),
    });

    return response.json(classToClass(appointments));
  }
}

export default ProviderAppointmentsController;
