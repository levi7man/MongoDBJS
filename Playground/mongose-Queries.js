
const {moongose} = require('./../Server/DB/moongose');
const {Todo} = require('./../Server/models/todo');
const {user} = require('./../Server/models/user');

var idUser = '5a2483222cb7fe981a84500b'

user.findById(idUser).then((users)=>{
    if (!users) {
        return console.log('Unable to find user');
    }
        console.log('find BY id', users);
}, (e)=>{
     console.log(e);
});

user.findOne({
    _id: idUser
        }).then((users)=>{
            console.log('User Find ONE', users);
});

//var id = '5a558acf4453d8500dfc56d1';
//
//if (!ObjectID.isValid(id)) {
//    console.log('Invalid ID');
//}
//
// Todo.find({
//     _id: id
// }).then((todos)=>{
//    console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//    _id: id
//}).then((todo)=>{
//    if (!todo) {
//        return console.log('Id doesnt exist');
//     }
//   console.log('Todo', todo);
//});
//
//Todo.findById(id).then((todo)=>{
//    if (!todo) {
//       return console.log('Id doesnt exist');
//    }
//    console.log('Todo by ID', todo);
//});

