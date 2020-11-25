const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('vui long nhap a ', (answer) => {
  // TODO: Log the answer in a database
  console.log(typeof answer);
  //   console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
