import express, { Request, Response, Express } from 'express';
import db from '../database/database';
const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello world!',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});

app.get('/users', (req: Request, res: Response) => {
  res.status(400).json({
    users: db.users,
  });
});