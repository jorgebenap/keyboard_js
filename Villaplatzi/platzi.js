var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "fondo.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
  fondo.cargaOK = true;
}

function dibujar() {
  papel.drawImage(fondo, 0, 0);
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
