// dien tich hinh thang (a+ b) *h /2
const tong = (a, b) => {
  console.log('start tong');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject(new Error('phai nhap so'));
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
        return reject(new Error('phai nhap so'));
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
        return reject(new Error('phai nhap so'));
      }
      let kq = a / b;
      console.log('done tich', kq);
      return resolve(kq);
    }, 3000);
  });
};

const ketqua = (a, b, h) => {
  return tong(a, b)
    .then((ketqua) => tich(ketqua, h))
    .then((ketquatich) => thuong(ketquatich, 2))
    .catch((err) => {
      console.log(err);
    });
};
ketqua(3, 4, 5);
