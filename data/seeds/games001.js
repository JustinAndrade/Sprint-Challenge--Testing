exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('games').truncate().then(function() {
		// Inserts seed entries
		return knex('games').insert([
			{ id: 1, title: 'Call of Duty: Black Ops 4', genre: 'Shooter', releaseYear: 2018 },
			{ id: 2, title: 'Diablo 3', genre: 'Action RPG', releaseYear: 2012 },
			{ id: 3, title: 'Dark Souls', genre: 'Action RPG', releaseYear: 2011 }
		]);
	});
};
