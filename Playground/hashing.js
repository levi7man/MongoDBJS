const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');



var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');

console.log(token);

var decoden = jwt.verify (token,'123abc');
console.log(decoden);

// var message = 'I am user number 2';

// var hashing = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hashing}`);

// var data = {
//     id: 4
// };

// var token ={
//     data,
//     hash: SHA256(JSON.stringify(data) + 'SomeTest').toString()
// };


// token.data.id = 5

// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'SomeTest').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed'); 
// }
// else{
//     console.log('2 Data was changed, dont trust');
// }