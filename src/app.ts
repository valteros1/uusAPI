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

import ping from './components/general/ping/controller';
 
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

app.get('/ping', ping);



// app.post('/login', authController.login);
app.post('/users', UsersController.createUser);



// app.use(isLoggedIn);





app.use('/challengesMind', challengesMindRouter);
app.use('/challengesStomach', challengesStomachRouter);
app.use('/challengesBody', challengesBodyRouter);
app.use('/users', usersRouter); //isAdmin vahele pista.

// isAdmin, usersitest välja hetkel kommenteeritud, et pärida andmeid andmebaasist



app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello world!',
  });
});


export default app;