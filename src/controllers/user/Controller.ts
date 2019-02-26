import { Next, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';
import versionableRepository from '../../repositories/versionable/VersionableRepository';

class UserController {
    public get(req: Request, res: Response) {
        try {
            const { result } = req.body;
            console.log('Data of particular id', result);
            res
                .status(200)
                .send(successHandler('Trainees are here', 200, result));
        }
        catch(error) {
            console.log(error);
        }
    }

    public post(req: Request, res: Response, next: Next) {
        const { email, name, Id, role } = req.body;

        const data = {
            email,
            Id,
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
            originalId: id,
            dataToUpdate,
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
        userRepository.delete({_id: id});
        const data = {
            Id: id,
        };
        res
            .status(200)
            .send(successHandler('Trainee deleted successfully', 200, data));
    }
}

export default new UserController();
