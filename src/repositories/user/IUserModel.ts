import mongoose from 'mongoose';

interface IUserModel extends mongoose.Document {
    email: string;
    id: string;
    name: string;
}

export default IUserModel;
