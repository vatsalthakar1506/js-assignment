const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)


});
promiseOne.then(function(){
    console.log("Promised Consumed");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
});



const promishedThree = new Promise(function(resolve,reject){
    setTimeout(function(){},1000)
    resolve({username:"vatsal",email:"vatsal@gmail.com"})
});
promishedThree.then(function(user){
    console.log(user)
});


const promiseFour = new Promise(function(resolve , reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"vatzz", password:"123"})
        }
        else{
            reject("Error : Something Went Wrong");
        }

    },1000)
});

promiseFour.then((user)=>{})