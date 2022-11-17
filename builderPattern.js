//  builder pattern
//  is a creation pattern that is used to construct complex objects. it allows us to create complex objects piece bu piece by creating new instance of some object with some base line properties and then from there we can add properties to that object one by one as needed. 
//  the goal of the builder pattern is to seperate an object construction from it's representation.

function Person(name, weight, height, gender){
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
}

const shreyas = new Person("shreyas", 84, 5.7, "male");

// implementing builder pattern

function PersonBuilder(name, gender){
    this.name = name;
    this.gender = gender;

    this.setWeight = function(weight){
        this.weight = weight;
        return this;
    }

    this.setHeight = function(height){
        this.height = height;
        return this;
    }

    this.build = function(){
        return new Person(this.name, this.weight, this.height, this.gender);
    }
};

const omkar = new PersonBuilder("omkar", "male").setWeight(80).setHeight(5.8).build();

console.log(omkar);
