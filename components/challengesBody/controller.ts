import {Request, Response} from 'express';
import challengesBodyService from './services';

const challengesBodyController = {

    getAll: (req: Request, res: Response) => {
        const data = challengesBodyService.getChallengesBody(req , res );  
        return res.status(200).json({
        data,
      });
  },
  getById: (req: Request, res: Response) => {
        const data=challengesBodyService.getById(req , res );
        return data;
  },

}

export default challengesBodyController;