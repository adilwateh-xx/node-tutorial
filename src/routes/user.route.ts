import { Router, Request, Response } from 'express';

export const route = Router();

route.get('/test', (req: Request, res: Response) => {
  res.json({ test: 'test' });
});