import {Request, Response} from 'express';
import challengesBodyService from './services';
import  {NewBody, UpdateBody}  from './interfaces';

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
  
    createBody: async (req: Request, res: Response) => {  // uus osa
        const {challengesBody} = req.body;
   
    if (!challengesBody) {
        return res.status(404).json({
            error: 'Challenge is required',
        });
    }
    console.log(challengesBody)
    const id = await challengesBodyService.createBody(challengesBody);
    return res.status(200).json({
        id,
    });
    
  },

  updateBody: async (req: Request, res: Response) => {
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
    const updateBody: UpdateBody = {
        challenge
      };
    const body = await challengesBodyService.updateBody(id, updateBody);
    if (!body) {
      return res.status(404).json({
        error: `No body found with id: ${id}`,
      });
    }
  
   
    return res.status(200).json({body,});
  },

  deleteBody: async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
      if (!id) {
      return res.status(404).json({
        error: 'No valid id provided',
      });
    }
    
    const body = await challengesBodyService.deleteBody(id);
    if (!body) {
      return res.status(404).json({
        error: `No body found with id: ${id}`,
      });
    }
  
   console.log(body);
    return res.status(200).json({outcome: ` deleted is ${id}`  } );
  },



     
    
} // lõpp



export default challengesBodyController;