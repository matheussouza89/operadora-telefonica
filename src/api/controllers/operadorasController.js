import * as operadorasModel from '../models/operadorasModels'
import { COLUMNS } from "../views/operadoras/constants/columns"

export function operadorasController(req, res) {
    operadorasModel.getAllOperadoras(function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result)
            res.render('operadoras/operadoras.ejs', {
                title: "Operadoras",
                columns: COLUMNS,
                operadoras_list: result
            })
        }
    })
}

export function cadastroOperadoras(req, res) {
    res.render('operadoras/form_operadoras.ejs', {
        title: 'Cadastrar Operadora',
        operadoras_list: {
            ope_codigo: '',
            ope_nome: '',
            ope_fantasia: '',
            ope_prefixo: '',
            ope_cidade: ''
        },
        urlSubmit: "/operadoras/novo",
        seeRegister: ""
    })
}

export function getByIdOperadoras(req, res) {
    var id = req.params.codigo;
    operadorasModel.getByIdOperadoras(id, function (err, result) {
        if (err) {
            throw err;
        } else {
            res.render('operadoras/form_operadoras.ejs', {
                title: 'Editar Operadora',
                operadoras_list: result,
                urlSubmit: `operadoras/editar/${id}`
            })
        }
    })
}

export function createOperadora(req, res) {
    const data = res.body;
    console.log(res.body)
    if (data.ope_codigo === "") {
        data.ope_codigo = null;
        operadorasModel.createOperadoras(data, function (err, result) {
            console.log("Passou")
            if (err) {
                throw err
            } else {
                res.redirect('operadoras')
            }
        })
    } else {
        operadorasModel.updateOperadoras(data, function (err, result) {
            if (err) {
                throw err
            } else {
                res.redirect('operadoras')
            }
        })
    }
}

export function visualizarOperadoras(req, res) {
    var id = req.params.codigo;
    console.log("Passou aqui")
    operadorasModel.getByIdOperadoras(id, function (err, result) {
        if (err) {
            console.log("Erro aqui")
            throw err;
        } else {
            res.render('operadoras/form_operadoras.ejs', {
                title: 'Editar Operadora',
                operadoras_list: result,
                urlSubmit: ``,
                seeRegister: readonly
            })
        }
    })
}

export function deleteOperadoras(req, res) {
    var id = req.params.codigo;
    operadorasModel.deleteOperadoras(id, function (err, result){
        if(err){
            throw err
        }else{
            res.redirect('operadoras')
        }
    })
}