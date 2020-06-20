import * as mongoose from 'mongoose';
import seed from './seedData';

class Database {
    public static open = (mongoConfig) => {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(mongoConfig,
                    { useNewUrlParser: true },
                    )
                .then((result) => {
                    seed();
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
