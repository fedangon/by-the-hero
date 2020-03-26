const express = require('express'); //importando as funcionalidades do express
const cors = require('cors');
const routes = require('./routes');

const app = express();  //criando uma variável que vai instanciar uma aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end - receber
 * POST: Criar uma informação no back-end - enviar
 * PUT: Alterar uma inforamação no back-end - atualizar
 * DELETE: Deletar uma informação no back-end - deletar
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o símbolo de "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para identiicar recursos
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQlite, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc 
 */
  
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 */


app.listen(3333);