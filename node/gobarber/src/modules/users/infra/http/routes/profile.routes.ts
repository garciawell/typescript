import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profilerRouter = Router();
const profileController = new ProfileController();
profilerRouter.use(ensureAuthenticated);

profilerRouter.put('/', profileController.update);
profilerRouter.get('/', profileController.show);

export default profilerRouter;
