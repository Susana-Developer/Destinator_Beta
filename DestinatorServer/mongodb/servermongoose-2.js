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

   
    Destinos.create({
        puesto_numero: 1,
        centro_directivo: "Ministerio de defensa",
        centro_destino: "Armas",
        observaciones: [
            {
                comment: 'This is insane',
                author: 'Matt Daemon'
            }
        ]
    }, function (err, destino) {
        if (err) throw err;
        console.log('Destino creado!');
        console.log(destino);
        var id = destino._id;
        // get all the dishes
       /* setTimeout(function () {
            Destinos.findByIdAndUpdate(id, {
                    $set: {
                        centro_directivo: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, destino) {
                    if (err) throw err;
                    console.log('Destino actualizado!');
                    console.log(destino);

                    destino.observaciones.push({
                        comment: "I\'m getting a sinking feeling!",
                        author: 'Leonardo di Carpaccio'
                    });

                    destino.save(function (err, destino) {
                        console.log('Updated Comments!');
                        console.log(destino);

                        db.collection('destinos').drop(function () {
                                db.close();
                            });
                    });


                });
        }, 3000);*/
    });

});