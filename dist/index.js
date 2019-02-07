"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diamond_1 = require("./patterns/diamond");
const equilateralTriangle_1 = require("./patterns/equilateralTriangle");
const permissions_1 = require("./utils/permissions");
const validation_1 = require("./utils/validation");
const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tch'
    },
    {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer2@successive.tch'
    }
];
validation_1.default(users);
console.log();
permissions_1.default('getUsers', 'trainee', 'read');
console.log();
diamond_1.default(5);
console.log();
equilateralTriangle_1.default(5);
//# sourceMappingURL=index.js.map