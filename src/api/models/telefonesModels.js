import { conexao } from "../../app";

export function getAllTelefones(callback) {
    conexao.query('SELECT T.* FROM telefone T', callback)
}

export function createTelefones(data, callback) {
    console.log("CREATEE")
    var msql = "INSERT INTO telefone SET ?";
    conexao.query(msql, data, callback);
}

export function updateTelefones(data, callback) {
    console.log("Update")
    var msql = "UPDATE telefone SET ope_nome = '" + data.ope_nome + "' , ope_fantasia = '" + data.ope_fantasia + "' , ope_prefixo = '" + data.ope_prefixo +  "' , ope_cidade = '" + data.ope_cidade + "' WHERE ope_codigo '" + data.ope_codigo + "'";
    conexao.query(msql, callback);
}

export function removeTelefones(data, callback){
    var msql = "DELETE FROM WHERE tel_codigo='" + data + "'";
    conexao.query(msql, callback)
}