
// defino variables para implementar datos dinamicos en el html
let contenedor = document.getElementById("productos");
let contenidoCarro = document.getElementById("carrito-productos");
let precioTotalCarro = document.getElementById("precio-total");


// Al iniciar la pagina recorro localStorage y aviso al usuario por medio de un SweetAlert si tiene productos guardados o no y consulto si desea continuar la compra o volver a comenzar.
if (localStorage != 0){
    retornarAnillosStorage();
    Swal.fire({
        title: 'Parece que tienes productos guardados en el carrito... Deseas continuar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Continuar compra',
        denyButtonText: `Borrar carrito`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Genial',)
        } else if (result.isDenied) {
          Swal.fire('Carrito borrado, puedes comenzar de nuevo!')
          carrito = [];
          localStorage.clear();
          contenidoCarro.innerHTML = ''; 
          precioTotalCarro.innerHTML = '';
        }
      })
    }



// creo funcion para retornar Storage y agregarlo al carrito
function retornarAnillosStorage(){
    let anillosRetornadosObjects = [];
    // recorro el localStorage y recupero clave y valor en forma de string
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let anillosRetornados = localStorage.getItem(clave);

        // guardo el elementos del localStorage en forma de objetos en un array
        let anillosRetornadosObj = JSON.parse(anillosRetornados);
        anillosRetornadosObjects.push(anillosRetornadosObj);
        console.log(anillosRetornadosObjects);

        // muestro visualmente en el carrito lo que el usuario habia agregado anteriormente
        contenidoCarro.innerHTML +=`
        <li class="dropdown-item" href="#">  ${anillosRetornadosObj.nombre} $ ${anillosRetornadosObj.precio} </li>`;

        // Guardo el total de los productos en el localStorage 
        let total = anillosRetornadosObjects.reduce((sumador, anillosRetornados) => sumador + anillosRetornados.precio, 0);

        // Muestro visualmente el total del carrito
        precioTotalCarro.innerHTML = `
        Total a pagar $: ${total} 
    `;

    }

    
}





// Creo funcion de renderizado de CARDS de cada producto
function cardsProductos(){

    // recorro cada objeto creado
    for (const anillos of misAnillos){
        // Realizo desestructuracion del objeto y sus propiedades
        const {id , nombre, precio, foto} = anillos
        //Creo una CARD para cada Anillo
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${id}</h5>
                    <p class="card-text">${nombre}.</p>
                    <p class="card-text">$ ${precio}.</p>
                    <button id= "btn${id}" href="#" class="btn btn-primary"> Comprar </button>
                </div>
            </div>
        `;
    }

    // Agrego Evento a cada boton de cada CARD de cada producto
    misAnillos.forEach((anillos)=>{
        document.getElementById(`btn${anillos.id}`).addEventListener("click", function(){ // le asignamos el evento de click y que con ese click agregue al carrito 
            agregarAlCarrito(anillos);
        });
    });
}

cardsProductos();

function agregarAlCarrito(anilloAgregado){

    // Agrego anillo elegido por el usuario por medio del CLICK en boton Comprar al carrito
    carrito.push(anilloAgregado);

    // Agrego SweetAlert por cada anillo agregado al carrito
    Swal.fire({
        title: anilloAgregado.nombre,
        text: "se agrego al carrito",
        imageUrl: anilloAgregado.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
    });

    // Creo contenido Visual del anillo agregado al carrito
    contenidoCarro.innerHTML +=`
        <li class="dropdown-item" href="#">  ${anilloAgregado.nombre} $ ${anilloAgregado.precio} </li>
    `;

    // Calculo el precio total a pagar del carrito y creo contenido visual del mismo
    let precioTotalCarrito = carrito.reduce((sumador, anillosCarrito) => sumador + anillosCarrito.precio, 0);
    precioTotalCarro.innerHTML = `
        Total a pagar $: ${precioTotalCarrito} 
    `; 
    // ME FALTA AGREGAR A LA SUMA TOTAL LOS PRODUCTOS QUE YA HAYAN QUEDADO DE LA SESION ANTERIOR EN EL LOCAL STORAGE pero no encuentro la forma todavia...


    // Agrego cada anillo del carrito al LocalStorage.
    let anillosStorage = (clave, valor) =>{ localStorage.setItem(clave, valor); };
    for (const anillo of carrito){
        anillosStorage(anillo.id, JSON.stringify(anillo));
    }

}

// Creo boton de Finalizar compra.
let finCompra = document.getElementById("fin-compra");
finCompra.innerHTML = `
    <div>
        <button id= "btn-compra" href="#" class="btn btn-primary"> Finalizar Compra </button>
    </div>
`;

// Agrego SweetAlert al finalizar la comprar, vacio carrito, limpio el localStorage y borro estado visual del carrito.
finCompra.onclick = () => {
    Swal.fire('Compra Finalizada');
    carrito = [];
    localStorage.clear();
    contenidoCarro.innerHTML = ''; 
    precioTotalCarro.innerHTML = '';
};














