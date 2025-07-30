import axios from 'axios';

describe('E2E: GET /hello from live server', () => {
  it('should return Hello, world!', async () => {
    const res = await axios.get('http://134.33.248.254/hello'); // get using kubectl get svc
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello, world!' });
  });
});