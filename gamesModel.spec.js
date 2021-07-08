const db = require('./data/dbConfig');
const Games = require('./gamesModel');

describe('Game model', () => {
	describe('insert()', () => {
		afterEach(async () => {
			await db('games').truncate();
		});

		it('Should add new game to db', () => {
			async () => {
				await Games.insert({
					title: 'pacman',
					genre: 'arcade',
					releaseYear: 1989,
				});
				await Games.insert({
					title: 'hero',
					genre: 'console',
					releaseYear: 2000,
				});

				const games = await db('games');
				expect(games).toHaveLength(2);
			};
		});
	});
});
