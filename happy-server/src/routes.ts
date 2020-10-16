import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// :Parametrô
routes.post('/orphanages', OrphanagesController.create);

export default routes;
