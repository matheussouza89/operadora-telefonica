import * as homeController from '../controllers/homeController';
import { app } from '../../app';
import { Router } from 'express';

const router = Router();

router.get('/', homeController.homeController);

app.use(router)