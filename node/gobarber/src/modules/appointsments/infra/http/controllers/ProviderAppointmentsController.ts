import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListAppointmentService from '@modules/appointsments/services/ListAppointmentService';

class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { day, month, year } = request.body;
    const provider_id = request.user.id;

    const listAppointmentService = container.resolve(ListAppointmentService);

    const appointments = await listAppointmentService.execute({
      provider_id,
      year,
      day,
      month,
    });

    return response.json(appointments);
  }
}

export default ProviderAppointmentsController;
