import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleware';
import validationHandler from '../../libs/routes/validationHnadler';
import Trainee from './Controller';
import validations from './validations';

const traineeRouter = express.Router();

traineeRouter.get('/', validationHandler(validations.get), authMiddleWare('Trainee', 'read'), Trainee.get);
traineeRouter.post('/', validationHandler(validations.post), Trainee.post);
traineeRouter.put('/', validationHandler(validations.put), Trainee.put);
traineeRouter.delete('/:id', validationHandler(validations.delete), Trainee.delete);

export default traineeRouter;
