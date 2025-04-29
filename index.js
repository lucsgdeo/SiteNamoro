var data1 = new Date();
var data2 = new Date(Date.parse("11/05/2024 23:59"));
var dataEmDias = Math.floor((data1 - data2)/86400000);

var meses = Math.floor(dataEmDias / 30);
var dias = dataEmDias % 30;
const resultadoFinal = meses + " meses e " + dias + " dias";

document.getElementById("calculoTempo").innerHTML = resultadoFinal;