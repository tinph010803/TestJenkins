// app.test.js
const request = require('supertest');
const app = require('./demo');

describe('GET /', () => {
  it('should return Hello, Jenkins!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, Jenkins!');
  });
});
