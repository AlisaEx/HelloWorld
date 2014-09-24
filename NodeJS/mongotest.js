var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;
var request = 
var api_url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=alisatrocity&api_key=8148fb40ef9511752203d2c4591e63d0&format=json&period=overall&limit=5';


MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  if(err) throw err;

  var collection = db.collection('lastfm');
  collection.insert({a:1}, function(err, docs) {

    collection.count(function(err, count) {
      console.log(format("count = %s", count));
    });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
      console.dir(results);
      // Let's close the db
      db.close();
    });
  });
})