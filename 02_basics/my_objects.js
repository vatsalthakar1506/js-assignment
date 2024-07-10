// Object.create



const JsUser = {

    name: "Hitesh",
    "full Name" : "vatzz Thakar",
    age : 18,
    location :"Jaipur",
    email :"vatz@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}



JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting);



