import versionableSchema from '../versionable/VersionableSchema';

class UserSchema extends versionableSchema {
    constructor(option: any) {
        const data = {
            _id: String,
            email: String,
            name: String,
            password: String,
            role: String,
        };
        super(data, option);
    }
}

export default UserSchema;
