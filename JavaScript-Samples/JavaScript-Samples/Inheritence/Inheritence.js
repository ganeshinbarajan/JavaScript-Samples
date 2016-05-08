var PermananetEmployee = function (salary) {
    this.salary = salary;
}
var emp = new Employee("u419773", "ganesh");
PermananetEmployee.prototype = emp;

PermananetEmployee.prototype.GetCompleteDetails=function()
{
    return this.EmployeeID + ' ' + this.EmployeeName + ' ' + this.salary;
}