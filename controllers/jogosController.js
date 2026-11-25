// controllers/jogosController.js
import * as jogosModel from '../models/jogosModel.js';

// GET /jogos
// retorna todos os jogos
export const getJogos = (req, res) => {
    const jogos = jogosModel.listarTodos();
    res.status(200).json(jogos);
};

// GET /jogos/:id
// retorna um jogo específico pelo ID
export const getJogoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogosModel.buscarPorId(id);

    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({
            mensagem: `Jogo ${id} não encontrado`
        });
    }
};

// GET /jogos/fabricante/:fabricante
// retorna jogos filtrados por fabricante
export const getJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const jogosFabricante = jogosModel.buscarPorFabricante(fabricante);

    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado do fabricante ${fabricante}`
        });
    }
};

export const buscarPorAno = (req, res) => {
    const anoLanc = parseInt(req.params.anoLanc);
    const jogosAno = jogosModel.buscarPorAno(anoLanc);

    if (jogosAno.length > 0) {
        res.status(200).json(jogosAno);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado lançado em ${anoLanc}`
        });
    }
};

// POST /jogos
// cria um novo jogo
export const postJogo = (req, res) => {
    const { nomejogo, fabricante, idadeMin, anoLanc } = req.body;

    if (!nomejogo || !fabricante || idadeMin === undefined || anoLanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idadeMin, anoLanc) são obrigatórios.'
        });
    }

    const novoJogo = jogosModel.criar({ nomejogo, fabricante, idadeMin, anoLanc });
    res.status(201).json(novoJogo);
};

// PUT /jogos/:id
// atualiza um jogo existente pelo ID
export const putJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nomejogo, fabricante, idadeMin, anoLanc } = req.body;

    if (!nomejogo || !fabricante || idadeMin === undefined || anoLanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idadeMin, anoLanc) devem ser informados.'
        });
    }

    const jogoAtualizado = jogosModel.atualizar(id, { nomejogo, fabricante, idadeMin, anoLanc });

    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }

    res.status(200).json(jogoAtualizado);
};

// DELETE /jogos/:id
// remove um jogo pelo ID
export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = jogosModel.remover(id);

    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};
