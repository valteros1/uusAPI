import {Request, Response} from 'express';
import db from '../../database/database';
import { NewUser, User, UpdateUser } from './interfaces';
import hashService from '../general/services/hashService';


const usersService = {
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
        const user = db.users.find((element) => element.id === id);
        if (!user) {
          return res.status(404).json({
            error: `No user found with id: ${id}`,
          });
        }
        return res.status(200).json({
          user,
        });
      },
      getUserByEmail: (email: string): User | undefined => {
        const user = db.users.find((element) => element.email === email);
        return user;
    },
      
      createUser: async (newUser: NewUser) => {
        const id = db.users.length + 1;
        const hashedPassword = await hashService.hash(newUser.password);
        db.users.push({
          id,
          ...newUser,
          password: hashedPassword,
        });
        return id;
      },
      updateUser: (user: UpdateUser): boolean => {
        const { id, firstName, lastName } = user;
        const index = db.users.findIndex((element) => element.id === id);
        if (firstName) {
          db.users[index].firstName = firstName;
        }
        if (lastName) {
          db.users[index].lastName = lastName;
        }
        return true;
      },
     
      getUserById: (id: number): User | undefined => {
        const user = db.users.find((element) => element.id === id);
        return user;
      }
      

      };

export default usersService;