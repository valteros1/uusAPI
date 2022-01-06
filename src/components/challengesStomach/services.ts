import {Request, Response} from 'express';
import db from '../../database/database';
import { NewStomach, UpdateStomach } from './interfaces';
import pool from '../../database/databaseMysql';

const challengesStomachService = {
  getChallengesStomach: async ( ) => {
    const [challengesStomach] = await pool.query('SELECT id, challenge FROM challengesstomach')
    return challengesStomach;

    },
    getById: async ( id: Number ) =>{
      const [challenge] : any = await pool.query('SELECT id, challenge FROM challengesstomach WHERE id = ? ', [id], )
     
       return challenge;
      },
      createStomach: async (createStomach: NewStomach) => {
      
        const [result]: any = await pool.query('INSERT INTO challengesstomach SET challenge = ?', [createStomach]);
          
         // console.log(result.insertId);
         return result.insertId;
       },
       updateStomach: async (id: Number, challenge: UpdateStomach) => {

        const [index]: any = await pool.query('UPDATE challengesstomach SET ? WHERE ID = ? ', [challenge, id]);
        return index;

      },

      deleteStomach: async (id: Number) => {

        const [index]: any = await pool.query('DELETE FROM challengesstomach WHERE ID = ? ', [id]);
        return index.affectedRows;

      }
}

export default challengesStomachService;