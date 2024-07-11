function addTwoNumbers(number1, number2){
   
    return number1 + number2
}


const result = addTwoNumbers(44,"44")


// console.log(result);


function claculateCartPrice(...num1){
    return num1 
}

// console.log(claculateCartPrice(200,400,500));


const user = {
        username: "vatzz",
        prices : 199
}


function  handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)



const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[1]
}



// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([55, 44, 99, 302]));
