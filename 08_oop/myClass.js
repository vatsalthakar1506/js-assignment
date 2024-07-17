

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

     changeUserName() {
        return `${this.username.toUpperCase()}`
     }

    static createId(){
        return `123`;
     }

}

const hitesh = new User("hitesh");

console.log(hitesh.createId());


// const chai = new User("chai", "chai@gmail.com", "123");
 
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());