import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { UserModel, userSchema } from './UserModel';

class UserRepository {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private Model: mongoose.Model<IUserModel>;

    constructor() {
        this.Model = UserModel;
    }

    public create(data: any): Promise<IUserModel> {
        return this.Model.create({...data, _id: UserRepository.generateObjectId()});
    }

    public delete() {
        return this.Model.deleteMany({ name: ''});
    }

    public update() {
        return this.Model.updateMany({ name: 'xyzxyz' }, { $set: {name: 'abcabc' }});
    }
}

export default UserRepository;
