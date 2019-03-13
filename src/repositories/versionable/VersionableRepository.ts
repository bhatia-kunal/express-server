import * as mongoose from 'mongoose';
export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private versionableModel: M;

    constructor(Model) {
        this.versionableModel = Model;
    }

    public findUser(data: any) {
        console.log(data);
        return this.versionableModel.findOne({...data, deletedAt: {$exists: false}}).lean();
    }

    public async getAll(data, skip, limit) {
        const foundData = await this.versionableModel.find({...data, deletedAt: {$exists: false}}, undefined, {
            limit: Number(limit),
            skip: Number(skip),
        });
        const userCount = await this.countUser();
        const result = {userCount, ...foundData};
        if (!result) {
            throw {
                error: 'No Data Found',
                message: 'No data present in DB',
                status: 400,
            };
        }
        return result;
    }

    public countUser() {
        return this.versionableModel.countDocuments();
    }

    public genericCreate(data: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        return this.versionableModel.create({ ...data, _id: id, originalId: id });
    }

    public async genericDelete(data: any) {
        console.log('Delete', data);
        const result = this.versionableModel.findOneAndUpdate(
            {originalId: data.id, deletedAt: {$exists: false}},
            {$set: { deletedAt: Date.now() }},
            );
        return result;
    }

    public async genericUpdate(data: any, updateData: any) {
        const { originalId } = data;
        const foundData = await this.versionableModel.findOne({ originalId, deletedAt: { $exists: false } })
        .lean();
        const previousId = foundData._id;
        delete foundData._id;
        const dataToUpdate = {...foundData, ...updateData};
        const newId = VersionableRepository.generateObjectId();
        const updatedDoc = await this.versionableModel.create({...dataToUpdate, _id: newId, createdAt: Date.now()});
        await this.versionableModel.findOneAndUpdate(
            {_id: previousId, deletedAt: {$exists: false}},
            {$set: { deletedAt: Date.now() }},
            {new: true},
        );
        return updatedDoc;
    }
}
