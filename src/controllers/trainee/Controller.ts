import { Request, Response, Next } from 'express';

class Trainee {
    public get(req: Request, res: Response) {
        res.send("<h1>Hello</h1>");
    }

    public post(req: Request, res: Response) {
        const name = req.body.name;
        res.send("trainee : " + name);
    }

    public put(req: Request, res: Response) {
        const name = req.body.name;
        res.send("Trainee updated" + name);
    }

    public delete(req: Request, res: Response) {
        res.send("Trainee deleted successfully")
    }
}

export default new Trainee();