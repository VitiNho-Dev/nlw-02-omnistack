import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// http://localhost:3333/users
// http://localhost:3333/contacts 

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova infromação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar 
// Query Params: Paginação, foltros, ordenação 

// localhost:3333/users 

// SELECT * FROM users 
// Knex('users').select('*')