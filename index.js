const data1 = new Date();
const data2 = new Date(Date.parse("11/05/2024 23:59"));
const dataEmDias = Math.floor((data1 - data2)/86400000);

const meses = Math.floor(dataEmDias / 30);
const dias = dataEmDias % 30;
const resultadoFinal = `${meses} meses e ${dias} dias`;

document.getElementById("calculoTempo").innerHTML = resultadoFinal;