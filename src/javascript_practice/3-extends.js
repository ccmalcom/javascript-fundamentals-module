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

class TrialUser extends User { //TrialUser becomes a subclass/child of User, inheriting all of its functions and properties
    trialEnding(){ //this method is something User does not have. Child classes can have their own seperate methods
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    }
}

// instance of user class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
    banned(){
        console.log(`${this.name} did not pass the vibe check. You have been banned`);
    }
}

let bannedUser = new BannedUser('Jane');
bannedUser.banned();
