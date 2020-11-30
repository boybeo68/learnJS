function callApi(xulydata) {
  setTimeout(() => {
    console.log('call done');
    xulydata('data');
  }, 2000);
}
function xulySaukhiCall(data) {
  console.log(data + 'abc');
}
// callApi(xulySaukhiCall);
// Bài tập
// in ra màn hình start make coffe
// start making
// sau 3s => makingdone
// Sai 2s => finish

function a(params) {
  console.log('start make coffe');
  console.log('start making');
  setTimeout(() => {
    console.log('making done');
    params();
  }, 3000);
}
function b() {
  setTimeout(() => {
    console.log('Finish');
  }, 2000);
}
a(b);
//  bài tập về nhà. chạy lần lượt các function 5s => 3s => 1s => 4s
