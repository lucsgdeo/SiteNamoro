const data1 = new Date();
const data2 = new Date(Date.parse("11/05/2024 23:59"));
const dataEmDias = Math.floor((data1 - data2)/86400000);

const meses = Math.floor(dataEmDias / 30);
const dias = retornaDias(data1, data2);
const calculoTempo = document.getElementById("calculoTempo");
let resultadoFinal = "";

if (data1.getDate() != 5) resultadoFinal = `${meses} meses e ${dias} dias`;
else {
    resultadoFinal = `Parabéns!! Hoje nós fazemos ${meses} meses de namoro.`;
    const titulo = document.getElementById("titulo");
    titulo.hidden = true;

    calculoTempo.style.fontWeight = 600;
    calculoTempo.style.fontSize = "8vw";
    calculoTempo.style.margin = "12vw";
}

calculoTempo.innerHTML = resultadoFinal;

function retornaDias(dt1, dt2) {
    const dia1 = dt1.getDate();
    const dia2 = dt2.getDate();
    let mes = dt1.getMonth();
    
    if(dia1 > dia2) return dia1 - dia2;
    else {
        const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(mes == 0) mes = 12;
        const mesDias = meses[mes-1];
        return mesDias - dia2 + dia1;
    }
}