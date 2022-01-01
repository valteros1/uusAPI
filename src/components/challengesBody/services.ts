import {Request, Response} from 'express';
import db from '../../database/database';
import { NewBody, UpdateBody } from './interfaces';
import pool from '../../database/databaseMysql';

const challengesBodyService = {
    getChallengesBody: async( ) => {
        const [challengesBody] = await pool.query('SELECT id, challenge FROM challengesbody')
        return challengesBody;
  
    },
    getById: async( id: Number ) =>{
     
        const [challenge] : any = await pool.query('SELECT id, challenge FROM challengesbody WHERE id = ? ', [id], )
        
        return challenge;
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
