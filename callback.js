// chạy từ trên xuống dưới thế này thì đẹp quá
function callApi(dataTraVe) {
  console.log('start call');
  setTimeout(() => {
    console.log('call done');
    dataTraVe('du lieu day ne ');
  }, 2000);
}
function getData(params) {
  console.log(params + 'ket thu');
}
callApi(getData);
function callApi2() {
  console.log('start call');
  setTimeout(() => {
    console.log('call done');
  }, 2000);
}
callApi2();
console.log('lay duoc du lieu roi');
