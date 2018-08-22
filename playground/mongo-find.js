const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Todos',{ useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect');
    } 
    console.log('Connected to Mongodb');
    const db = client.db('Todos');

    //Find with certain querry
    // db.collection('Users').find(
    //     {_id: ObjectID('5b7bf6ba215556181ca7d651')}
    // ).toArray().then(docs => {

    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err => {
    //     console.log('could not find', err);
    // }));   

    //Count
    db.collection('Users').find().count().then(count => {

        console.log(`Total users: ${count}`);

    }, (err => {
        console.log('could not find', err);
    })); 
  client.close();
});