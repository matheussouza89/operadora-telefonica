import { conexao } from "../../app";

export function getAllOperadoras(callback) {
    conexao.query('SELECT O.* FROM operadora O', callback)
}

export function getByIdOperadoras(id, callback) {
    conexao.query('SELECT * FROM operadora  WHERE ope_codigo = ' + id, callback);
}

export function createOperadoras(data, callback) {
    var msql = "INSERT INTO operadora SET ?";
    conexao.query(msql, data, callback);
}

export function updateOperadoras(data, callback) {
    var msql = "UPDATE operadora SET ope_nome = '" + data.ope_nome + "' , ope_fantasia = '" + data.ope_fantasia + "' , ope_prefixo = '" + data.ope_prefixo + "' , ope_cidade = '" + data.ope_cidade + "' WHERE ope_codigo = '" + data.ope_codigo + "'";
    conexao.query(msql, callback);
}

export function removeOperadoras(id, callback) {
    console.log(id)
    var msql = "DELETE FROM operadora WHERE ope_codigo = '" + id + "'";
    conexao.query(msql, callback)
}