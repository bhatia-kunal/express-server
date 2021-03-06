import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleware';
import UserController from './Controller';
import validations from '../user/validations';
import validationHandler from '../../libs/routes/validationHnadler';

const userRouter = express.Router();

const { get, post, put, delete: del } = UserController;
const {
    get: validateGet,
    post: validatePost,
    put: validatePut,
    delete: validateDelete,
} = validations;

userRouter
    .get('/', validationHandler(validateGet), authMiddleWare('User', 'read'), get)
    .post('/', validationHandler(validatePost), post)
    .put('/', validationHandler(validatePut), put)
    .delete('/', validationHandler(validateDelete), del);

export default userRouter;
