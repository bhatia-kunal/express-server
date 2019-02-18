import mongoose from 'mongoose';

interface IUserModel extends mongoose.Document {
    email: string;
    id: string;
    name: string;
    role: string;
}

export default IUserModel;
