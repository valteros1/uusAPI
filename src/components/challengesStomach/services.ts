import {Request, Response} from 'express';
import db from '../../database/database';
import { NewStomach } from './interfaces';
import pool from '../../database/databaseMysql';

const challengesStomachService = {
    getChallengesStomach:( req: Request, res: Response ) => {
        const {challengesStomach} = db;
        return res.status(200).json({
            challengesStomach,
        })
    },
    getById:(req: Request, res: Response ) =>{
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(404).json({
            error: 'No valid id provided',
          });
        }
        const challengesStomach = db.challengesStomach.find((element) => element.id === id);
        if (!challengesStomach) {
          return res.status(404).json({
            error: `No challengse found with id: ${id}`,
          });
        }
        return res.status(200).json({
          challengesStomach,
        });
      },
      createStomach: async (createStomach: NewStomach) => {
      
        const [result]: any = await pool.query('INSERT INTO challengesMind SET challenge = ?', [createStomach]);
        
         // console.log(result.insertId);
         return result.insertId;
       }
}

export default challengesStomachService;