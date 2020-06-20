import * as mongoose from 'mongoose';

interface IUserModel extends mongoose.Document {
    originalId: string;
    createdAt: Date;
}

export default IUserModel;
