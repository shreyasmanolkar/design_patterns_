// Visitor Pattern
// it allow us to add or provide new operations or methods to object without actually changing that object it self. the new functioality and logic is kept in the seperate object known as visitor object.

function Employee(name, salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary: function(){
        return this.salary
    },

    setSalary: function(sal){
        this.salary = sal;
    },
    accept: function(visitorFunction){
        visitorFunction(this);
    }
};

/////////////////////////////////////////

const devSage = new Employee("DevSage", 10000);
// console.log(devSage.getSalary());

function ExtraSalary(emp){
    emp.setSalary(emp.getSalary() * 2);
}

devSage.accept(ExtraSalary);

console.log(devSage.getSalary());