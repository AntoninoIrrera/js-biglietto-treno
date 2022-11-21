const numChilo = prompt("inserisci quanti chilometri vuoi percorrere");
const age = prompt("inserisci la tua età");

let costoBiglietto = 0.21 * numChilo;

if (age < 18){
    let scontoBigliettoMinorenni = ((costoBiglietto * 20) / 100);
    let costoBigliettoMinorenni = costoBiglietto - scontoBigliettoMinorenni;
    document.getElementById("prezzoBiglietto").innerHTML = "Il costo del tuo biglietto sarà: " + costoBigliettoMinorenni.toFixed(2) + " euro";
}
else if (age >= 65){
    let scontoBigliettoOver = ((costoBiglietto * 40) / 100);
    let costoBigliettoOver = costoBiglietto - scontoBigliettoOver;
    document.getElementById("prezzoBiglietto").innerHTML = "Il costo del tuo biglietto sarà: " + costoBigliettoOver.toFixed(2) + " euro";
}
else{
    document.getElementById("prezzoBiglietto").innerHTML = "Il costo del tuo biglietto sarà: " + costoBiglietto.toFixed(2) + " euro";
}



