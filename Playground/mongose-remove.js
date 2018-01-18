
const {moongose} = require('./../Server/DB/moongose');
const {Todo} = require('./../Server/models/todo');
const {user} = require('./../Server/models/user');

//Todo.remove({}).then((result)=>{
//console.log(result);
//});
//
//Todo.findByIdAndRemove

//Todo.findOneAndRemove

//Todo.findByIdAndRemove('5a60e597e0b9b16d05df5c17').then((todo)=>{   
//    console.log(todo);
//});


Todo.findOneAndRemove({ _id: "5a60e597e0b9b16d05df5c17"}).then((todo)=>{
console.log(todo);
});