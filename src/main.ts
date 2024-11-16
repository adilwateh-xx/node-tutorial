import express, { Request, Response } from 'express';
import { route } from './routes/user.route';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ name: 'baruding' });
});

app.post('/', (req: Request, res: Response) => {
  res.json({ success: true, method: 'POST' });
});

app.put('/', (req: Request, res: Response) => {
  res.json({ success: true, method: 'PUT' });
});

app.delete('/', (req: Request, res: Response) => {
  res.json({ success: true, method: 'DELETE' });
});

app.use('/user', route);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
