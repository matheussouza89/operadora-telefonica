import * as telefonesModel from '../models/telefonesModels';
import * as operadorasModel from '../models/operadorasModels';
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

export function telefonesFiltroController(req, res) {
    console.log("Aqui")
    const pesquisa = req.params;
    telefonesModel.getTelefonesFilter(pesquisa.tel_codigo,pesquisa.tel_modelo,pesquisa.tel_cor,function (err, result) {
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
    operadorasModel.getAllOperadoras(function (err, result){
        if(err){
            throw err;
        }else{
            console.log(result)
            res.render('telefone/form_telefones.ejs', {
                title: 'Cadastrar Telefone',
                telefones_list: [
                    {
                        tel_codigo: "",
                        tel_descricao: "",
                        tel_modelo: "",
                        tel_cor: "",
                        tel_chips: "",
                        ope_codigo: "",
                    }
                ],
                operadoras_list: result,
                urlSubmit: "/telefone/novo",
                seeRegister: "",
                href:` `
            })
        }
    })
}

export function getByIdTelefones(req, res) {
    var id = req.params.codigo;
    operadorasModel.getAllOperadoras(function (err, resultOperadoraModel){
        if(err){
            throw err
        }else{
            telefonesModel.getByIdTelefones(id, function (err, resultTelefoneModel) {
                if (err) {
                    console.log("Erro aqui")
                    throw err;
                } else {
                    res.render('telefone/form_telefones.ejs', {
                        title: 'Editar Telefone',
                        telefones_list: resultTelefoneModel,
                        urlSubmit: ``,
                        seeRegister: ' ',
                        operadoras_list: resultOperadoraModel,
                        href:`href='/telefones/editar/${id}`
                    })
                }
            })
        }
    })
}

export function createTelefone(req, res) {
    const data = req.body;
    if (data.tel_codigo === "") {
        data.tel_codigo = null;
        telefonesModel.createTelefones(data, function (err, result) {
            if (err) {
                throw err
            } else {
                res.redirect('/telefones')
            }
        })
    } else {
        telefonesModel.updateTelefones(data, function (err, result) {
            if (err) {
                throw err
            } else {
                res.redirect('/telefones')
            }
        })
    }
}

export function visualizarTelefones(req, res) {
    var id = req.params.codigo;
    operadorasModel.getAllOperadoras(function (err, resultOperadoraModel){
        if(err){
            throw err
        }else{
            telefonesModel.getByIdTelefones(id, function (err, resultTelefoneModel) {
                if (err) {
                    console.log("Erro aqui")
                    throw err;
                } else {
                    res.render('telefone/form_telefones.ejs', {
                        title: 'Editar Telefone',
                        telefones_list: resultTelefoneModel,
                        urlSubmit: ``,
                        seeRegister: 'readonly',
                        operadoras_list: resultOperadoraModel,
                        href:` `
                    })
                }
            })
        }
    })
}

export function deleteTelefone(req, res) {
    var id = req.params.codigo;
    telefonesModel.deleteTelefones(id, function (err, result) {
        if (err) {
            throw err
        } else {
            res.redirect('/telefones')
        }
    })
}