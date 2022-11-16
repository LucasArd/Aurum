// creo variable para trabajar con el DOM

// let contacto = document.getElementById('btn-abrir-modal');

// contacto.addEventListener('click', respuestaClickContacto);


// function respuestaClickContacto(){
//     contacto.innerHTML = `
//         <form action = "registrar.contacto" method = "POST" class="registro-contacto">
//             <h2 class= "titulo-formulario"> Datos de contacto </h2>
//             <div class="contendor-inputs">
//                 <input type="text" name="nombre" placeholder="Nombre" class="input-1" required>
//                 <input type="text" name="email" placeholder="correo electronico" class="input-33" required>
//                 <input type="text" name="domicilio" placeholder="domicilio" class="input-33" required>
//                 <input type="text" name="telefono" placeholder="telefono" class="input-33" required>
//                 <input type="submit" value="Registrar" class="btn-enviar">
//             </div>  
//         </form>
    
//     `;
// }

const btnAbrirModal = document.querySelector('#btn-abrir-modal');
const btnCerrarModal = document.querySelector('#btn-cerrar-modal');
const modal = document.querySelector('#modal');

btnAbrirModal.addEventListener('click', () => {
    modal.showModal();
});

btnCerrarModal.addEventListener('click', () => {
    modal.close();
});

