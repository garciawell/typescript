import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListMonthAvailabilityService from '@modules/appointsments/services/ListMonthAvailabilityService';

class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listMonthAvailabilityService = container.resolve(
      ListMonthAvailabilityService
    );

    const availability = await listMonthAvailabilityService.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}

export default ProviderMonthAvailabilityController;
