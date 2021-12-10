import {Request, Response} from 'express';
import db from '../../database/database';

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
      }
}

export default challengesStomachService;