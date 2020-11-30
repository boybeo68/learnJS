// Array method: concat, push, pop, shift, unshift, slice, splice
// Function, callback
// map, filter, reduce,
// Làm 1 số bài tập thực tế

let array = [
  {
    name: 'A',
    price: 2000,
    quanity: 5,
  },
  {
    name: 'A',
    price: 2000,
    quanity: 5,
  },
  {
    name: 'A',
    price: 2000,
    quanity: 5,
  },
];
let array2 = [
  {
    name: 'A2',
    price: 2000,
    quanity: 5,
  },
  {
    name: 'A2',
    price: 2000,
    quanity: 5,
  },
  {
    name: 'A2',
    price: 2000,
    quanity: 5,
  },
];
let array3 = [...array, ...array2];

console.log(array3);
// concat: Nối mảng
