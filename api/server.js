const express = require('express');
const Games = require('../games/gamesModel.js');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ Games_API: 'Online' });
});

server.get('/games', (req, res) => {
	Games.getAll()
		.then((game) => {
			res.status(200).json(game);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

server.post('/games', (req,res)=> {
})

module.exports = server;
