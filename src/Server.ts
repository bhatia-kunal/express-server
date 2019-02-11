import { IConfig } from './config/IConfig';
import * as bodyParser from 'body-parser';
import { notFoundRoutes, errorHandler } from './libs/routes/index';
import * as express from 'express';
import router from './router';
import successHandler from './libs/routes/successHandler';

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
        app.use('/api', router);
        app.use(notFoundRoutes);
        app.use(errorHandler);
        app.use(successHandler);
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