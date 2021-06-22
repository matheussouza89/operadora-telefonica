import * as telefonesController from "../controllers/telefonesController";
import { Router } from 'express';
import { app } from "../../app";

const router = Router();

router.get('/telefones', telefonesController.telefonesController);
router.get('/telefones/cadastro', telefonesController.cadastroTelefones);
router.put('/telefones/editar/:codigo', telefonesController.getByIdTelefones);
router.get('/telefones/visualizar/', telefonesController.visualizarTelefones);
router.post('/telefones/novo', telefonesController.createTelefone);
router.delete('/telefones/deletar/:id', telefonesController.deleteTelefone);

app.use(router)