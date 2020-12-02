const array1 = [
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
    weight: 2250,
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000,
  },
];
let newArray = [];
for (let index = 0; index < array1.length; index++) {
  if (array1[index].size === 'small') {
    newArray.push(array1[index]);
  }
}
let newFilter = array1.find((item, index) => {
  return item.weight > 1000;
});
console.log(newArray);
console.log(newFilter);
