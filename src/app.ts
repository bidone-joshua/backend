import express, { Request, Response } from 'express';

const app = express();

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

export default app;