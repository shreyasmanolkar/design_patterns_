const items = [1, "shreyas", false, 1.32];

function Itterator(items){
    this.items = items;
    this.index = 0;
}

Itterator.prototype = {
    hasNext: function(){
        return this.index < this.items.length
    },

    next: function(){
        return this.items[this.index++];
    }
}; 

const iter = new Itterator(items);
while(iter.hasNext())
    console.log(iter.next());

// console.log(iter.hasNext());
// console.log(iter.next());
// console.log(iter.next());