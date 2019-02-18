import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
    constructor(option: any) {
        const data = {
            _id: String,
            email: String,
            name: String,
            role: String,
        };
        super(data, option);
    }
}

export default UserSchema;
