import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permissions';

const authMiddleWare = (module, permissionType) => {
    return (req, res, next) => {
        const token = req.header('Authorization');
        require('dotenv').config();
        const user = jwt.verify(token, process.env.KEY, (error, result) => {
            if (error) {
                next({
                    error: 'Unauthorized Access',
                    message: 'Unauthorized user',
                    status: 400,
                });
            }
            return result;
        });

        const repository = new UserRepository();
        req.body.data = user.result;
        const { originalId: id } = user.result;
        repository.findUser({originalId: id})
            .then((result) => {
                if (!result) {
                    next({
                        error: 'Unauthorized Access',
                        message: 'User not found',
                        status: 400,
                    });
                }
                req.body.result = result;
                if (result && !hasPermission(module, result.role, permissionType)) {
                    next({
                        error: 'Permission Denied',
                        message: 'Permission Denied',
                        status: 400,
                    });
                }
                next();
            });
    };
};

export default authMiddleWare;
