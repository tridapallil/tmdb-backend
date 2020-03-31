import MovieController from './app/controllers/MovieController';

import { Router } from 'express';

const routes = Router();

routes.get('/movies', MovieController.list);
routes.get('/movies/:id', MovieController.get);

export default routes;
