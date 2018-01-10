const {moongose} = require('./../Server/DB/moongose');
const {Todo} = require('./../Server/models/todo');

 var id = '5a558acf4453d8500dfc56d1';



 Todo.find({
     _id: id
 }).then((todos)=>{
    console.log('Todos', todos);
 });


 Todo.findOne({
    _id: id
}).then((todo)=>{
    if (!todo) {
        return console.log('Id doesnt exist');
     }
   console.log('Todo', todo);
});

Todo.findById(id).then((todo)=>{
    if (!todo) {
       return console.log('Id doesnt exist');
    }
    console.log('Todo by ID', todo);
});