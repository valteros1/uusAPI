import express, {Router} from 'express';
import controller from './controller';

const challengesMindRouter = express.Router();

challengesMindRouter
    .get('/',controller.getAll)
    .get('/:id',controller.getById)
    

export default challengesMindRouter;