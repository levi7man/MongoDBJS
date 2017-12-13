var moongose = require('mongoose');

moongose.Promise = global.Promise;

moongose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {moongose};