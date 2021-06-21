import * as telefonesController from "../controllers/telefonesController";
import { app } from '../../app';

app.get('/telefones', telefonesController.telefonesController);
app.get('/telefones/cadastro', telefonesController.cadastroTelefones);
app.get('telefones/editar/:codigo', telefonesController.getByIdTelefones);
app.get('telefones/visualizar/:codigo', telefonesController.visualizarTelefones);
app.post('/telefones/novo', telefonesController.createTelefone);
app.delete('/telefones/deletar/:id', telefonesController.deleteTelefone);
