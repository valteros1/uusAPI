import {Request, Response} from 'express';
import UsersService from './services';
import { NewUser, UpdateUser } from './interfaces';
import usersService from './services';
import hashService from '../general/services/hashService';

const UsersController = {

    getAll: (req: Request, res: Response) => {
        console.log(req.headers);
        const data = UsersService.getUsers(req , res );  
        return res.status(200).json({
        data,
      });
  },
  getById: (req: Request, res: Response) => {
        const data=UsersService.getById(req , res );
        return data;
  },
  createUser: async (req: Request, res: Response) => {
      const {firstName, lastName, password, email} = req.body;
      if (!firstName) {
          return res.status(404).json({
              error: 'First name is required',
          });
      }
      if (!lastName) {
          return res.status(404).json({
              error: 'Last name is required',
          });
      }
      if (!email) {
        return res.status(404).json({
            error: 'email is required',
        });
    }
    if (!password) {
        return res.status(404).json({
            error: 'password is required',
        });
    }
      const newUser: NewUser = {
          firstName,
          lastName,
          email,
          password,
          role: 'User',
      };
      const id = await UsersService.createUser(newUser);
      return res.status(200).json({
          id,
      }); 
  },
  updateUser: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { firstName, lastName } = req.body;
    if (!id) {
      return res.status(404).json({
        error: 'No valid id provided',
      });
    }
    if (!firstName && !lastName) {
      return res.status(404).json({
        error: 'Nothing to update',
      });
    }
    const user = UsersService.getUserById(id);
    if (!user) {
      return res.status(404).json({
        error: `No user found with id: ${id}`,
      });
    }
    const updateUser: UpdateUser = {
      id,
      firstName,
      lastName,
    };
    UsersService.updateUser(updateUser);
    return res.status(200).json({});
  },
  

 
 
  

};



// const getUsers = (req: Request, res: Response) => {
//   const users = usersService.getUsers();
//   return res.status(200).json({
//     return res.status(200).json({
//       users,
//     })
//   });
// }




export default UsersController;