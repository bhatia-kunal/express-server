import diamond from './patterns/diamond';
import equilateralTriangle from './patterns/equilateralTriangle'
import hasPermission from './utils/permissions';
import validateUsers from './utils/validation';

const users = [
    {
        traineeEmail : 'trainee1@successive.tech',
        reviewerEmail : 'reviewer1@successive.tch'
    },
    {
        traineeEmail : 'trainee2@successive.tech',
        reviewerEmail : 'reviewer2@successive.tch'
    }
];

validateUsers(users);
console.log();
hasPermission('getUsers', 'trainee', 'read');
console.log();
diamond(5);
console.log();
equilateralTriangle(5);

