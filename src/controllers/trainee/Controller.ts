import { Next, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';

class Trainee {
    public get(req: Request, res: Response) {
        const data = [
            {
                id: 1,
                name: 'trainee1',
            },
            {
                id: 2,
                name: 'trainee2',
            },
        ];
        res
            .status(200)
            .send(successHandler('Trainees are here', 200, data));
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
            .send(successHandler('Trainee deleted successfully', 200, 'Data cannot be retrieve now'));
    }
}

export default new Trainee();
