import {Request, Response} from 'express';
import challengesStomachService from './services';
import { NewStomach, UpdateStomach} from './interfaces';

const challengesStomachController = {

    getAll: async (req: Request, res: Response) => {
        const data = await challengesStomachService.getChallengesStomach( );  
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
      const data = await challengesStomachService.getById(id);
     if (!data) {
       return res.status(404).json({
         error: `No challengse found with id: ${id}`,
       });
     } 
     console.log(data);
     return res.status(200).json({data,});
  },
  createStomach: async (req: Request, res: Response) => {  
    const {challengesStomach} = req.body;

  if (!challengesStomach) {
    return res.status(404).json({
        error: 'Challenge is required',
    });
    }
    console.log(challengesStomach)
    const id = await challengesStomachService.createStomach(challengesStomach);
    console.log(id);
    return res.status(200).json({
    id,
});

},
updateStomach: async (req: Request, res: Response) => {
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
    const updateStomach: UpdateStomach = {
        challenge
      };
    const stomach = await challengesStomachService.updateStomach(id, updateStomach);
    if (!stomach) {
      return res.status(404).json({
        error: `No mind found with id: ${id}`,
      });
    }
  
   
    return res.status(200).json({stomach,});
  },

  deleteStomach: async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
      if (!id) {
      return res.status(404).json({
        error: 'No valid id provided',
      });
    }
    
    const stomach = await challengesStomachService.deleteStomach(id);
    if (!stomach) {
      return res.status(404).json({
        error: `No stomach found with id: ${id}`,
      });
    }
  
   console.log(stomach);
    return res.status(200).json({outcome: ` deleted is ${id}`  } );
  },


}

export default challengesStomachController;