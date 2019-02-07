import permissions from '../constants';
const hasPermission = (moduleName: string, role: string, permissionType: string):Boolean => {
    if(permissions[moduleName]) {
        if(permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role)){
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