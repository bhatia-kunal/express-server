import Trainee from './Controller';
import * as express from 'express';

const traineeRouter = express.Router();

traineeRouter.get('/', Trainee.get);
traineeRouter.post('/', Trainee.post);
traineeRouter.put('/', Trainee.put);
traineeRouter.delete('/', Trainee.delete);

export default traineeRouter;