import express, { Request, Response, Application } from 'express';


const app: Application = express();

const db = {
    users: [
    {
        id: 1,
        firstName: 'Valter',
        lastName: 'Rosenfeld',
        
    },
    {
        id: 2,
        firstName: 'Toomas',
        lastName: 'Joomas',
    }
    ],
    challengesBody: [
    {
        id: 1,
        Challenge: 'Tee midagi kehale'
    }
    ],
    challengeMind: [
    {   
        id: 1,
        Challenge: 'Tee midagi vaimule'

    }     
    ],
    challengeStomach: [
    {
        id: 1,
        Challenge: 'Midagi kõhule'

    }
    ],
}



export default db;