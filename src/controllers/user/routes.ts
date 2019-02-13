import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleware';
import UserController from './Controller';

const userRouter = express.Router();

userRouter.get('/', UserController.get);
userRouter.post('/', UserController.post);
userRouter.put('/', UserController.put);
userRouter.delete('/', UserController.delete);

export default userRouter;
