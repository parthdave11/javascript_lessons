const name = "Parth"
const repoCount = 50

// console.log(name + repoCount + " value"); // dont write code like this to concate  isted use ` ` (string interpolation)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parth-dave-legend')
console.log(gameName[0]);
console.log(name[0]);

console.log();
console.log(gameName.__proto__);
console.log();

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-8,4));


const newString = "      Parth    "
console.log(newString);
console.log(newString.trim());

const url = "https://parth.com/parth%20dave"
console.log(url.replace('%20','-'))
console.log(url.includes('parth'))
console.log(gameName.split('-'))