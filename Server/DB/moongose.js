var moongose = require('mongoose');

moongose.Promise = global.Promise;

moongose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {moongose};