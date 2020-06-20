import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleware';
import validationHandler from '../../libs/routes/validationHnadler';
import validations from '../user/validations';
import UserController from './Controller';

const userRouter = express.Router();

const { getMe, post, put, delete: del } = UserController;
const {
    get: validateGet,
    post: validatePost,
    put: validatePut,
    delete: validateDelete,
} = validations;

userRouter
    .get('/me', authMiddleWare('User', 'read'), validationHandler(validateGet), getMe)
    .post('/', authMiddleWare('User', 'read'),  validationHandler(validatePost), post)
    .put('/', authMiddleWare('User', 'read'), validationHandler(validatePut), put)
    .delete('/:id', authMiddleWare('User', 'read'), validationHandler(validateDelete), del);

export default userRouter;
