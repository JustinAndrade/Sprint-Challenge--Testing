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

server.post('/games', async (req, res) => {
	const { title, genre, releaseYear } = req.body;
	try {
		if ((title, genre, releaseYear)) {
			Games.add(req.body);
			res.status(201).json(req.body);
		} else {
			res.status(422).json({ message: 'Not all correct fields were submitted.' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = server;
