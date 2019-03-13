import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();

const configuration: IConfig = Object.freeze ({
    MONGO_URL: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV,
    Password: process.env.PASSWORD,
    Port: process.env.PORT,
});

export default configuration;
