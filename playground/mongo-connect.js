const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/Todos',{ useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect');
    } 
    console.log('Connected to Mongodb');
    const db = client.db('Todos');

    db.collection('Users').insertOne({
        name: 'Sandeep',
        age: 25,
        location: 'Bhaisepati'
    }, function (err, result) {
        if(err){
            return console.log('unable to insert');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
   
  client.close();
});