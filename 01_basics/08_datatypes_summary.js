// datatypes are of two types based on how data is put inside memory and how it is accessed.
// premetive and non-premetive

// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);




// Reference type (Non Primitive)

// Array, Objects, Functions 
// typeof function will retur object in all the referance type and in incase of functions it is called object function.

const heros = ["Shaktiman", "naagraj", "doga"]

let myobj = {
    name:"parth",
    age:22,
}

const myfunction = function(){
    console.log("hello world");
}

// console.log(typeof myfunction);


// ******************************* Memory *************************

// stack(Primitive), heap(Non-Primitive)

// when stack memory is used you get the copy of the variable you created.
// when heap memory is used you get the reference of the original value.


let myName = "Parth Dave"

let anothername = myName

anothername = "Dave"
console.log(anothername);
console.log(myName);

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1

user2.email = "parth@gmail.com"

console.log(user1.email);
console.log(user2.email);