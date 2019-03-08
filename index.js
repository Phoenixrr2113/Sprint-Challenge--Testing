require('dotenv').config();

const express = require('express');

const Games = require('./gamesModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json('Server up and running');
});

server.get('/games', async (req, res) => {
	const games = await Games.getAll();
	res.status(200).json(games);
});

server.post('/games', async (req, res) => {
	const game = await Games.insert(req.body);
	res.status(200).json(game);
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

module.exports = server;
