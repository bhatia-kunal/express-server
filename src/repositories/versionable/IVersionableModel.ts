import * as mongoose from 'mongoose';

interface IUserModel extends mongoose.Document {
    originalId: string;
    deletedAt: Date;
    createdAt: Date;
}

export default IUserModel;
