import {Request, Response} from 'express';
import db from '../../database/database';
import { NewBody, UpdateBody } from './interfaces';
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
      
       const [result]: any = await pool.query('INSERT INTO challengesBody SET challenge = ?', [createBody]);
       
        // console.log(result.insertId);
        return result.insertId;
      },

      updateBody: async (id: Number, challenge: UpdateBody) => {

        const [index]: any = await pool.query('UPDATE challengesbody SET ? WHERE ID = ? ', [challenge, id]);
        return index;

      },

      deleteBody: async (id: Number) => {

        const [index]: any = await pool.query('DELETE FROM challengesbody WHERE ID = ? ', [id]);
        return index.affectedRows;

      }

}

export default challengesBodyService;
