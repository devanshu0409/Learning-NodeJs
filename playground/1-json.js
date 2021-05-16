const fs = require("fs")

// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday'
// }

// const bookString = JSON.stringify(book)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())