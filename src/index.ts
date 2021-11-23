import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';
import express, { Request, Response, Express } from 'express';
import db from '../database/database';
const app: Express = express();
const port: number = 3000;
const created: number = 201;
const noContent: number = 204;
const notFound: number = 404;
app.use(express.json());

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

app.get('/challengesBody', (req: Request, res: Response) => {
  res.status(400).json({
    challengesBody: db.challengesBody,
  });
});

app.get('/challengesMind', (req: Request, res: Response) => {
  res.status(400).json({
    challengesMind: db.challengesMind,
  });
});

app.get('/challengesStomach', (req: Request, res: Response) => {
  res.status(400).json({
    challengesStomach: db.challengesStomach,
  });
});

app.get('/users/:id', (req: Request, res: Response) => {
  const id : number = parseInt(req.params.id);
  const user = db.users.find((element) => element.id === id );
  res.status(200).json({
    user
  });
});

app.get('/challengesBody/:id', (req: Request, res: Response) => {
  const id : number = parseInt(req.params.id);
  const bodyChallenge = db.challengesBody.find((element) => element.id === id );
  res.status(200).json({
    bodyChallenge
  });
});

app.get('/challengesMind/:id', (req: Request, res: Response) => {
  const id : number = parseInt(req.params.id);
  const mindChallenge = db.challengesMind.find((element) => element.id === id );
  res.status(200).json({
    mindChallenge
  });
});

app.get('/challengesStomach/:id', (req: Request, res: Response) => {
  const id : number = parseInt(req.params.id);
  const stomachChallenge = db.challengesStomach.find((element) => element.id === id );
  res.status(200).json({
    stomachChallenge
  });
});


app.post('/users', (req: Request, res: Response) =>{
  const {firstName, lastName } = req.body;
  const id = db.users.length + 1;
  db.users.push({
      id,
      firstName,
      lastName,
  });
  
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/challengesBody', (req: Request, res: Response) =>{
  const { Challenge } = req.body;
  const id = db.challengesBody.length + 1;
  db.challengesBody.push({
      id,
      Challenge,
  });
  
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/challengesMind', (req: Request, res: Response) =>{
  const { Challenge } = req.body;
  const id = db.challengesMind.length + 1;
  db.challengesMind.push({
      id,
      Challenge,
  });
  
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/challengesStomach', (req: Request, res: Response) =>{
  const { Challenge } = req.body;
  const id = db.challengesStomach.length + 1;
  db.challengesStomach.push({
      id,
      Challenge,
  });
  
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.delete('/users/:id', (req: Request, res: Response) =>{

  const id: number = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      error: 'No valid id provided',
    });
  }
  const index = db.users.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(notFound).json({
      message: `User not found with id: ${id}`,
    });
  }
  db.users.splice(index, 1);
  return res.status(noContent).send();
  
});

export default app;
