import express, {Router} from 'express';
import controller from './controller';

const router = express.Router();

router
    .get('/',controller.getAll)
    .get('/:id',controller.getById)
    .post('/',controller.createBody)
    .patch('/:id', controller.updateBody)
    .delete('/:id', controller.deleteBody)
    

export default router;
