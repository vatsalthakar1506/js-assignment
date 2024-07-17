



function User(username, loginCount, isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const userOne = new User("vatzzz", 12,true);
const userTwo = new User("dinesj", 18,false)

console.log(userOne);
console.log(userTwo);