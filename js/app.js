var arregloTablero = [
    [0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,0,0],
    [1,0,0,0,0,0,1,0],
    [0,0,0,2,0,0,0,2],
    [2,0,0,0,2,0,0,0],
    [0,2,0,0,0,0,0,1],
    [2,0,0,0,2,0,2,0]
];
var casilla, piezaMovil, piezaMovilSeleccionada; 
//Tablero

var tablero = document.getElementById("tablero"), contador = 0;

for (var i = 0; i < arregloTablero.length; i++) {

        var divFila = document.createElement('tr');
        divFila.className = 'fila';
        tablero.appendChild(divFila);
        contador = i % 2;
        for (var j = 0; j < arregloTablero.length; j++) {
            var casilla = document.createElement('td');
            if (contador === 0) {
                casilla.className = 'recuadroBlanco';
                contador++;
            }else{
                casilla.className = 'recuadroNegro';
                contador--;
            }
            casilla.id = 'fila' + i + 'columna' + j;
            divFila.appendChild(casilla);
        }
        var casillas = document.querySelectorAll('td'); 
    
        for(x=0; x<casillas.length; x++) {
        casillas[x].addEventListener('click', seleccionaPieza);
        }
}

function seleccionaPieza() {
    var piezasMoviles = document.querySelectorAll("table, table img"); 
    if(!piezaMovilSeleccionada && this.firstElementChild) {
    casilla = this; 
    piezaMovil = this.innerHTML; 

    this.querySelector('img').classList.add("pintado"); 
    piezaMovilSeleccionada = true; 
    }
    else if(piezaMovilSeleccionada){
    casilla.innerHTML= ''; 
    this.innerHTML = piezaMovil; 
    piezaMovilSeleccionada = false; 
    }
}

//Fichas

for (var m = 0; m < arregloTablero.length; m++) {  

    for (var n = 0; n < arregloTablero.length; n++) { 
        //Ficha Blanca corresponde a 1
        if (arregloTablero[m][n] === 1) {
            var piezaBlanca = document.createElement('img');
            piezaBlanca.src = 'imgs/PiezaBlanca.png';
            piezaBlanca.alt = 'Pieza_Blanca';
            piezaBlanca.className = 'fichas';
            document.getElementById('fila' + m +'columna' + n).appendChild(piezaBlanca);
            
        //Ficha Roja corresponde a 2
        }else if (arregloTablero[m][n] === 2){
            var piezaRoja = document.createElement('img');
            piezaRoja.src = 'imgs/PiezaRoja.png';
            piezaRoja.alt = 'Pieza_Roja';
            piezaRoja.className = 'fichas';
            document.getElementById('fila' + m +'columna' + n).appendChild(piezaRoja);
        }
        
    }
}


