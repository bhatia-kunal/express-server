import Trainee from './Controller';
import * as express from 'express';
import validationHandler from '../../libs/routes/validationHnadler';
import validations from './validations';

const traineeRouter = express.Router();

traineeRouter.get('/', validationHandler(validations.get), Trainee.get);
traineeRouter.post('/', validationHandler(validations.post), Trainee.post);
traineeRouter.put('/', validationHandler(validations.put), Trainee.put);
traineeRouter.delete('/:id', validationHandler(validations.delete), Trainee.delete);

export default traineeRouter;