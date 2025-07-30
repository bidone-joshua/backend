import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors()); // Allow all origins

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

export default app;