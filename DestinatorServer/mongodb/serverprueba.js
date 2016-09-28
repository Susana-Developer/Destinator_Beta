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

    // create a new dish
    Destinator.create({
        puesto_numero: 2,
        centro_directivo: "Delegacion de gobierno en Andalucia",
        centro_destino: "Subdelegacion del gobierno de Almeria",
        provincia: "Almeria",
        localidad: "Almeria",
        puesto_trabajo: "Programador de segunda",
        nivel: 15,
        comp_especifico: "3456,76",
        comp_productividad: "100",
        direccion: "C/Maria de Molina 23",
        telefono: "917656789",
        horario_flexibilidad: "No",
        descripcion: "Programación en Java",
        productividad_tardes: "Sí, 200 euros al mes",
        transporte_publico: "metro, parada Principe Pío y buses",
        aparcamiento: "un mes si, un mes no",
        ayudas_estudios: "pago matrícula universitaria",
        ayudas_cuerpos_superiores: "cursos",
        concilacion: "reducción de horario",
        accion_social: "abono transporte",
        comedor: "sí, menú 5 euros",
        ducha: "No",
        promocion: "concursos anuales",
        cara_publico: "No",
        externos: "Sí",


        comments: [
            {
                comment: 'This is insane',
                author: 'Matt Daemon'
            }
        ]
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;

        // get all the dishes
        /*setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                                   }, {
                    new: true
                })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Updated Dish!');
                    console.log(dish);

                    dish.comments.push({
                        rating: 5,
                        comment: 'I\'m getting a sinking feeling!',
                        author: 'Leonardo di Carpaccio'
                    });

                    dish.save(function (err, dish) {
                        console.log('Updated Comments!');
                        console.log(dish);

                        db.collection('dishes').drop(function () {
                            db.close();
                        });
                    });
                });
        }, 3000);*/
    });
});