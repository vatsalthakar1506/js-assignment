
//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "vatzdotcom"
let anothername = myYoutubeName
anothername = "othernamedotcom"

console.log(anothername);
console.log(myYoutubeName);



let userOne = {
    email: "user@google.com",
    upi  :"user@ybl",
}


let userTwo = userOne

userTwo['email'] = "HEYYY@google.com"

console.log(userTwo);
console.log(userOne);