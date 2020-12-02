// tính diện tích hình thang. ( (a + b) *  (a - b) ) /2
// a= 10, b = 8
// (a +b) : mất 3s
// * h : mất 2s
// chia 2: mất 1s
const tong = (a, b, cb) => {
  console.log('start tong');
  setTimeout(() => {
    let kq = a + b;
    console.log('done tong', a, b);
    return cb(kq);
  }, 3000);
};

const tich = (a, b, cb) => {
  console.log('start tich');
  setTimeout(() => {
    console.log('done tich', a, b);
    let kq = a * b;
    return cb(kq);
  }, 2000);
};
const thuong = (a, b, cb) => {
  console.log('start thuong', a, b);
  setTimeout(() => {
    let kq = a / b;
    console.log('done thuong', a, b);
    return cb(kq);
  }, 1000);
};

const ketqua = (a, b, h, cb) => {
  tong(a, b, (resultTong) => {
    tich(resultTong, h, (resultTich) => {
      thuong(resultTich, 2, (ketquacuoi) => {
        cb(ketquacuoi);
      });
    });
  });
};
let data = ketqua(3, 4, 5, (done) => {
  console.log(done);
});
