import { Next, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';

class UserController {
    public get(req: Request, res: Response) {
       const { result } = req.body;
       console.log('Data of particular id', result);
       res
        .status(200)
        .send(successHandler('Trainees are here', 200, result));
    }

    public post(req: Request, res: Response) {
        const { name, id } = req.body;

        const data = [{
            id,
            name,
        }];
        res
            .status(200)
            .send(successHandler('Trainee posted successfully', 200, data));
    }

    public put(req: Request, res: Response) {
        const { dataToUpdate, id } = req.body;
        const data = [{
            Id: id,
            dataToUpdate,
        }];
        res
            .status(200)
            .send(successHandler('Trainee updated', 200, data));
    }

    public delete(req: Request, res: Response) {
        res
            .status(200)
            .send(successHandler('Trainee deleted successfully', 200, 'Data can not be retrieved.'));
    }
}

export default new UserController();
