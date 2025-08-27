let eventos = require('events');

let EmissorEventos = eventos.EventEmitter;

let ee = new EmissorEventos();

ee.on('dados', function(fecha){
    console.log(fecha);
});