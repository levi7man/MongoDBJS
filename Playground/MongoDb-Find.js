
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
      return  console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB Server');      
    
// db.collection('Users').find({_id: new ObjectID('5a17ca75a552043a60d1df58')}).toArray().then((docs)=>{
//    console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
//    if (err) {
//        console.log('Unable to fetch users', err);
//    }
// });

    db.collection('Users').find().count().then((count)=>{
        console.log(`Total Users: ${count}`);
        return db.collection('Users').find({name: 'Daniel'}).count();
    }).then((count)=>{
        console.log(`numero de name Daniel: ${count}`);
        return db.collection('Users').find({location: 'CDMX'}).toArray();
    },(err)=>{
        if (err) {
            console.log('Unable to fetch users', err);
        }
    }).then((arr)=>{
        console.log('Encontrado Daniel collection');
        console.log(JSON.stringify(arr, undefined, 2));
    });

 

    //db.close();
});