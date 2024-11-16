import { Router, Request, Response } from 'express';

export const route = Router();

route.get('/test', (req: Request, res: Response) => {
  res.json({ test: 'test' });
});

route.post('', (req: Request, res: Response) => {
  res.json({ success: true });
});

route.get('', (req: Request, res: Response) => {
  res.json({ success: true });
});

route.get('', (req: Request, res: Response) => {
  res.json({text:"Hello"})
})

route.post('/test-conflict', (req: Request, res: Response) => {
  res.json({ success: true });
});

