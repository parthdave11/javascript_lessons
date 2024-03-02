const userEmail = []

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("Dont have user email");
}


// falsy values: false, 0, -0, bigint 0n, "", null, undefined, NaN
// truthy values: "0", 'false', " ", [], {}, function(){}


// how to check an array
// if (userEmail.length === 0) {
//     console.log("array is empty");
// }


// how to check an empty object
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}


// Nullish Colescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// val1 = null ?? undefined

console.log(val1);



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");