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

        var divFila = document.createElement('div');
        divFila.className = 'fila';
        tablero.appendChild(divFila);
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
            divCasilla.id = 'fila' + i + 'columna' + j;
            divFila.appendChild(divCasilla);
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
            document.getElementById('fila' + m +'columna' + n).addEventListener('click', buttonClick);
            function buttonClick(){                
                for (var m = 0; m < arregloTablero.length; m++) {  
                    for (var n = 0; n < arregloTablero.length; n++) { 
                        //Ficha Blanca corresponde a 1
                        if (arregloTablero[m][n] === 1) {
                            selecciona = document.getElementById('fila' + m +'columna' + n);
                            selecciona.style.backgroundColor = 'green';
                        }
                        
                    }
                }
            
            }
            
        //Ficha Roja corresponde a 2
        }else if (arregloTablero[m][n] === 2){
            var piezaRoja = document.createElement('img');
            piezaRoja.src = 'imgs/PiezaRoja.png';
            piezaRoja.alt = 'Pieza_Roja';
            piezaRoja.className = 'fichas';
            document.getElementById('fila' + m +'columna' + n).appendChild(piezaRoja);
            document.getElementById('fila' + m +'columna' + n).addEventListener('click', buttonClick);
            function buttonClick(){               
                for (var m = 0; m < arregloTablero.length; m++) {  
                    for (var n = 0; n < arregloTablero.length; n++) { 
                        if (arregloTablero[m][n] === 2){
                            selecciona = document.getElementById('fila' + m +'columna' + n);
                            selecciona.style.backgroundColor = 'red';    
                        }
                        
                    }
                }
            
            }
        }
        else if (arregloTablero[m][n] === 0){
            var casillaVacia = document.createElement('img');
            casillaVacia.src = 'imgs/nada.png';
            casillaVacia.alt = 'nada';
            casillaVacia.className = 'fichas';
            document.getElementById('fila' + m +'columna' + n).appendChild(casillaVacia);
            document.getElementById('fila' + m +'columna' + n).addEventListener('click', buttonClick);
            function buttonClick(){                
                for (var m = 0; m < arregloTablero.length; m++) {  
                    for (var n = 0; n < arregloTablero.length; n++) { 
                        if (arregloTablero[m][n] === 0){
                            selecciona = document.getElementById('fila' + m +'columna' + n);
                            selecciona.style.backgroundColor = 'blue';    
                        }
                        
                    }
                }
            
            }     
        }
        
    }
}


console.log(arregloTablero[7][0])
arregloTablero[7][0] = '5';



/*
document.getElementById('fila5columna0').addEventListener('click', buttonClick);
document.querySelectorAll('.recuadroNegro[0][1]').addEventListener('click', buttonClick1);

function buttonClick(){
    selecciona = document.getElementById('fila5columna0');
    selecciona.style.backgroundColor = 'green';

}
function buttonClick1(){
    selecciona = document.getElementById('fila7columna0');
    selecciona.style.backgroundColor = 'red';

}

/*
var fichaMovil = document.getElementsByClassName('fichas').addEventListener('click', seleccion);

function seleccion(){
        fichaMovil.style.backgrounColor = '#000';
} */