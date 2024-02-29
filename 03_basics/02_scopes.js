// var c = 300

// curly braces{} are basically scope.
let a = 300
if (true) {
    // this is blocked scope.

    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
}

// this is global scope.

// console.log("OUTER: ",a); // does not come out of if scope
// console.log(b); // does not come out of if scope

// console.log(c);

function one(){
    const username = "parth"

    function two(){
        const website = "github"
        
        console.log(username);
    }

    // console.log(website); // cannot be accessed

    two()
}

// one()

if (true) {
    const username = "parth"

    if (username === "parth") {
        const website = "github"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

// console.log(addone(5)); // no error

function addone(num){
    return num +1
}


// console.log(addTwo(5)) // error
const addTwo = function(num){
    return num + 2
}
