import {Request, Response} from 'express';
import pool from '../../database/databaseMysql';
import { RowDataPacket } from 'mysql2';
import db from '../../database/database';
import { NewUser, User, UpdateUser } from './interfaces';
import hashService from '../general/services/hashService';


const usersService = {
    getUsers: async( ) => {
        const [users] = await pool.query('SELECT id, firstName, lastName, email FROM users');
        // const {users} = db;
        return users;
        
    },  
    getById:( id: number ) : User | undefined =>{
      const user = db.users.find((element) => element.id === id);
      return user;


      },
      getUserByEmail: async (email: string) => {
        const [user]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        // const user = db.users.find((element) => element.email === email); vana databaas
        return user[0];
    },
      
      createUser: async (newUser: NewUser) => {
        // const id = db.users.length + 1;
        const hashedPassword = await hashService.hash(newUser.password);
        const user = {
          ...newUser,
          password: hashedPassword,
        };
        const result: any = await pool.query('INSERT INTO users SET ?', [user]);
        return result.insertedID;
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
     
       
      

      };

export default usersService;