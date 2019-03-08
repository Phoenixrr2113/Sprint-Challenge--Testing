const request = require('supertest');

const server = require('./index');

describe('Server', () => {
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
			const res = await request(server).get('/');

			expect(res.status).toBe(200);
		});

		it('should return an array', async () => {
			const res = await request(server).get('/games');
			console.log(res);

			expect(res.body).toBe('array');
		});
	});
});
