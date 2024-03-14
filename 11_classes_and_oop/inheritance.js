class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)

        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const parth = new Teacher('Parth', 'abc@d.com', 'abc123')

parth.addCourse()

const dave = new User('Dave')

dave.logMe()

parth.logMe()

console.log(parth instanceof Teacher);
console.log(parth instanceof User);
