import express, {Router} from 'express';
import controller from './controller';

const challengesMindRouter = express.Router();

challengesMindRouter
    .get('/',controller.getAll)
    .get('/:id',controller.getById)
    .post('/',controller.createMind)
    .patch('/:id', controller.updateMind)
    .delete('/:id', controller.deleteMind)
    

export default challengesMindRouter;