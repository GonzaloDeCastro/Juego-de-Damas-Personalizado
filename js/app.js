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

//Tablero

var tablero = document.getElementById("tablero"), contador = 0;

for (var i = 0; i < arregloTablero.length; i++) {

        var divColumna = document.createElement('div');
        divColumna.className = 'columna' + i;
        tablero.appendChild(divColumna);
        contador = i % 2;
        for (var j = 0; j < arregloTablero.length; j++) {
            var divCasilla = document.createElement('div');
            if (contador === 0) {
                divCasilla.className = 'recuadroBlanco';
                contador++;
            }else{
                divCasilla.className = 'recuadroNegro';
                contador--;
            }
            divCasilla.id = 'columna' + j + 'fila' + i;
            divColumna.appendChild(divCasilla);
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
            document.getElementById('columna' + m +'fila' + n).appendChild(piezaBlanca);
        //Ficha Roja corresponde a 2
        }else if (arregloTablero[m][n] === 2){
            var piezaRoja = document.createElement('img');
            piezaRoja.src = 'imgs/PiezaRoja.png';
            piezaRoja.alt = 'Pieza_Roja';
            piezaRoja.className = 'fichas';
            document.getElementById('columna' + m +'fila' + n).appendChild(piezaRoja);     
        }
    }
}
