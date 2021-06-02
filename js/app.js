var tablero = document.getElementById("tablero");
tamano = 8;
var arregloTablero = [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];
                

for (var i=0; i<tamano; i++) {
    var fila  =document.createElement("cuadro");
    fila.classList.add("fila")
    for (var j=0; j<tamano; j++) {
        if(i%2 == 0){
            if(j%2 == 0){
                var cuadro = document.createElement("cuadro");
                    cuadro.classList.add("recuadroBlanco");
                    fila.appendChild(cuadro);
                console.log('fila par recuadro blanco '+arregloTablero[i][j]);
                
            }
            else{
                var cuadro = document.createElement("cuadro");
                    cuadro.classList.add("recuadroNegro");
                    fila.appendChild(cuadro);
                console.log('fila par recuadro negro '+arregloTablero[i][j]);
            }
        }
        else{
            if(j%2 == 0){
                var cuadro = document.createElement("cuadro");
                    cuadro.classList.add("recuadroNegro");
                    fila.appendChild(cuadro);
                console.log('fila impar recuadro negro '+arregloTablero[i][j]);
            }
            else{
                var cuadro = document.createElement("cuadro");
                    cuadro.classList.add("recuadroBlanco");
                    fila.appendChild(cuadro);
                console.log('fila impar recuadro blanco '+arregloTablero[i][j]);
            }
        }       
    } 
    tablero.appendChild(fila);
}
console.log(arregloTablero[0][0])