import request from 'supertest';
import app from '../src/app';

describe('GET /hello', () => {
  it('should return 200 and correct message', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, world!' });
  });
});