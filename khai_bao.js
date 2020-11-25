// khai báo biến trong js var, let , const
var a = 10; // không sử dụng
a = 40;
let b = 20;
b = 90;
const c = 30;
// console.log(a, b, c);
// toán tử if, else, so sánh
// toán tử so sánh gồm những gì?
// >, <, ==, ===, >=, <=, !==,
// console.log(a !== b);
if (a == 50) {
  //   console.log('a !== 60');
} else {
  //   console.log('a == 60');
}
// kiểu dữ liệu
// number, string, boolean, null, undefined,
// Array, Object (reference)
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 'trung', { name: 'tung' }, 3, 4];
let person = {
  name: 'tung',
  age: 27,
  school: 'na',
};
let person3 = {
  name: 'tung',
  school: {
    name: 'Dai hoc',
    nam_thanh_lap: 2000,
  },
};
// tạo 1 bản copy
let person2 = { ...person };

let person4 = JSON.parse(JSON.stringify(person3));
person4.name = 'name ben ngoai';
person4.school.nam_thanh_lap = 1900;
// console.log(person3);
// console.log(person4);

switch (a) {
  case 30:
    console.log('a bang 30;');
    break;
  case 40:
    console.log('a bang 40;');
    break;
  case 50:
    console.log('a bang 50;');
    break;
  default:
    console.log('khong dung');
    break;
}
// bài tập: Giải phương trình bậc 2: ax^2 + bx + c = 0
const phuongtrinh = (a, b, c) => {};
