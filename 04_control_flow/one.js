// if

// in this condition should be true.
if(true){

}
if(false){
    //this code will not execute
}

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature === 40){
//     console.log("less then 50");
// } else{
//     console.log("temperaure is greater than 50"); 
// }

// comparison <, >, <=, >=, ==, !=, ===(checks type also), !==



// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`)



const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); // we can write code like this but it is not a good practise

// if (balance < 500){
//     console.log("less than 500");
// } else if ( balance < 750){
//     console.log("less than 750");
// } else if( balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2 == 3) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}