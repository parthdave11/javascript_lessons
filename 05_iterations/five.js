const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })


// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


// extracting objects inside array
const myCoding = [
    {
    languagename: "javascript",
    languagefilename: "js"
    },
    {
    languagename: "java",
    languagefilename: "java"
    },
    {
    languagename: "python",
    languagefilename: "py"
    },
]
myCoding.forEach((item) => {
    console.log(item.languagename, item["languagefilename"]);
})