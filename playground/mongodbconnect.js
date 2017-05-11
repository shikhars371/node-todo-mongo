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

//   db.collection('Todos').insertOne({

//       text:'play',
//       completed:false

//   },(err,result)=>{

// if(err)
// {
//     return console.log('unable to insert'+err);
// }

// console.log(JSON.stringify(result.ops,undefined,2));

//   });

// db.collection('Users').insertOne({
//     name:'shikhar',
//     age:25,
//     Location: 'Delhi'
// },(err,result)=>{
//     if(err)
//     {
//         return console.log('unable to insert in users'+err);
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));

// });

  db.close();

});