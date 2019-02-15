import * as jwt from 'jsonwebtoken';
import hasPermission from './permissions';

const authMiddleWare = (module, permissionType) => {
    return (req, res, next) => {
        const token = req.header('Authorization');
        require('dotenv').config();
        const user = jwt.verify(token, process.env.KEY, (err, result) => {
            if (err) {
                next({
                    error: 'Unauthorized Access',
                    message: 'Unauthorized user',
                    status: 400,
                });
            }
            return result;
        });
        if (!hasPermission(module, user.role, permissionType)) {
            console.log('--------------', user.role);
            next({
                error: 'Permission Denied',
                message: 'Permission Denied',
                status: 400,
            });
        }
        next();
    };
};

export default authMiddleWare;
