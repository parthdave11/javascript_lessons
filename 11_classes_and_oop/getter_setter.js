// when you dont want to give the access of a particular property to all the objects or instance of the class. 

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    // when you define getter you have to set setter


    // email field getters and setters.
    get email(){
        return `${this._email} (getters and setters working)`
    }
    set email(value){
        this._email = value
    }



    // password field getters and setters.
    get password(){
        return `${this._password.toUpperCase()} (getters and setters working and converted password to uppercase)`
    }
    set password(value){
        this._password = value
    }

}

const parth = new User("parth@e.com", 'abc123')
console.log(parth.password);
console.log(parth.email);