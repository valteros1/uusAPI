import {Request, Response} from 'express';
import challengesStomachService from './services';

const challengesStomachController = {

    getAll: (req: Request, res: Response) => {
        const data = challengesStomachService.getChallengesStomach(req , res );  
        return res.status(200).json({
        data,
      });
  },
  getById: (req: Request, res: Response) => {
        const data=challengesStomachService.getById(req , res );
        return data;
  },

}

export default challengesStomachController;