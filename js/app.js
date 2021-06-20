//Arreglo de tablero
var arregloTablero = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0]
];

//Variables
var casilla, piezaMovil, piezaMovilSeleccionada, posicion,jugador1 ,jugador2; 
var turno = 1;

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
}

//Recorre el arreglo para darle boton de seleccion por casilla
var casillas = document.getElementsByClassName('recuadroNegro'); 
for(x=0; x<casillas.length; x++) {
    casillas[x].addEventListener('click', seleccionaPieza);
    }
    console.log(casillas.length)

//Turno 1 Piezas Blancas
function seleccionaPieza() {
    if (turno == 1){
        if(!piezaMovilSeleccionada && this.firstElementChild) {
            casilla = this; 
            piezaMovil = casilla.innerHTML;
            this.querySelector('img[alt="Pieza_Blanca"]').classList.add("pintado"); 
            piezaMovilSeleccionada = true;
            
            //Pinta la ficha del titulo del jugador de turno
            var fichaJugador1 = document.getElementById("img-jugador1");
            fichaJugador1.classList.add("pintado");
            var fichaJugador2 = document.getElementById("img-jugador2");
            fichaJugador2.classList.remove("pintado");
            
            //Pinta el nombre del jugador de turno y despinta al otro
            var jugador1 = document.getElementById("jugador1");
            jugador1.style.color = 'lightblue';
            var jugador2 = document.getElementById("jugador2");
            jugador2.style.color = '';
            
        }
    else if(piezaMovilSeleccionada && !this.querySelector('img[alt="Pieza_Blanca"]')  ){
            casilla.innerHTML= ''; 
            this.innerHTML = piezaMovil;
            piezaMovilSeleccionada = false;
            posicion = this;
        if (posicion != casilla ){
            turno = 2;

            //Despinta ficha de titulo cuando ya no es tu turno
            var fichaJugador1 = document.getElementById("img-jugador1");
            fichaJugador1.classList.remove("pintado");
            var fichaJugador2 = document.getElementById("img-jugador2");
            fichaJugador2.classList.add("pintado");

            //Despinta nombre cuando ya no es tu turno
            var jugador1 = document.getElementById("jugador1");
            jugador1.style.color = '';
            var jugador2 = document.getElementById("jugador2");
            jugador2.style.color = 'lightblue';
            }            
        }
    
}    //Turno 2 Piezas Rojas
    else if (turno == 2){
        if(!piezaMovilSeleccionada && this.firstElementChild) {
            casilla = this; 
            piezaMovil = casilla.innerHTML; 
            this.querySelector('img[alt="Pieza_Roja"]').classList.add("pintado"); 
            piezaMovilSeleccionada = true;
            
            //Pinta la ficha del titulo del jugador de turno
            var fichaJugador2 = document.getElementById("img-jugador2");
            fichaJugador2.classList.add("pintado");
            var fichaJugador1 = document.getElementById("img-jugador1");
            fichaJugador1.classList.remove("pintado");
            //Pinta el nombre del jugador de turno y despinta al otro
            var jugador1 = document.getElementById("jugador1");
            jugador1.style.color = '';
            var jugador2 = document.getElementById("jugador2");
            jugador2.style.color = 'lightblue'; 
            
        }
    else if(piezaMovilSeleccionada && !this.querySelector('img[alt="Pieza_Roja"]')){
            casilla.innerHTML= ''; 
            this.innerHTML = piezaMovil; 
            piezaMovilSeleccionada = false;
            posicion = this;
            console.log(casilla.id);
        if (posicion != casilla){
            turno = 1;
             //Despinta ficha de titulo cuando ya no es tu turno
            var fichaJugador2 = document.getElementById("img-jugador2");
            fichaJugador2.classList.remove("pintado");
            var fichaJugador1 = document.getElementById("img-jugador1");
            fichaJugador1.classList.add("pintado");

            //Despinta nombre cuando ya no es tu turno
            var jugador1 = document.getElementById("jugador1");
            jugador1.style.color = 'lightblue';
            var jugador2 = document.getElementById("jugador2");
            jugador2.style.color = '';
            } 
        }    
    }
    
}

//Fichas
//Recorre el tablero y agrega las fichas de acuerdo al array arregloTablero
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


