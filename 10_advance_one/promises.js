// Promise is a object representing eventual completion.
// Promise takes callback means it takes function.

const promisOne = new Promise(function(resolve, reject){
    // Do an async task, eg. DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    },1000)
})

// .then is directly releted to resolve
promisOne.then(function(){
    console.log("promise consumed");
})


// another way of writing a promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("async2 resolved");
})


const promiseTree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "parth", email: "abc@d.com"})
    },1000)
})

promiseTree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Parth", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log((user));
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(() => {
    console.log("The Promise is either resolved or rejected");
})





const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()


// Using fetch with then and catch.

fetch('https://api.github.com/users/parthdave11')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})


console.log("")
console.log("BREAK")
console.log("")



// Using fetch with async await.

async function getllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/parthdave11')
        const data = await response.json()
        console.log('async=========>',data);

    } catch (error) {
        console.log("E: ",error)        
    }
}

getllUsers()












