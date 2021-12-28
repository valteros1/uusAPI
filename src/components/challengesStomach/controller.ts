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
  createStomach: async (req: Request, res: Response) => {  // uus osa
    const {challengesStomach} = req.body;

if (!challengesStomach) {
    return res.status(404).json({
        error: 'Challenge is required',
    });
}
console.log(challengesStomach)
const id = await challengesStomachService.createStomach(challengesStomach);
return res.status(200).json({
    id,
});

},

}

export default challengesStomachController;