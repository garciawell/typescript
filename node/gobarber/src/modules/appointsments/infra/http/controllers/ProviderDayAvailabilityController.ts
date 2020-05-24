import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListDayAvailabilityService from '@modules/appointsments/services/ListDayAvailabilityService';

class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, year, month } = request.body;

    const listDayAvailabilityService = container.resolve(
      ListDayAvailabilityService
    );

    const availability = await listDayAvailabilityService.execute({
      provider_id,
      year,
      day,
      month,
    });

    return response.json(availability);
  }
}

export default ProviderDayAvailabilityController;
