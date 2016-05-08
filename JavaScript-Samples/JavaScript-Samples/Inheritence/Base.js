var Employee=function(EmpID,EmpName)
{
    this.EmployeeID = EmpID;
    this.EmployeeName = EmpName;
}
Employee.prototype.GetCompleteDetails = function () {
    return this.EmployeeID+' '+this.EmployeeName;
}





