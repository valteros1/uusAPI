import {Request, Response} from 'express';
import db from '../../database/database';


const UsersService = {
    getUsers:( req: Request, res: Response ) => {
        const {users} = db;
        return res.status(200).json({
            users,
        })
    },
    getById:(req: Request, res: Response ) =>{
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(404).json({
            error: 'No valid id provided',
          });
        }
        const users = db.users.find((element) => element.id === id);
        if (!users) {
          return res.status(404).json({
            error: `No user found with id: ${id}`,
          });
        }
        return res.status(200).json({
          users,
        });
      }
}

export default UsersService;