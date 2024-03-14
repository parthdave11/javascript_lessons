class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const parth = new User('Parth')

// console.log(parth.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId()); // static key word prevents method form accessing from child class or any object.