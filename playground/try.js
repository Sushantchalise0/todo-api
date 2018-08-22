const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/Todos';

// Database Name
const dbName = 'Todos';

// Use connect method to connect to the server
MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
    if(err){
        console.log(err);
    }
  console.log("Connected successfully to server");
  const db = client.db(dbName);
    // Get the documents collection
    const collection = db.collection('Todos');
    // Insert some documents
    collection.insertOne({
        text: 'Something to do',
        completed: false
    }, function(err, result) {
      if(err){
          return console.log(err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
      
    });
  
  //insertDocuments(db, function() {
    client.close();
 // });
});

