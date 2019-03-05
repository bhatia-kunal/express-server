import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Next, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

class UserController {
    public getMe(req: Request, res: Response) {
        try {
            const { result } = req.body;
            res
                .status(200)
                .send(successHandler('Your Data is here', 200, result));
        }
        catch (error) {
            throw error;
        }
    }

    public post(req: Request, res: Response, next: Next) {
        const { email, name, role } = req.body;

        const data = {
            email,
            name,
            role,
        };
        console.log('post data', data);
        const userRepository = new UserRepository();
        userRepository.create(data);
        res
            .status(200)
            .send(successHandler('User created successfully', 200, data));
    }

    public put(req: Request, res: Response) {
        const { dataToUpdate, id } = req.body;
        const data = {
            dataToUpdate,
            originalId: id,
        };
        const userRepository = new UserRepository();
        userRepository.update({originalId: id}, dataToUpdate);
        res
            .status(200)
            .send(successHandler('User updated successfully', 200, data));
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        const userRepository = new UserRepository();
        const result = userRepository.delete(id);
        res
            .status(200)
            .send(successHandler('Trainee deleted successfully', 200, result));
    }

    public async login(req: Request, res: Response, next: Next) {
        try {
            const { email, Password } = req.body;
            const userRepository = new UserRepository();
            const result = await userRepository.findUser({ email });
            const { password } = result;
            bcrypt.compare(Password, password, (error, isMatch) => {
                if(isMatch) {
                    const key = process.env.KEY;
                    const token = jwt.sign(
                        {
                            result,
                        },
                        key,
                        { expiresIn: 15*60 },
                    );
                    res
                        .status(200)
                        .send(successHandler(email, 200, token));
                } else {
                    next('Password incorrect');
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

export default new UserController();
