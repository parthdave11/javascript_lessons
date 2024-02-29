// Objects can be declared in two ways one is a litrals way and another is constructur way.
// when we create object using constructur it becomes singleton but when we create using litrals it does not become singleton.


// Object.create  // creating object through constructor

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "parth",
    "full name": "Parth Dave",
    [mySym]: "mykey1",
    age: 23,
    location: "Ahmedabad",
    email: "parth@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "parth@abc.com"
// Object.freeze(JsUser)
JsUser.email = "parth@kls.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());




