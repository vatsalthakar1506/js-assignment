// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Vatzzz"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularuser = {
    email : "some@gmail.com",
    fullname : {

        userfullname :{
            firstname : "vatsal",
            lastname: "thakar"
        }
    }
}

// console.log(regularuser.fullname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2 )

// console.log(obj3);


// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser.hasOwnProperty("isLogged")));



const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "vatsal--thakar"
}

// course.courseInstructor


const {courseInstructor : instructor} = course

console.log(instructor);

    
