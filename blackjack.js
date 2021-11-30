let oros = ["uno de oros", "dos de oros", "tres de oros", "cuatro de oros", "cinco de oros", "seis de oros", "siete de oros", "ocho de oros", "nueve de oros", "diez de oros"];
let espadas = ["uno de espadas", "dos de espadas", "tres de espadas", "cuatro de espadas", "cinco de espadas", "seis de espadas", "siete de espadas", "ocho de espadas", "nueve de espadas", "diez de espadas"];
let bastos = ["uno de bastos", "dos de bastos", "tres de bastos", "cuatro de bastos", "cinco de bastos", "seis de bastos", "siete de bastos", "ocho de bastos", "nueve de bastos", "diez de bastos"];
let copas = ["uno de copas", "dos de copas", "tres de copas", "cuatro de copas", "cinco de copas", "seis de copas", "siete de copas", "ocho de copas", "nueve de copas", "diez de copas"];
let cartas = [oros, espadas, bastos, copas];


let numero;
let palo;
let numeroia;
let paloia;
let c = 0;

let sum = 0;
let sumia = 0;

let carta = "";
let cartasia = "";


function generar(){
    numero = Math.floor(Math.random()*10);
    palo = Math.floor(Math.random()*4);
}

function generaria(){
    numeroia = Math.floor(Math.random()*10);
    paloia = Math.floor(Math.random()*4);
}



function sumar(){
    generar();
	generaria();

    while (cartas[palo][numero] == -1 && c !== 40) {
        generar();
    }

    while (cartas[paloia][numeroia] == -1 && c !== 40) {
        generaria();
    }

//validador usuario


 if (sum < 7.5) {
    if(numero > 6){
        c++;
        carta += " <img src=\"img/" + cartas[palo][numero] + ".jpg\" alt=\"\">";
        cartas[palo][numero] = -1;
        sum += 0.5;
        let dom = document.getElementById("cartas").innerHTML = carta;
        let dom2 = document.getElementById("puntuacion").innerHTML = sum;
    } else {
        c++;
        carta += " <img src=\"img/" + cartas[palo][numero] + ".jpg\" alt=\"\">";
        cartas[palo][numero] = -1;
        sum += numero+1;
        let dom = document.getElementById("cartas").innerHTML = carta;
        let dom2 = document.getElementById("puntuacion").innerHTML = sum;
    } 
  }

//validador ia


    if (sumia < 7.5) {
        if(numeroia > 6){
            c++;
            cartasia += " <img src=\"img/" + cartas[paloia][numeroia] + ".jpg\" alt=\"\">";
            cartas[paloia][numeroia] = -1;
            sumia += 0.5;
        } else {
            c++;
            cartasia += " <img src=\"img/" + cartas[paloia][numeroia] + ".jpg\" alt=\"\">";
            cartas[paloia][numeroia] = -1;
            sumia += numeroia+1;
        
        } 
    }


    if (sum == 7.5 && sumia <= 7.5) {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: green;\">El jugador ha ganado</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    }

    if (sumia == 7.5 && sum <= 7.5) {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: red;\">El jugador ha perdido</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    }
	if (sumia == 7.5 && sum == 7.5){
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: red;\">Empate</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia; 	
    } if (sum > 7.5) {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: red;\">El jugador ha perdido</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    } if (sumia > 7.5) {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: green;\">El jugador ha ganado</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    }
}



function plantar(){

    if (sumia > 7.5 && sum <= 7.5 && sum > sumia) {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: green;\">El jugador ha ganado</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    } else if (sumia == sum){
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: red;\">Empate</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia; 	
    } else if (sum > sumia) {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: green;\">El jugador ha ganado</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    } else {
        let dom = document.getElementById("resultado").innerHTML = "<p style=\"color: red;\">El jugador ha perdido</p>";
        let dom3 = document.getElementById("cartasia").innerHTML = cartasia;
        let dom4 = document.getElementById("puntuacionia").innerHTML = sumia;
    }  
}
