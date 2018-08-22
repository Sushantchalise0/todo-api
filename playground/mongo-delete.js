const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Todos',{ useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect');
    } 
    console.log('Connected to Mongodb');
    const db = client.db('Todos');

    //FindOneAndDelete Method
    db.collection('Todos').findOneAndDelete({text: 'Goto Bank'}).then(result => {

        console.log(result);

    }, (err => {
        console.log('could not find', err);
    })); 
  client.close();
});