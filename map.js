const array1 = [1, 4, 9, 16];
// trả về 1 array có các phẩn tử bình phương
let newArray = [];
for (let index = 0; index < array1.length; index++) {
  const element = array1[index] * array1[index];
  newArray.push(element);
}
console.log(newArray);
// use map
let arrMap = array1.map((item, index) => {
  //   console.log(index);
  return item  * item;
});
console.log(arrMap);
