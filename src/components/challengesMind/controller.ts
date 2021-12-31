import {Request, Response} from 'express';
import challengesMindService from './services';
import { NewMind, UpdateMind} from './interfaces';

const challengesMindController = {

    getAll: async (req: Request, res: Response) => {
        const data = await challengesMindService.getChallengesMind( );  
        return res.status(200).json({
        data,
      });
  },
  getById: async (req: Request, res: Response) => {

    const id: number = parseInt(req.params.id, 10);
    
     if (!id) {
         return res.status(404).json({
           error: 'No valid id provided',
         });
       }
       const data = await challengesMindService.getById(id);
      if (!data) {
        return res.status(404).json({
          error: `No challengse found with id: ${id}`,
        });
      } 
      console.log(data);
      return res.status(200).json({data,});
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
updateMind: async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { challenge } = req.body;
    if (!id) {
      return res.status(404).json({
        error: 'No valid id provided',
      });
    }
    if (!challenge) {
      return res.status(404).json({
        error: 'Nothing to update',
      });
    }
    const updateMind: UpdateMind = {
        challenge
      };
    const mind = await challengesMindService.updateMind(id, updateMind);
    if (!mind) {
      return res.status(404).json({
        error: `No mind found with id: ${id}`,
      });
    }
  
   
    return res.status(200).json({mind,});
  },

  deleteMind: async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
      if (!id) {
      return res.status(404).json({
        error: 'No valid id provided',
      });
    }
    
    const mind = await challengesMindService.deleteMind(id);
    if (!mind) {
      return res.status(404).json({
        error: `No mind found with id: ${id}`,
      });
    }
  
   console.log(mind);
    return res.status(200).json({outcome: ` deleted is ${id}`  } );
  },



}

export default challengesMindController;