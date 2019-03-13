import * as bcrypt from 'bcrypt';
import { Next, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

class UserController {
    public getMe(req: Request, res: Response, next: Next) {
        try {
            const { result } = req.body;
            res
                .status(200)
                .send(successHandler('Your Data is here', 200, result));
        }
        catch (error) {
            next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: Next) {
        try {
            const { skip, limit } = req.query;
            const userRepository = new UserRepository();
            const result = await userRepository.getAll({role: 'trainee'}, skip, limit);
            res
                .status(200)
                .send(successHandler('Trainees fetched successfully', 200, result));
        }
        catch (error) {
            next(error);
        }
    }

    public post(req: Request, res: Response, next: Next) {
        try {
            const {
            email,
            name,
            password,
            role,
            } = req.body;
            const data = {
                email,
                name,
                password,
                role,
            };
            console.log('post data', data);
            const userRepository = new UserRepository();
            userRepository.create(data);
            res
                .status(200)
                .send(successHandler('User created successfully', 200, data));
        }
        catch (error) {
            next(error);
        }
    }

    public async put(req: Request, res: Response, next: Next) {
        try {
            const { dataToUpdate, id } = req.body;
            const userRepository = new UserRepository();
            const response = await userRepository.update({originalId: id}, dataToUpdate);
            res
                .status(200)
                .send(successHandler('User updated successfully', 200, response));
        }
        catch (error) {
            next(error);
        }
    }

    public delete(req: Request, res: Response, next: Next) {
        try {
            const { id } = req.params;
            const userRepository = new UserRepository();
            const result = userRepository.delete(id);
            res
                .status(200)
                .send(successHandler('Trainee deleted successfully', 200, result));
        }
        catch (error) {
            next(error);
        }
    }

    public async login(req: Request, res: Response, next: Next) {
        try {
            const {email, Password} = req.body;
            const userRepository = new UserRepository();
            const result = await userRepository.findUser({email});
            const {password} = result;
            console.log(result);
            bcrypt.compare(Password, password, (error, isMatch) => {
                if (isMatch) {
                    const key = process.env.KEY;
                    const token = jwt.sign(
                        {
                            result,
                        },
                        key,
                        { expiresIn: 15 * 60 },
                    );
                    res
                        .status(200)
                        .send(successHandler(email, 200, token));
                } else {
                    next('Password incorrect');
                }
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();
