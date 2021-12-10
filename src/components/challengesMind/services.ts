import {Request, Response} from 'express';
import db from '../../database/database';

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
      }
}

export default challengesMindService;
