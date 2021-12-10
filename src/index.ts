import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';
import cors from 'cors';
import express, { Request, Response, Express } from 'express';
import db from './database/database';
// import db from './**/*/database/database';

import challengesMindRouter from '../src/components/challengesMind/routes';

import challengesStomachRouter from '../src/components/challengesStomach/routes';
import challengesBodyRouter from '../src/components/challengesBody/routes';
import usersRouter from '../src/components/users/routes';
import UsersController from '../src/components/users/controller';
import authController from '../src/components/authentication/controller';
 
// Middleware kasutamine //

import isLoggedIn from '../src/components/authentication/isLoggedInMiddleware';
import isAdmin from './components/authentication/isAdminMiddleware';


const app: Express = express();
const port: number = 3000;
const created: number = 201;
const noContent: number = 204;
const notFound: number = 404;

app.use(express.json());
app.use(cors());



app.post('/login', authController.login);
app.post('/users', UsersController.createUser);

app.use(isLoggedIn);





app.use('/challengesMind', challengesMindRouter);
app.use('/challengesStomach', challengesStomachRouter);
app.use('/challengesBody', challengesBodyRouter);
app.use('/users',isAdmin, usersRouter);

// isAdmin, usersitest välja hetkel kommenteeritud, et pärida andmeid andmebaasist



app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello world!',
  });
});

app.listen(port, () => {
   console.log(`App is running on port ${port}`);
});


app.post('/challengesBody', (req: Request, res: Response) =>{
  const { challenge } = req.body;
  const id = db.challengesBody.length + 1;
  db.challengesBody.push({
      id,
      challenge,
  });
  
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/challengesMind', (req: Request, res: Response) =>{
  const { challenge } = req.body;
  const id = db.challengesMind.length + 1;
  db.challengesMind.push({
      id,
      challenge,
  });
  
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/challengesStomach', (req: Request, res: Response) =>{
  const { challenge } = req.body;
  const id = db.challengesStomach.length + 1;
  db.challengesStomach.push({
      id,
      challenge,
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
