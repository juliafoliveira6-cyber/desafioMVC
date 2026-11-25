// routes/jogosRoutes.js
import { Router } from 'express';
import {
    getJogos,
    getJogosPorFabricante,
    getJogoPorId,
    buscarPorAno,
    postJogo,
    putJogo,
    deleteJogo
} from '../controllers/jogosController.js';

const router = Router();

// O prefixo '/jogos' será definido no app.js
router.get('/', getJogos);
router.get('/fabricante/:fabricante', getJogosPorFabricante);
router.get('/:id', getJogoPorId);
router.get('/ano/:anoLanc', buscarPorAno);
router.post('/', postJogo);
router.put('/:id', putJogo);
router.delete('/:id', deleteJogo);

export default router;
