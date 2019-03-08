const request = require('supertest');

const server = require('./index');

describe('Server', () => {
	it('should set testing environment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
	describe('GET /', () => {
		it('should return 200 OK', async () => {
			const res = await request(server).get('/');

			expect(res.status).toBe(200);
		});

		it('should return JSON', async () => {
			const res = await request(server).get('/');

			expect(res.type).toBe('application/json');
		});
	});

	describe('GET / GAMES', () => {
		it('should return 200 OK', async () => {
			const res = await request(server).get('/games');

			expect(res.status).toBe(200);
		});
	});

	describe('POST / GAMES', () => {
		it('should return 200 OK', async () => {
			const res = await request(server).post('/games');

			expect(res.status).toBe(200);
		});

		// it('should return an array', async () => {
		// 	const res = await request(server).get('/games');

		// 	expect(res.body).toBe('array');
		// });
	});
});
