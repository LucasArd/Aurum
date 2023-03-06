let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let consulta = document.getElementById('consulta');
let form = document.getElementById('btn-enviar');

let nameValue = nombre.value.trim(); // remuevo espacio en blanco del string

function validacion() {
    if (nombre.value === '' || email.value === '' || email.value === ''){
        alert("los campos NOMBRE, EMAIL y CONSULTA son obligatorios");
        return false;
    }

    else if (nombre.value.length > 15 || nombre.value.length < 2){
        alert("el nombre es demasiado largo o demasiado corto");
        return false;
    }

    else if(isValidString(nameValue)){
        alert("El nombre solo puede tener letras")
        return false;
    }

    else if (telefono.value.length > 10 || telefono.valure.length < 8){
        alert("el telefono no es valido");
        return false;
    }
    else if (isNaN(telefono.value)){
        alert("el telefono no es valido, solo se aceptan numeros");
        return false;
    }
    else{
        alert(" Gracias! Pronto recibiras nuestra respuesta");
        return;
    }

};

function isValidString(value) {
    const regex = /^[a-zA-Z\s]*$/; // permite solo letras mayúsculas y minúsculas, y espacios en blanco
    return regex.test(value);
}