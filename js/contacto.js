let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let consulta = document.getElementById('consulta');
let form = document.getElementById('btn-enviar');

function validacion() {
    if (nombre.value === '' || email.value === '' || email.value === ''){
        alert("los campos NOMBRE, EMAIL y CONSULTA son obligatorios");
        return false;
    }

    else if (nombre.value.length > 15 || nombre.value.length < 2){
        alert("el nombre es demasiado largo o demasiado corto");
        return false;
    }
    else if (telefono.value.length > 10){
        alert("el telefono no es valido");
        return false;
    }
    else if (isNaN(telefono.value)){
        alert("el telefono no es valido, solo se aceptan numeros");
        return false;
    }
};