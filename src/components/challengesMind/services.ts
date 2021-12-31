import {Request, Response} from 'express';
import db from '../../database/database';
import { NewMind, UpdateMind } from './interfaces';
import pool from '../../database/databaseMysql';

const challengesMindService = {
    getChallengesMind: async ( ) => {
        const [challengesMind] = await pool.query('SELECT id, challenge FROM challengesmind')
        return challengesMind;
        
    },
    getById: async ( id: Number ) =>{
   
       const [challenge] : any = await pool.query('SELECT id, challenge FROM challengesmind WHERE id = ? ', [id], )
     
       return challenge;
      },
      createMind: async (createMind: NewMind) => {
      
        const [result]: any = await pool.query('INSERT INTO challengesMind SET challenge = ?', [createMind]);
        
         // console.log(result.insertId);
         return result.insertId;
       },
       updateMind: async (id: Number, challenge: UpdateMind) => {

        const [index]: any = await pool.query('UPDATE challengesmind SET ? WHERE ID = ? ', [challenge, id]);
        return index;

      },

      deleteMind: async (id: Number) => {

        const [index]: any = await pool.query('DELETE FROM challengesmind WHERE ID = ? ', [id]);
        return index.affectedRows;

      }

}

export default challengesMindService;
