import { Request, Response } from 'express';
import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticationuser = container.resolve(AuthenticationUserService);

    const { user, token } = await authenticationuser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}

export default SessionsController;
