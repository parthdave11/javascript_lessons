
function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("h");

}

// sayMyName()

// what we write in function defination it is called parameters.
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5) // arguments.

// console.log(result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Parth"))
// console.log(loginUserMessage("Parth"))

// ... is the rest operator
function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "ufc",
    prices: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username:"one championship",
    price:34
})

const mynewarray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,500,1000]));
