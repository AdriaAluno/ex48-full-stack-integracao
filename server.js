const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let tarefas = [];
let nextId = 1;

// GET /api/tarefas
app.get('/api/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

// POST /api/tarefas
app.post('/api/tarefas', (req, res) => {
    const titulo = req.body?.titulo?.trim();

    if (!titulo) {
        return res.status(400).json({
            mensagem: 'Dados inválidos',
        });
    }

    const tarefa = {
        id: nextId++,
        titulo,
    };

    tarefas.push(tarefa);

    return res.status(201).json(tarefa);
});

app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080');
});