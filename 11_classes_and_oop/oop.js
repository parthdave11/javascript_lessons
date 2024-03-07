// object literal
const user = {
    username: "parth",
    logincount: 8,
    signedin: true,

    getUserDetails: function(){
        // console.log(`uaername: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())

// console.log(this);


// 'new' keyword is a constructor function.
// const promiseOne = new Promise()
// const date = new Date()


// left side 'username' is variable and right side 'username' is the argument which you passed.
function User(username, logincount, isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    this.greetings = function(){
        console.log(`Welcom ${this.username}`);
    }

    return this
}

// constructor function gives you the new instance or we can say it gives us the copy so other function or the original function are not affected by the change.
const userOne = new User("Parth", 12, true)
const userTwo = new User("Dave", 11, false)
// console.log(userOne);
// console.log(userTwo.greetings());
console.log(userOne.constructor);





// Whenever we use new keyword:
// step1: empty object is created which is called the instance.
// step2: constructor function is called because of the new keyword. what it does is that it packs all the arguments and gives it to you.
// step3: arguments gets injected in 'this keyword'
// step4: you get that in the function like we got in userOne and userTwo function.