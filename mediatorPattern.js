// Mediator Pattern
// it allows us to define an object known as the mediator that encapsulates and controls how some sets of objects interact with each other

function Member(name){
    this.name = name;
    this.chatroom = null;
};

Member.prototype = {
    send: function(message, toMember){
        this.chatroom.send(message, this, toMember);
    },
    receive: function(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
};

function chatroom(){
    this.members = {}
}

chatroom.prototype = {
    addMember: function(member){
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send: function(message, fromMember, toMember){
        toMember.receive(message, fromMember);
    }
};

const chat = new chatroom();

const bob = new Member("Bob");
const john = new Member("John");
const tim = new Member("tim");

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hey, john", john);
john.send("whats up's bob", bob);
tim.send("john, are you ok?", john);