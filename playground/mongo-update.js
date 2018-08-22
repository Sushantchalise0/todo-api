const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Todos',{ useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect');
    } 
    console.log('Connected to Mongodb');
    const db = client.db('Todos');

    //FindOneAndUpdate Method
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b7befb5ddf2c8269077cd37')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    //Increment
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b7bf0a0753f2e2674cb4448')
    },{
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

  client.close();
});