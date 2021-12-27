import {Request, Response} from 'express';
import challengesBodyService from './services';
import  {NewBody}  from './interfaces';

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
     
    
} // lõpp



export default challengesBodyController;