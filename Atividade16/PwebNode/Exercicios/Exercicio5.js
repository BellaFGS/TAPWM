let eventos = require('events');

let EmissorEventos = eventos.EventEmitter;

let ee = new EmissorEventos();

ee.on('dados', function(fecha){
    console.log(fecha);
});

ee.emit('dados',' Primeira Vez ' + Date.now());

setInterval(function(){
    ee.emit('dados', Date.now());
}, 100);