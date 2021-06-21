import * as homeController from '../controllers/homeController';
import { app } from '../../app';

app.get('/', homeController.homeController);