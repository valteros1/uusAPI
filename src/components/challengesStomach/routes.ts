import express, {Router} from 'express';
import controller from './controller';

const router = express.Router();

router
    .get('/',controller.getAll)
    .get('/:id',controller.getById)
    .post('/',controller.createStomach)
    .patch('/:id', controller.updateStomach)
    .delete('/:id', controller.updateStomach)
    

export default router;