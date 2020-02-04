import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, resp) => {
  return resp.json({hello: "Opaaa Go Barber"});
});

export default routes;
