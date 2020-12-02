const array1 = [1, 2, 3, 4];
// Tính tổng các phần tử trong mảng
let tong = array1.reduce((a, b) => {
  return a + b;
}, 0);
console.log(tong);
const array2 = [
  {
    name: 'cat',
    size: 'small',
    weight: 5,
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10,
  },
  {
    name: 'lion',
    size: 'medium',
    weight: 150,
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000,
  },
];

const tongCanNang = array2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.weight;
}, 0);
console.log(tongCanNang);
