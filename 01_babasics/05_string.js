const name = "Vatzzz"
const repoCount = 50 

// console.log(name + repoCount + " Value");



// console.log(`Hello my Name is ${name} and my repo COunt is ${repoCount}`);

const gameName = new String("vatzzz-thakar")

// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('z'));

const newString =   gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(0,4)

console.log(anotherString);


 const newStringOne = "   hitesh    "

 console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhry"

const testUrl  = url.replace("%20", "-")

console.log(testUrl);

const checkString = url.includes("hitesh")

console.log(checkString);