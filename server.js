const express = require('express');
const cors = require('cors');
const app = express();

// CORS: aceita requisições de http://localhost:3001
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let tarefas = [],
	nextId = 1;

// TODO:
// GET  /api/tarefas  → 200 + array de tarefas
// POST /api/tarefas  → 201 + tarefa criada { id, titulo }

app.get('/api/tarefas', (req, res) => {
	res.status(200).json(tarefas || []);
	console.log(JSON.stringify(tarefas, null, 2));
});
app.post('/api/tarefas', (req, res) => {
	const titulo = req.body?.titulo;
	if (!titulo) {
		res.status(400).json('Dados inválidos');
	}
	tarefas.push({ id: nextId, titulo: titulo });
	nextId++;
	res.status(201).json(tarefas);
});

app.listen(8080, () =>
	console.log('Servidor rodando em http://localhost:8080'),
);
