import permission from '../constants';
const hasPermission = (moduleName: string, role: string, permissionType: string):Boolean => {
    if(permission[moduleName]) {
        if(permission[moduleName][permissionType].includes(role) || permission[moduleName].all.includes(role)){
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