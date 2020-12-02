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
const hieu = (a, b) => {
  console.log('start hieu');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject(new Error('phai nhap so'));
      }
      let kq = a - b;
      console.log('done hieu', kq);
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

