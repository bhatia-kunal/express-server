import * as mongoose from "mongoose";

class Database {
    static open = (mongoConfig) => {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(mongoConfig)
                .then(result => resolve(result))
                .catch(err => reject(err));
        });
    }

    public disconnect = () => {
        mongoose.disconnect();
    }
}

export default Database;