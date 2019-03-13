import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleware';
import validationHandler from '../../libs/routes/validationHnadler';
import validations from '../user/validations';
import UserController from './Controller';

const userRouter = express.Router();

const { getMe, post, put, delete: del, login, getAll } = UserController;
const {
    get: validateGet,
    post: validatePost,
    put: validatePut,
    delete: validateDelete,
    login: validateLogin,
} = validations;

userRouter
    .get('/me', authMiddleWare('User', 'read'), validationHandler(validateGet), getMe)
    .get('/', authMiddleWare('User', 'read'), validationHandler(validateGet), getAll)
    .post('/', authMiddleWare('User', 'read'),  validationHandler(validatePost), post)
    .put('/', authMiddleWare('User', 'read'), validationHandler(validatePut), put)
    .delete('/:id', authMiddleWare('User', 'read'), validationHandler(validateDelete), del)
    .post('/login', validationHandler(validateLogin), login);

export default userRouter;
