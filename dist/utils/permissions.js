"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const hasPermission = (moduleName, role, permissionType) => {
    if (constants_1.default[moduleName]) {
        if (constants_1.default[moduleName][permissionType].includes(role) || constants_1.default[moduleName].all.includes(role)) {
            console.log("Allowed");
            return true;
        }
        else {
            console.log("Permission Denied");
            return false;
        }
    }
};
// hasPermission('getUsers', 'trainee', 'read');
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map