var readlineSync = require('readline-sync');
var fs = require('fs');
let studenJSON = fs.readFileSync('./data.txt', 'utf8');
let student = JSON.parse(studenJSON);
student.push({
  name: 'tung',
  age: 22,
  sex: 1,
});
saveFile();
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
function saveFile() {
  studentStr = JSON.stringify(student);
  fs.writeFileSync('./data.txt', studentStr, 'utf8');
}
