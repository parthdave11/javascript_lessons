const accountId = 144553
let accountEmail = "parth@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState // undefined

// accountId = 2 not allowed

accountEmail = "hello@gmail,com"
accountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])