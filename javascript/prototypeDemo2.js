class Employee {
    constructor(eid, ename) {
        this.id = eid;
        this.ename = ename;
    }
}

Employee.prototype.salary = 5000;

const emp = new Employee(10, 'david');
emp.salary = 3000

// emp.ename,emp.id,emp.salary //as we can see we can asscess the salary property aswell 
console.log(emp.ename, emp.id, emp.salary)

const emp1 = new Employee(11,'jonh')
console.log(emp1.ename,emp1.id,emp1.salary)
