var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function(x){
//     return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num){
//     return num < 10
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNumber = numbers.reduce(function(accumulator, currentNumber){
//     return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function(num){
//     return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function(num){
//     return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

console.log(emojipedia);

const emojiMeanings = emojipedia.map(function(emoji){
    return emoji.meaning.substring(0,100);
});

console.log(emojiMeanings);