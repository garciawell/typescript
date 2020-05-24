import { Router } from 'express';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providersRouter = Router();

const providersController = new ProvidersController();

const providerDayAvailabilityControllerprovidersController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providersRouter.use(ensureAuthentication);
providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index
);

providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityControllerprovidersController.index
);

export default providersRouter;
