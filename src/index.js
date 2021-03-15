const express = require('express');

const app = express();

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

app.get('/', (req, res) => {
   return res.json({message: "Hello World Ignite - Fundamentos NodeJS!"});
});

app.listen(3333);

