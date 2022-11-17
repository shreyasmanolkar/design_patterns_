// design pattern is a general solution to a common software design problems
//  there are 3 main types of design patterns
// 1) creation patterns
// 2) structural patterns
// 3) behavioural patterns

// factory pattern => creation category
// patterns that fall under creation patterns are mainly all about object creation mechanisms that promotes flexibility and reuseability of code especially in situations where you have to create many different types of many different objects

// a factory is just an object that creates or manufactures different object

// factory allows us to handle all of our object creation in centralized location

function Developer(name){
    this.name = name;
    this.type = "Developer";
}

function Tester(name){
    this.name = name;
    this.type = "Tester";
};

//  creating factory with name employee

function EmployeeFactory(){
    this.create = (name, type) => {
        switch(type)
        {
            case 1: 
                return new Developer(name);
            
            case 2:
                return new Tester(name);
        }
    }
};


function say(){
    console.log("Hi, i am " + this.name + " and i am a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("shreyas", 1));
employees.push(employeeFactory.create("omkar", 2));

employees.forEach(emp => {
    say.call(emp)
})