import { IConfig } from './config/IConfig';
import * as express from 'express';

class Server {
    public app: express.Express;

    constructor(public config: IConfig) {
        this.app = express();
    }

    public bootstrap() {
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
        const {
            app, config: {Port}
        } = this;
        this.app.use('/health-check', (req, res) => {
            res.json({
                msg: 'I am OKAY'
            });
        });
    }

    public run() {
        const {
            app,
            config: {Port}
        } = this;
        app.listen(Port, (error) => {
           if(error) {
               throw error;
           }
           console.log(`Server running on Port ${Port}`)
        });
    }
}

export default Server;