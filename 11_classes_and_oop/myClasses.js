// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const parth = new User('Parth', "parth@gmail.com", "123")

// console.log(parth.encryptPassword());
// console.log(parth.changeUserName());


// Behind the scene.

function User(username, password, email){
    this.username = username
    this.password = password
    this.email = email
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}

User.prototype.changeUserName = function(){
    return`${this.username.toUpperCase()}`
}


const dave = new User('Parth', "parth@gmail.com", "123")

console.log(dave.encryptPassword());
console.log(dave.changeUserName());
