// object
let person = {
  name: 'tung',
  age: 27,
  soluong: 30,
};

// thêm phần tử vào object
person.new = 'gia tri moi';
// sửa phẩn tử
person.name = 'hoa';
// xoá phần tử
delete person.age;
// xem giá trị của phẩn tử object
// console.log(person.name);
// vòng lặp qua các item.
// Get list values cua Object
// console.log(Object.values(person));
// Get key cua object
// console.log(Object.values(person));
// check trong object co 1 thuoc tinh nao do khong
// console.log(person.hasOwnProperty('data'));
// cach 2 get gia tri cua phan tu
// console.log(person['name']);
// console.log(person);
let a = Object.keys(person);
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  // console.log(element);
}
// array
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
// console.log(count);
// expected output: 4
// console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
//  thêm 1 phần tử vào đầu mảng
let insert = animals.unshift('tung');
console.log(animals.push('chickens', 'cats', 'dogs'));
console.log(animals);
// xoá 1 phẩn từ trong mảng
// sắp xếp mảng
// sửa phẩn tử trong mảng
