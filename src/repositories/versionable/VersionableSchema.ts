import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(option: any, collections: any) {
        const versionableSchema = Object.assign({
            createdAt: {
                default: Date.now(),
                required: true,
                type: Date,
            },
            deletedAt: {
                default: Date.now(),
                required: false,
                type: Date,
            },
            originalId: {
                required: true,
                type: String,
            },
        }, option);
        super(versionableSchema, option);
    }
}

export default VersionableSchema;
