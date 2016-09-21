/*
 SuperAdmin:    This is the administrator of the main application. This user should be use by the owners of Style Point.
 Admin:         This is the administrator of one store/location inside the framework.
 Manager:       Each store/location have a main manager to manage all task related with their employees.
 Employee:      They are the people belong to the manager's crew. They will be using the application to manage a normal
                day schedules in the store.
 User:          They will be the clients in the system. User role will be the lowest role in the system.
 */
module.exports = () => {
  return ['SuperAdmin', 'Admin', 'Manager', 'Employee', 'User']
}
