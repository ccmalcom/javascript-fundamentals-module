class User {
    constructor(name){
        this.name = name;
        this.type = 'Trial User'
    };

    // method 1
    greet(){
        console.log(`Welcome back, ${this.name}`);
    };

    // method 2
    status(){
        console.log(`Current status: ${this.type}`);
    };
};

// instance of the class/new object
let anonDude = new User('Anonymous Dude');

// we can now use the new instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

// Another instance
let anonLady = new User('Anonymous Lady');
anonLady.greet();
anonLady.status();

// Another instance
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

// 2 more
let chase = new User('Chase');
let karl = new User('Karl Marx')
chase.greet();
chase.status();

karl.greet();
karl.status();