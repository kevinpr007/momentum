/*
 sysAdmin:    This is the administrator of the main application. This role is only for the owners of Style Point.
 Admin:         This is the administrator of one store/location inside the framework.
 Manager:       Each store/location has a main manager to manage all tasks related to their employees.
 Employee:      A member of the manager's crew. They will be using the application to manage a normal
                day schedule in the store.
 User:          They will be the clients in the system. User role will be the role with the least privileges in the system.
 */
module.exports = () => {
  return ['sysAdmin', 'Admin', 'Manager', 'Employee', 'User']
}
