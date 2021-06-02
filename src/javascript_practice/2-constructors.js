// Constructors help create and initialize an object created from a class. It works in tandem with the new keyword

class User { //we name the class
    constructor(first, last, e){ //call constructor function and create params (the values we want passed in and stored in the object)
        this.f = first;
        this.l = last;
        this.email = e;
        //on the left side, we have the actual keys of the object being created. The left side stores the incoming arguments from the newly created object as the value for 'this' specific object being created.
    }
}

let userOne = new User('Paul', "O'Connor", 'poconnor@elevenfifty.org');
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class Player {
    constructor(name, number, points){
        this.name = name;
        this.number = number;
        this.points = points;
    }
}

let playerOne = new Player('Chase', 1, 45)
console.log(playerOne);