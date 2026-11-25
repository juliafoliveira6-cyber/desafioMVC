import express from 'express';
import jogosRoutes from './routes/jogosRoutes.js';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Direciona todas as requisições que começam com '/jogos' para o arquivo de rotas
app.use('/jogos', jogosRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});