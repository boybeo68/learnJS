// dien tich hinh thang (a+ b) *h /2
const tong = (a, b) => {
  console.log('start tong');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject('phai nhap so');
      }
      let kq = a + b;
      console.log('done tong', kq);
      return resolve(kq);
    }, 3000);
  });
};
const tich = (a, b) => {
  console.log('start tich');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject('phai nhap so');
      }
      let kq = a * b;
      console.log('done tich', kq);
      return resolve(kq);
    }, 3000);
  });
};

const thuong = (a, b) => {
  console.log('start thuong');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject('phai nhap so');
      }
      let kq = a / b;
      console.log('done tich', kq);
      return resolve(kq);
    }, 3000);
  });
};
// sau await phải là 1 function return ra promise
// bắt buộc dùng try catch để handle lỗi
// trả về 1 giá trị tái sử dụng được phải dụng callback hoặc promise
const ketqua = async (a, b, h, cb) => {
  try {
    let ketQuaTong = await tong(a, b);
    let ketQuaTich = await tich(ketQuaTong, h);
    let ketQuaCuoi = await thuong(ketQuaTich, 2);
    return cb(ketQuaCuoi);
  } catch (error) {
    console.log(error);
  }
};
const ketqua2 = async (a, b, h) => {
  try {
    let ketQuaTong = await tong(a, b);
    let ketQuaTich = await tich(ketQuaTong, h);
    let ketQuaCuoi = await thuong(ketQuaTich, 2);
    return Promise.resolve(ketQuaCuoi);
  } catch (error) {
    Promise.reject('loi');
    console.log(error);
  }
};
// ketqua(3, '4', 5, (ketqua) => {
//   console.log('ket qua cuoi', ketqua);
// });
ketqua2(3, 4, 5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
