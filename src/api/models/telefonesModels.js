import { conexao } from "../../app";

export function getAllTelefones(callback) {
    conexao.query('SELECT T.* FROM telefone T', callback)
}

export function getTelefonesFilter(descricao, modelo, cor, callback){
    conexao.query('SELECT * FROM telefone WHERE tel_descricao= ' + descricao + '&& tel_modelo=' + modelo + '&& tel_cor=' + cor, callback);
}

export function getByIdTelefones(id, callback) {
    conexao.query('SELECT * FROM telefone WHERE tel_codigo = ' + id, callback);
}

export function createTelefones(data, callback) {
    console.log("CREATEE")
    var msql = "INSERT INTO telefone SET ?";
    conexao.query(msql, data, callback);
}

export function updateTelefones(data, callback) {
    console.log("Update")
    var msql = "UPDATE telefone SET tel_descricao = '" + data.tel_descricao + "' , tel_modelo = '" + data.tel_modelo + "' , tel_cor = '" + data.tel_cor +  "' , tel_chips = '" + data.tel_chips + "' , ope_codigo = '" + data.ope_codigo + "' WHERE tel_codigo = '" + data.tel_codigo + "'";
    conexao.query(msql, callback);
}

export function removeTelefones(data, callback){
    var msql = "DELETE FROM telefone WHERE tel_codigo='" + data + "'";
    conexao.query(msql, callback)
}