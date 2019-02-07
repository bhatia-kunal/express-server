"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = 'getUsers';
const headTrainer = 'head-trainer';
const trainer = "trainer";
const trainee = "trainee";
const permissions = {
    getUsers: {
        all: [headTrainer],
        read: [trainee, trainer],
        write: [trainer],
        delete: [],
    }
};
exports.default = permissions;
//# sourceMappingURL=constants.js.map