/**
 * 1. Write a function to transform array a to array b and print the elements of array b to the console.
 */

 // The original array
let a = [2, 4, 6, 8, 9, 15]

// The filter function will be return only the odd numbers and multiply them by itself number
let result = a.filter((item) => (item % 3 != 0)).map((num) => num * num);
console.log('b: ', result)