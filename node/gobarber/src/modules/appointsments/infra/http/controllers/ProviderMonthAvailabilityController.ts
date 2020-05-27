import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListMonthAvailabilityService from '@modules/appointsments/services/ListMonthAvailabilityService';

class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.query;
    const { provider_id } = request.params;

    const listMonthAvailabilityService = container.resolve(
      ListMonthAvailabilityService
    );

    const availability = await listMonthAvailabilityService.execute({
      provider_id,
      year: Number(year),
      month: Number(month),
    });

    return response.json(availability);
  }
}

export default ProviderMonthAvailabilityController;
