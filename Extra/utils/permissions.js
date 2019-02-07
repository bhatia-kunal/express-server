const permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
};

const hasPermission = (moduleName, role, permissionType) => {
    if(permissions[moduleName]) {
        if(permissions[moduleName][permissionType].includes(role) || permissions[moduleName]['all'].includes(role)){
            console.log("Allowed");
            return true;
        } else {
            console.log("Permission Denied");
            return false;
        }
    }
}

hasPermission('getUsers', 'trainee', 'read');