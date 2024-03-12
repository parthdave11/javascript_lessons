// // let myName = "parth     "

// // console.log(myName.trueLength);


// let myHeros = ["thor", 'spiderman'] // array

// // object
// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }


// // proof the that everything in javascript is a object.
// Object.prototype.parth = function(){
//     console.log(`Parth is legend.`)
// }

// Array.prototype.dave = function(){
//     console.log(`Parth is in array`);
// }


// // myHeros.parth()
// // heroPower.parth()

// myHeros.dave()
// heroPower.dave() // when you insert a method in array then you can not access through object but if you declare the method in object then you can access it in array.



// inheritance

const User = {
    name: 'user1',
    email: 'user1@google.com',
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TASupport = {
    makeAssingment: 'JS assingment',
    fulltime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User // outdataed approch

Object.setPrototypeOf(TeachingSupport, teacher) // modern syntax

// this is called prototypel inheratance means how can you access the properties of others.


let anotherUserName = "Parth            "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

// console.log(anotherUserName);
anotherUserName.trueLength()
"Dave".trueLength() // we can access trueLength function here because we injected in the string directly and here 'this' will be the one which is calling.
"Hello".trueLength()

