// khai bao function 2 cach
function TinhTong(a, b) {
  return a + b;
}
let tong = TinhTong(5, 6);
let tichAr = (a, b) => {
  return a * b;
};
// console.log(tichAr(2, 3));
// scope
let obj = {
  name: 'Tung',
  f1: function (params) {
    let name2 = 'Hoang';
    console.log(this);
    let newName = this.name + name2;
    return newName;
  },
  f2: () => {
    console.log(this.obj);
    let name2 = 'Bi';
    let newName = this.name + name2;
    return newName;
  },
};
console.log(obj.f2());
