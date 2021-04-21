var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var line = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for (line = 0; line < lineas; line++) {
    yi = espacio * line;
    xf = espacio * (line + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("lineas " + line);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);

  var xxx = parseInt(texto.value);
}
