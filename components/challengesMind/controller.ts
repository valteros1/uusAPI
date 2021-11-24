import {Request, Response} from 'express';
import challengesMindService from './services';

const challengesMindController = {

    getAll: (req: Request, res: Response) => {
        const data = challengesMindService.getChallengesMind(req , res );  
        return res.status(200).json({
        data,
      });
  },
  getById: (req: Request, res: Response) => {
        const data=challengesMindService.getById(req , res );
        return data;
  },

}

export default challengesMindController;