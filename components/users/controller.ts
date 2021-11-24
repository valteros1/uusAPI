import {Request, Response} from 'express';
import UsersService from './services';

const UsersController = {

    getAll: (req: Request, res: Response) => {
        const data = UsersService.getUsers(req , res );  
        return res.status(200).json({
        data,
      });
  },
  getById: (req: Request, res: Response) => {
        const data=UsersService.getById(req , res );
        return data;
  },

}

export default UsersController;