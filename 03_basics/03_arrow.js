const user = {
    username: "ufc",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`);
        
        // this keyword will give you the current context.
        console.log(this);
        
    }

}


// user.welcomeMessage()
// user.username = "one championship"
// user.welcomeMessage()


//global object in browser is called window object.


// when we are in the node environement then our this will be empty. 
// console.log(this);




// function chai(){
//     let username = "parth"
//     console.log(this.username); // will give you undefined.
// }

// chai()


// const chai = function(){
//     let username = "parth"
//     console.log(this.username); // will give you undefined.
// }

// chai()

const chai = () => {
    let username = "parth"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return  num1 + num2 // explicit return (when we explicitly apply the return keyword)
// }

// when we write curly brackets {} then we have to write return keyword.


// const addTwo = (num1, num2) =>  num1 + num2 // implicet return (dont need to write the return keyword)

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ( {username : "parth"} ) // returning object


// console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]

// myArray.forEach()