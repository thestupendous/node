// app/index.js
const calc = require('./calc')
const numbersToAdd = [
2,3,5,10,90]

const result = calc.sum(numbersToAdd)

console.log(`The result is : ${result}` )
