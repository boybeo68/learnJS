// tính diện tích hình thang. (a + b) *  (a - b) /2
// a= 10, b = 8
// (a +b) : mất 3s
// * h : mất 2s
// chia 2: mất 1s
const tong = (a, b, cb) => {
  console.log('start tong');
  setTimeout(() => {
    let tongSo = a + b;
    hieuSo(a, b, (ketQuaHieu) => {
      console.log('done tong hieu');
      return cb(tongSo, ketQuaHieu);
    });
  }, 3000);
};

const hieuSo = (a, b, cb) => {
  console.log('start hieu');
  setTimeout(() => {
    let kq = a - b;
    console.log('done hieu', a - b);
    return cb(kq, 'data');
  }, 3000);
};
const tich = (a, b, cb) => {
  console.log('start tich');
  setTimeout(() => {
    console.log('done tich', a * b);
    let kq = a * b;
    return cb(kq);
  }, 2000);
};
const thuong = (a, b, cb) => {
  console.log('start thuong', a, b);
  setTimeout(() => {
    let kq = a / b;
    console.log('done thuong', a / b);
    return cb(kq);
  }, 1000);
};

const ketqua = (a, b, cb) => {
  tong(a, b, (result, resultHieu) => {
    tich(result, resultHieu, (result) => {
      thuong(result, 2, (result) => {
        cb(result);
      });
    });
  });
};
let data = ketqua(10, 8, (done) => {
  console.log(done);
});
