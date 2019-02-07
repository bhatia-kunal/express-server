"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const validateUsers = (...arr) => {
    let valid = [{ count: 0 }], inValid = [{ count: 0 }];
    arr.forEach(function (item, index, array) {
        let { traineeEmail, reviewerEmail } = item;
        if (helper_1.default(traineeEmail) && helper_1.default(reviewerEmail)) {
            valid.push(item);
            valid[0].count++;
        }
        else {
            inValid.push(item);
            inValid[0].count++;
        }
    });
    console.log("valid : " + JSON.stringify(valid, null, 2));
    console.log("invalid : " + JSON.stringify(inValid, null, 2));
};
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map