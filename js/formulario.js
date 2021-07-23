
var form = document.getElementById('formulario');
var nombre = document.getElementById('nombre'); 
var email = document.getElementById('email');
var comentario = document.getElementById('mensaje');

formulario.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envie con los datos por defecto
    e.preventDefault();
    // Validamos los campos
    var formatoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(nombre.value.length < 6){
        alert('El campo está vacío o el nombre es demasiado corto');
    } else {
        if (!formatoEmail.test(email.value)) {
            alert('email inválido');
        } else {
            if (comentario.value.length < 5) {
                alert('El campo está vacío o el comentario es demasiado breve');
            } else {
                // Abrimos la herramienta de envío de correos y reseteamos campos
                formulario.reset();
                window.open('mailto:gonzalodecastro1@gmail.com');
            }
        }
    }
})



