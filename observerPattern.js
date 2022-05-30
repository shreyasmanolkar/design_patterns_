// observer pattern
// observer pattern is a design pattern in which you define one to many dependency relationship from one object know as the subject to many other objects known as the observers.
// this observers can be jusy functions which watch the subject and wait for some trigger or signal for subject before they run

function Subject(){
    this.observers = []; //array of observer fucntions
};

Subject.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
    },
    unsubscribe: function(fnToRemove){
        this.observers = this.observers.filter(fn => {
            if(fn != fnToRemove) return fn
        } )
    },
    fire: function(){
        this.observers.forEach( fn => {
            fn.call();
        })
    }
};

const subject = new Subject();

function Observer1(){
    console.log("Observer 1 Firing")
}

function Observer2(){
    console.log("Observer 2 Firing")
}

function Observer3(){
    console.log("Observer 3 Firing")
}

subject.subscribe(Observer1);
subject.subscribe(Observer3);

subject.fire();