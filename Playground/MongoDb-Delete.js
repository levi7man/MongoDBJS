
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
      return  console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB Server');    
    
    //DeleteMany
    //db.collection('Todos').deleteMany({text: 'Eat'}).then((results)=>{
    //    console.log(results);
    //});
    
    //DeleteOne
    //db.collection('Todos').deleteOne({text: 'Tomorrow'}).then((res)=>{
    //    console.log(res);
    //});
    
    db.collection('Users').findOneAndDelete({ location: 'CDMX Tlahuac'}).then((results)=>{
        console.log(results); 
    });

    //db.close();
});