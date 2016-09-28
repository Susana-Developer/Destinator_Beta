var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var dboper = require('./operations');

// Connection URL
var url = 'mongodb://localhost:27017/destinator';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    dboper.insertDocument(db, { name: "Ministerio de defensa", description: "Balalglgla" },
        "destinos", function (result) {
            console.log(result.ops);

            dboper.findDocuments(db, "destinos", function (docs) {
                console.log(docs);

                dboper.updateDocument(db, { name: "Ministerio de defensa" },
                    { description: "Updated" },
                    "destinos", function (result) {
                        console.log(result.result);

                        dboper.findDocuments(db, "destinos", function (docs) {
                            console.log(docs)

                            db.dropCollection("destinos", function (result) {
                                console.log(result);

                                db.close();
                            });
                        });
                    });
            });
        });
});