const express = require('express');
const cors = require('cors');

const app = express();

app.use(
	cors({
		origin: 'http://localhost:3001',
	}),
);

app.use(express.json());
app.use(express.static('public'));

let tarefas = [];
let nextId = 1;

app.get('/api/tarefas', (req, res) => {
	res.status(200).json(tarefas);
});

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

app.listen(3000, () => {
	console.log('Servidor rodando em http://localhost:3000');
});
