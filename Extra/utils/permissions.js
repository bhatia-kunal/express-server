import permissions from '../constants';
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
// hasPermission('getUsers', 'trainee', 'read');

export default hasPermission;