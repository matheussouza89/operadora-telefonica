import * as telefonesModel from '../models/telefonesModels';
import { COLUMNS } from "../views/telefone/constants/columns";

export function telefonesController(req, res) {
    telefonesModel.getAllTelefones(function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result)
            res.render('telefone/telefone.ejs', {
                title: "Telefones",
                columns: COLUMNS,
                telefones_list: result
            })
        }
    })
}

export function cadastroTelefones(req, res) {
    res.render('telefone/form_telefones.ejs', {
        title: 'Cadastrar Telefone',
        telefones_list: {
            // ope_codigo: '',
            // ope_nome: '',
            // ope_fantasia: '',
            // ope_prefixo: '',
            // ope_cidade: ''
        },
        urlSubmit: "/telefone/novo",
        seeRegister: ""
    })
}

export function getByIdTelefones(req, res) {
    var id = req.params.codigo;
    telefonesModel.getByIdTelefones(id, function (err, result) {
        if (err) {
            throw err;
        } else {
            res.render('telefone/form_telefones.ejs', {
                title: 'Editar Telefone',
                telefones_list: result,
                urlSubmit: `telefone/editar/${id}`
            })
        }
    })
}

export function createTelefone(req, res) {
    const data = res.body;
    console.log(res.body)
    if (data.ope_codigo === "") {
        data.ope_codigo = null;
        telefonesModel.createTelefones(data, function (err, result) {
            console.log("Passou")
            if (err) {
                throw err
            } else {
                res.redirect('telefone')
            }
        })
    } else {
        telefonesModel.updateTelefones(data, function (err, result) {
            if (err) {
                throw err
            } else {
                res.redirect('telefone')
            }
        })
    }
}

export function visualizarTelefones(req, res) {
    var id = req.params.codigo;
    console.log(id)
    telefonesModel.getByIdTelefones(id, function (err, result) {
        if (err) {
            console.log("Erro aqui")
            throw err;
        } else {
            res.render('telefone/form_telefones.ejs', {
                title: 'Editar Telefone',
                telefones_list: result,
                urlSubmit: ``,
                seeRegister: readonly
            })
        }
    })
}

export function deleteTelefone(req, res) {
    var id = req.params.codigo;
    telefonesModel.deleteTelefones(id, function (err, result){
        if(err){
            throw err
        }else{
            res.redirect('telefone')
        }
    })
}