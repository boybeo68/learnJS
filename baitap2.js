let product = [
  {
    price: 120,
    qty: 10,
  },
  {
    price: 220,
    qty: 2,
  },
];
let SumPrice = product.reduce((a, b) => {
  return a + b.price * b.qty;
}, 0);
console.log(SumPrice);
