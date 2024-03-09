// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Nagraj"]
const myarr2 = new Array(1,2,3,4)

// console.log(myArr[0])

// When you copy arry it creates shallow copies and points it to the same referance point.

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)


// slice , splice  
// Difference between slice and splice is splice manipulates the original arry and slice does not manipulates the original arry.

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log("B ",myArr)
console.log(myn1)

console.log()
console.log()

const myn2 = myArr.splice(1, 3)
console.log("C ",myArr)
console.log(myn2)