var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var options = {useUnifiedTopology: true, useNewUrlParser: true};

//Delete
//MongoClient.connect(url, options, function(err, db){
//  if(err) throw err;
//  var dbo = db.db("coc");
//  var query = {
//    subject_id: '140-399'
//  }

//  dbo.collection("classroom").deleteOne(query, function(err, res) {
//   if (err) throw err;
//    console.log("1 document deleted");
//   db.close();
//  });
//})

//Update
//MongoClient.connect(url, options, function(err, db){
//  if(err) throw err;
//  var dbo = db.db("coc");
//  var query = {
//    subject_id: '140-399'
//  }
//  var newvalues = { $set: {room: "1303", lecturer: "Maneenate" } };

//  dbo.collection("classroom").updateOne(query, newvalues, function(err, res) {
//   if (err) throw err;
//    console.log("1 document updated");
//   db.close();
//  });
//})

//Insert
//MongoClient.connect(url, options, function(err, db){
//  if(err) throw err;
//  var dbo = db.db("coc");
//  var newclass = {
//    subject_id: '140-399',
//    subject_name: 'Math I',
//    room: '6307',
//    schedule: ['Monday'],
//    lecturer: 'Korawit'
//  }
//  dbo.collection("classroom").insertOne(newclass, function(err, res) {
//    if (err) throw err;
//    console.log("1 document inserted");
//    db.close();
//  });
//})

//Select
MongoClient.connect(url, options,  function(err, db) {
  if (err) throw err;
 var dbo = db.db("coc");
  var query = {
    subject_id: /^140/
  };
  var sort = {
    subject_name: -1
  }
  dbo.collection("classroom").find(query).sort(sort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

