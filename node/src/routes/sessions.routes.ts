import { Router } from 'express';
import AuthenticationUserService from '../services/AuthenticationUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const authenticationuser = new AuthenticationUserService();

    const { user } = await authenticationuser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user });
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

export default sessionsRouter;
