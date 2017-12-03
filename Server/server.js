const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo',{
    text:{
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

//var newTodo = new Todo({
//    text: 'Im the best'
//});

//newTodo.save().then((res)=>{
//    console.log('Save Todo', res);
//}, (err)=>{
//    console.log('Unable to save Todo');
//});

var SecondTodo = new Todo({
    text: 'Second',
    completedAt: 45
});

SecondTodo.save().then((doc)=>{
    console.log('Save: ', doc);
}, (err)=>{
    console.log('Unable to save in Todo');
});


