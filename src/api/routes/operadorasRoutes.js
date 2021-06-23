import * as operadorasController from "../controllers/operadorasController";
import { app } from '../../app';
import { Router } from 'express';

const router = Router();

router.get('/operadoras', operadorasController.operadorasController);
router.get('/operadoras/cadastro', operadorasController.cadastroOperadoras)
router.get('/operadoras/filtro/', operadorasController.operadorasFiltroController);;
router.get('/operadoras/:codigo', operadorasController.getByIdOperadoras);
router.put('/operadoras/editar/:codigo', operadorasController.createOperadora);
router.get('/operadoras/visualizar/:codigo', operadorasController.visualizarOperadoras);
router.post('/operadoras/novo', operadorasController.createOperadora);
router.delete('/operadoras/deletar/:codigo', operadorasController.deleteOperadoras);

app.use(router)