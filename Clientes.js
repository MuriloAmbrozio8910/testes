const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para fazer o parsing do corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para receber dados da Yampi
app.all('/receber-dados-da-yampi', (req, res) => {
    if (req.method === 'POST') {
      // Processar dados recebidos via POST
      const dadosRecebidos = req.body;
      console.log('Dados recebidos da Yampi:', dadosRecebidos);
      res.status(200).json({ message: 'Dados recebidos com sucesso e enviados para a E-Goi' });
    } else {
      // Responder a outros métodos (GET, PUT, DELETE, etc.) com erro 405 - Método não permitido
      res.status(405).json({ error: 'Método não permitido' });
    }
  });
  

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
