const db = require('../data/dbConfig.js');

module.exports = {
	getAll,
	add,
	findById
};

function getAll() {
	return db('Games');
}

function findById(id) {
	return db('Games').where({ id }).first();
}

async function add(game) {
	const [ id ] = await db('Games').insert(game);
	return findById(id);
}
