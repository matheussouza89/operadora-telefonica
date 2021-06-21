import express from 'express';
import consign from 'consign';
import path from 'path';
import { json, urlencoded } from 'body-parser';
import mysql from 'mysql';
import http from 'http';

export const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.set('views', path.join(__dirname + '/api/views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('js'));

app.set('port', 5000);

consign({ cwd: 'src/api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

const database = 'dados211d';

export const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '37018946m',
    port: '3306'
})

conexao.connect((err) => {
    if (err) {
        console.log("Conexão com o banco mal sucedida", err)
        return
    }
    console.log("Conectado ao banco")
})

conexao.query('USE ' + database);


http.createServer(app).listen(app.get('port'), function() {
    console.log('Aplicação rodando na porta ' + app.get('port'))
})