import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();
const Password = process.env.PASSWORD;

const seed = async () => {
    const result = await repository.countUser();
    if (!result) {
        bcrypt.hash(Password, 10, (error, hash) => {
            repository.create({
                email: 'head.trainer@successive.tech',
                name: 'Head-Trainer',
                password: hash,
                role: 'head-trainer',
            });
            repository.create({
                email: 'trainee@successive.tech',
                name: 'Kunal',
                password: hash,
                role: 'trainee',
            });
        });
    }
};

export default seed;
