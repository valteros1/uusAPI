import express, {Router} from 'express';
import controller from './controller';

const router = express.Router();

router
    .get('/',controller.getAll)
    .get('/:id',controller.getById)
    

export default router;
