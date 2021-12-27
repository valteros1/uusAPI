import {Request, Response} from 'express';
import db from '../../database/database';
import { NewBody } from './interfaces';
import pool from '../../database/databaseMysql';

const challengesBodyService = {
    getChallengesBody:( req: Request, res: Response ) => {
        const {challengesBody} = db;
        return res.status(200).json({
            challengesBody,
        })
    },
    getById:(req: Request, res: Response ) =>{
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(404).json({
            error: 'No valid id provided',
          });
        }
        const challengesBody = db.challengesBody.find((element) => element.id === id);
        if (!challengesBody) {
          return res.status(404).json({
            error: `No challengse found with id: ${id}`,
          });
        }
        return res.status(200).json({
          challengesBody,
        });
      },
      createBody: async (createBody: NewBody) => {
      
       const result: any = await pool.query('INSERT INTO challengesBody SET challenge = ?', [createBody]);
        console.log(result);
        return result.insertId;
      }
}

export default challengesBodyService;
