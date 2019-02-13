import * as mongoose from 'mongoose';
import { deleteData, seed, UpdateData } from './seedData';

class Database {
    public static open = (mongoConfig) => {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(mongoConfig,
                    { useNewUrlParser: true },
                    )
                .then((result) => {
                    seed();
                    UpdateData();
                    deleteData();
                    resolve(result);
                })
                .catch((err) => reject(err));
        });
    }

    public static disconnect = () => {
        mongoose.disconnect();
    }
}

export default Database;
