
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
      return  console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB Server');    
   
//    db.collection('Users')
//    .findOneAndUpdate({ _id: new ObjectID('5a18545de752ab206888ff2e')},
//                    { $set: {name: 'Daniel'}}, {returnOriginal: false}).then((result)=>{
//                        console.log(result);
//                    });

    db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5a17c92abe38781bc8f3b7a6')},
    {$set: {text: 'My Update'}},{returnOrinal: false}).then((res)=>{
        console.log(res);
    });
    //db.close();
});