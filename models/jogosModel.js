// models/jogosModel.js

// Base de dados em memória (antes ficava em jogos.js)
const jogos = [
    { id: 1, nomejogo: 'Roblox', fabricante: 'Roblox Corporation', idadeMin: 10, anoLanc: 2006 },
    { id: 2, nomejogo: 'Minecraft', fabricante: 'Mojang Studios', idadeMin: 10, anoLanc: 2011 },
    { id: 3, nomejogo: 'The Sims 4', fabricante: 'Electronic Arts', idadeMin: 12, anoLanc: 2014 },
    { id: 4, nomejogo: 'GTA VI', fabricante: 'RockStar', idadeMin: 18, anoLanc: 2026 },
    { id: 5, nomejogo: 'FIFA 24', fabricante: 'EA Sports', idadeMin: 3, anoLanc: 2023 }
];

// Retorna todos os jogos
export const listarTodos = () => {
    return jogos;
};

// Filtra jogos por fabricante
export const buscarPorFabricante = (fabricante) => {
    return jogos.filter(
        p => p.fabricante.toLowerCase() === fabricante.toLowerCase()
    );
};

// Busca um único jogo pelo ID
export const buscarPorId = (id) => {
    return jogos.find(p => p.id === id);
};

// Filtra jogos por ano de lançamento
export const buscarPorAno = (anoLanc) => {
    return jogos.filter (j => j.anoLanc === anoLanc)
}

// Cria e insere um novo jogo no array
export const criar = ({ nomejogo, fabricante, idadeMin, anoLanc }) => {
    const novoJogo = {
        id: jogos.length + 1,
        nomejogo,
        fabricante,
        idadeMin: parseInt(idadeMin),
        anoLanc: parseInt(anoLanc)
    };

    jogos.push(novoJogo);
    return novoJogo;
};

// Atualiza um jogo existente pelo ID
export const atualizar = (id, { nomejogo, fabricante, idadeMin, anoLanc }) => {
    const index = jogos.findIndex(p => p.id === id);
    if (index === -1) return null;

    jogos[index] = {
        id,
        nomejogo,
        fabricante,
        idadeMin: parseInt(idadeMin),
        anoLanc: parseInt(anoLanc)
    };

    return jogos[index];
};

// Remove um jogo pelo ID e retorna o item excluído
export const remover = (id) => {
    const index = jogos.findIndex(p => p.id === id);
    if (index === -1) return null;

    const [jogoRemovido] = jogos.splice(index, 1);
    return jogoRemovido;
};
