import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, resp) => {
  const user = await User.create({
    name: 'Lucas Pereira',
    email: 'lucas@teste.com.br',
    password_hash: '1478523',
  });

  return resp.json(user);
});

export default routes;
