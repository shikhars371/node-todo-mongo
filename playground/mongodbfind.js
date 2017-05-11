// const MongoClient = require('mongodb').MongoClient;

// pulling off propeties or fileds from object

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

  if(err)
  {
      return console.log('Unable to conncect to mongo db server');
  }
  console.log('connected to mongodb');

db.collection('Todos').find({completed: true}).toArray().then((docs)=>{

        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2))

},(err)=>{

    console.log('unable to fetch'+err)

});

  db.close();

});