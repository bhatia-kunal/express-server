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

    public countUser() {
        return this.Model.countDocuments();
    }

    public getUser(data) {
        return this.Model.findOne(data, (error, result) => {
            if(error) 
                return error;
            else
                return result;
        });
    }
}

export default UserRepository;
