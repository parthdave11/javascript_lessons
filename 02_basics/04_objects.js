// const tinderuser = new Object() // declaring it using the constructor. // only difference is it is singleton object,
const tinderuser = {}  // it is not a singleton object

tinderuser.id = "123abc"
tinderuser.name = "Parth"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "parth@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Parth",
            lastname: "Dave"
        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2) // merges all objects in one.

const obj3 = {...obj1, ...obj2} // merging object using spread operator.

// console.log(obj3);


const user = [
    {
    id:1,
    email:"parth@abc.com"
},
{
    id:1,
    email:"parth@abc.com"
},
{
    id:1,
    email:"parth@abc.com"
},
{
    id:1,
    email:"parth@abc.com"
}
]

// console.log(user[1].email);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLoggedIn"));
// console.log(tinderuser.hasOwnProperty("isLogedIn"));



const course = {
    coursename : "javascript lessons",
    price: 999,
    courseInstructor: "Parth"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "parth",
//     "coursename": "javascript lessons",
//     "price": "free"
// }
