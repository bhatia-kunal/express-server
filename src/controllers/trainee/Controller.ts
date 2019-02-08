import { Request, Response, Next } from 'express';
import successHandler from '../../libs/routes/successHandler';

class Trainee {
    public get(req: Request, res: Response) {
        const data = [
            {
                name: "trainee1",
                Id: 1
            },
            {
                name: "trainee2",
                Id: 2
            }
        ];
        res
            .status(200)
            .send(successHandler("Trainees are here", 200, data));
    }

    public post(req: Request, res: Response) {
        const { name, id } = req.body;

        const data = [{
            name,
            id
        }];
        res
            .status(200)
            .send(successHandler("Trainee posted successfully", 200, data));
    }

    public put(req: Request, res: Response) {
        const { dataToUpdate, id } = req.body;
        const data = [{
            dataToUpdate: dataToUpdate,
            Id: id
        }];
        res
            .status(200)
            .send(successHandler("Trainee updated", 200, data));
    }

    public delete(req: Request, res: Response) {
        res
            .status(200)
            .send(successHandler("Trainee deleted successfully", 200, null));
    }
}

export default new Trainee();