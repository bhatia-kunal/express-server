import { IConfig } from './config/IConfig';
import * as bodyParser from 'body-parser';
import notFoundRoutes from './libs/routes/notFoundRoutes';
import errorHandler from './libs/routes/errorHandler';
import * as express from 'express';

class Server {
    public app: express.Express;

    constructor(public config: IConfig) {
        this.app = express();
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json(true));
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
        app.use(notFoundRoutes);
        app.use(errorHandler);
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