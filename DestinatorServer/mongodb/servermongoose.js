var mongoose = require('mongoose'),
    assert = require('assert');

var Destinos = require('./models/destinos');

// Connection URL
var url = 'mongodb://localhost:27017/destinator';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    var newDestino = Destinos({
    	puesto_numero: 1,
    	centro_directivo: "Delegación de Gobierno en Andalucía",
    	centro_destino: "Subdelegación del gobierno Almeria"
    });

    // save the user
    newDestino.save(function (err) {
    	if (err) throw err;
        console.log('Destino creado!');
         // get all the users
        Destinos.find({}, function (err, destinos) {
            if (err) throw err;

            // object of all the users
            console.log(destinos);
            db.collection('destinos').drop(function () {
            	db.close();
        });
        });
    });

});