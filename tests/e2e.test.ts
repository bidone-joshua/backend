import axios from 'axios';

describe('E2E: GET /hello from live server', () => {
  it('should return Hello, world!', async () => {
    const res = await axios.get('http://localhost:3000/hello');
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello, world!' });
  });
});