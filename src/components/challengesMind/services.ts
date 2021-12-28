import {Request, Response} from 'express';
import db from '../../database/database';
import { NewMind } from './interfaces';
import pool from '../../database/databaseMysql';

const challengesMindService = {
    getChallengesMind:( req: Request, res: Response ) => {
        const {challengesMind} = db;
        return res.status(200).json({
            challengesMind,
        })
    },
    getById:(req: Request, res: Response ) =>{
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(404).json({
            error: 'No valid id provided',
          });
        }
        const challengesMind = db.challengesMind.find((element) => element.id === id);
        if (!challengesMind) {
          return res.status(404).json({
            error: `No challengse found with id: ${id}`,
          });
        }
        return res.status(200).json({
          challengesMind,
        });
      },
      createMind: async (createMind: NewMind) => {
      
        const [result]: any = await pool.query('INSERT INTO challengesMind SET challenge = ?', [createMind]);
        
         // console.log(result.insertId);
         return result.insertId;
       }
}

export default challengesMindService;
