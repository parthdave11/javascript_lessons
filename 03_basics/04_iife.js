// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }

// chai()


//we use IIFE to prevent our function from global scope pollution.

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})(); // while using IIFE you have to use semicolan.

( (name) =>{
    console.log(`DB Connected two ${name}`);
} )('parth');