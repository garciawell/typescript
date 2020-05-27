import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListDayAvailabilityService from '@modules/appointsments/services/ListDayAvailabilityService';

class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { day, year, month } = request.query;
    const { provider_id } = request.params;

    const listDayAvailabilityService = container.resolve(
      ListDayAvailabilityService
    );

    const availability = await listDayAvailabilityService.execute({
      provider_id,
      year: Number(year),
      day: Number(day),
      month: Number(month),
    });

    return response.json(availability);
  }
}

export default ProviderDayAvailabilityController;
