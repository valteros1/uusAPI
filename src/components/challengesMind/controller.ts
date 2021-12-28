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
  createMind: async (req: Request, res: Response) => {  // uus osa
    const {challengesMind} = req.body;

if (!challengesMind) {
    return res.status(404).json({
        error: 'Challenge is required',
    });
}
console.log(challengesMind)
const id = await challengesMindService.createMind(challengesMind);
return res.status(200).json({
    id,
});

},

}

export default challengesMindController;