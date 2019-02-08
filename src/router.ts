import * as express from 'express';
import traineeRouter from './controllers/trainee/routes'

const router: express.Router = express.Router();

router.use('/trainee', traineeRouter);

export default router;
