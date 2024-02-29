const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros); // it will not merge rather it will take the whole arry as a value.
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc)
// console.log(allheros);

const allHeros = [...marvel_heros, ...dc] // spread operator => it will merge the 2 arrays just like concate.
// console.log(allHeros); 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // converts array inside array into one array.
// console.log(real_another_array);


console.log(Array.isArray("Parth")); // tells you if it is array or not.
console.log(Array.from("Parth")); // converts it to array.
console.log(Array.from({name: "parth",})); // interesting (you have to specify which part of the object(keys or values) you want it to be array). 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // returns a new array with the set of elements.

