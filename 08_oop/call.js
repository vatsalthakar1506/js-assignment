
function SetUserName(username){
    this.username = username
}

function createUser(username, email, password){

    SetUserName.call(this,username);
    this.email = email; 
    this.password = password
}

const test = new createUser("vatzz","vatz@gmail.com","123");

console.log(test);