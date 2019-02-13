import * as express from 'express';
import traineeRouter from './controllers/trainee/index';
import userRouter from './controllers/user/index';

const router: express.Router = express.Router();

router.use('/trainee', traineeRouter);
router.use('/user', userRouter);

export default router;
