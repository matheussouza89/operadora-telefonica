import * as operadorasController from "../controllers/operadorasController";
import { app } from '../../app';

app.get('/operadoras', operadorasController.operadorasController);
app.get('/operadoras/cadastro', operadorasController.cadastroOperadoras);
app.get('operadoras/editar/:codigo', operadorasController.getByIdOperadoras);
app.get('operadoras/visualizar/:codigo', operadorasController.visualizarOperadoras);
app.post('/operadoras/novo', operadorasController.createOperadora);
app.delete('/operadoras/deletar/:id', operadorasController.deleteOperadoras);
