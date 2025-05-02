const data1 = new Date();
const data2 = new Date(Date.parse("11/05/2024 23:59"));
const dataEmDias = Math.floor((data1 - data2)/86400000);

const meses = Math.floor(dataEmDias / 30);
const dias = dataEmDias % 30;
const calculoTempo = document.getElementById("calculoTempo");
let resultadoFinal = "";


if (dias > 0) resultadoFinal = `${meses} meses e ${dias} dias`;
else {
    resultadoFinal = `Parabéns!! Hoje nós fazemos ${meses} meses de namoro.`;
    const titulo = document.getElementById("titulo");
    titulo.hidden = true;

    calculoTempo.style.fontWeight = 600;
    calculoTempo.style.fontSize = "8vw";
    calculoTempo.style.margin = "12vw";
}

calculoTempo.innerHTML = resultadoFinal;