import express, { Request, Response, Application } from 'express';

import { User } from '../components/users/interfaces';
import  challengesBody from '../components/challengesBody/interfaces';
import challengesMind from '../components/challengesMind/interfaces';
import challengesStomach from '../components/challengesStomach/interfaces';


interface Db {
    users: User[];
    challengesBody: challengesBody[];
    challengesMind: challengesMind[];
    challengesStomach: challengesStomach[];

  }

const app: Application = express();

const db: Db = {
    users: [
    {
        id: 1,
        firstName: 'Valter',
        lastName: 'Rosenfeld',
        email: 'valter@rosenfeld.ee',
        password: '$2b$10$Um6D5jbR9.u842c6hU.t1egTTTFs4uu.c8BO4ewCpE3LYqe28nMmK',
        // parool on valter
        role: 'Admin',
    },
    {
        id: 2,
        firstName: 'Toomas',
        lastName: 'Joomas',
        email: 'toomas@joomas.ee',
        password: '$2b$10$UsUKvNVZiMQao0qwsHKsYu0ZwB0m09.vLzjpUhawf32tY1WpygPHi',
        // parool on toomas
        role: 'User',
    }
    ],
    challengesBody: [
    {
        id: 1,
        challenge: 'Tee midagi kehale',
        
    },
    { 
        id: 2,
        challenge: 'Tee midagi kehale2'
    }
    ],
    challengesMind: [
    {   
        id: 1,
        challenge: 'Tee midagi vaimule'

    }     
    ],
    challengesStomach: [
    {
        id: 1,
        challenge: 'Midagi kõhule'

    }
    ],
}



export default db;