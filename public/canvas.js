'use strict'

var canvas,
    ctx,
    x,
    y,
    gameinit,
    p;

function posicion(e){
    var pos = getPos(e);
    p.innerHTML = `<strong>Posicion x:</strong> ${pos.x}   <strong>Posicion y:</strong> ${pos.y}`;

};

function getPos(e){
    var rect =  canvas.getBoundingClientRect()
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
};
function cargar () {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');

};


function dibujar(x, y) {

};

function update() {
};

cargar();
dibujar();

p = document.querySelector('#posicion');

canvas.addEventListener('mousemove', (e) => {
    posicion(e)
});
