import mongoose from 'mongoose';
import IversionableModel from '../versionable/IVersionableModel';

interface IUserModel extends IversionableModel {
    email: string;
    id: string;
    name: string;
    role: string;
}

export default IUserModel;
