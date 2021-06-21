import { conexao } from "../../app";

export function getAllOperadoras(callback) {
    conexao.query('SELECT O.* FROM operadora O', callback)
}

export function createOperadoras(data, callback) {
    console.log("CREATEE")
    var msql = "INSERT INTO operadora SET ?";
    conexao.query(msql, data, callback);
}

export function updateOperadoras(data, callback) {
    console.log("Update")
    var msql = "UPDATE operadora SET ope_nome = '" + data.ope_nome + "' , ope_fantasia = '" + data.ope_fantasia + "' , ope_prefixo = '" + data.ope_prefixo +  "' , ope_cidade = '" + data.ope_cidade + "' WHERE ope_codigo '" + data.ope_codigo + "'";
    conexao.query(msql, callback);
}

export function removeOperadoras(data, callback){
    var msql = "DELETE FROM WHERE ope_codigo='" + data + "'";
    conexao.query(msql, callback)
}