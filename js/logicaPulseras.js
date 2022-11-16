
// variable que tendra los anillos traidos de la API
let pulserasApi = [];

let totalCarrito;
let contenedor = document.getElementById("productos");
let contenidoCarro = document.getElementById("carrito-productos");
let precioTotalCarro = document.getElementById("precio-total");
let finCompra = document.getElementById("fin-compra");

// convierto a objetos los productos de la clave "carrito-productos" y los asigna a carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length != 0){
    carritoTable();
}

// Funcion asincronica
obtenerProductos();

// creo funcion que  construira la tabla que tendra los productos del carrito
function carritoTable(){
    for(const pulseras of carrito){
        // Realizo desestructuracion del objeto y sus propiedades
        const {id , nombre, precio} = pulseras
        contenidoCarro.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
    `;
    }
    // Actualizo el total del carrito
    totalCarrito = carrito.reduce((acumulador,pulsera)=> acumulador + pulsera.precio,0);
    let infoTotal = precioTotalCarro;
    infoTotal.innerText="Total a pagar $: " + totalCarrito;
}
// creo funcion de renderizado de productos
function cardsProductos(){
    for (const pulsera of pulserasApi){
        // Realizo desestructuracion del objeto y sus propiedades
        const {id , nombre, precio, foto} = pulsera
        //Creo una CARD para cada pulsera
        contenedor.innerHTML += `
            <div class="card col-sm-4">
                <img src=${foto} class="card-img-top-size" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${id}</h5>
                    <p class="card-text">${nombre}.</p>
                    <p class="card-text">$ ${precio}.</p>
                    <button id= "btn${id}" href="#" class="btn btn-primary"> Agregar al carrito </button>
                </div>
            </div>
        `;
    }
    // Agrego Evento a cada boton de cada CARD de cada producto
    pulserasApi.forEach((pulsera)=>{
        document.getElementById(`btn${pulsera.id}`).addEventListener("click", function(){ // le asignamos el evento de click y que con ese click agregue al carrito 
            agregarAlCarrito(pulsera);
        });
    });
}

function agregarAlCarrito(pulseraAgregada){
    // Agrego anillo elegido por el usuario por medio del CLICK en boton Comprar al carrito
    carrito.push(pulseraAgregada);

    // Agrego SweetAlert por cada anillo agregado al carrito
    Swal.fire({
        title: pulseraAgregada.nombre,
        text: "se agrego al carrito",
        imageUrl: pulseraAgregada.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
    });

    // Creo contenido Visual de cada pulera agregada al carrito
    contenidoCarro.innerHTML +=`
    <tr>
        <td>${pulseraAgregada.id}</td>
        <td>${pulseraAgregada.nombre}</td>
        <td>${pulseraAgregada.precio}</td>
        <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
    </tr>    
    `;

    totalCarrito = carrito.reduce((acumulador,pulsera)=> acumulador + pulsera.precio,0);
    let infoTotal = precioTotalCarro;
    infoTotal.innerText="Total a pagar $: " + totalCarrito;

    // actualizo LocalStorage
    localStorage.setItem("carrito",JSON.stringify(carrito));

}

//Para eliminar prods del carro
function eliminar(ev){ // EV trae a todos los eventos que integran el objeto creado por el click en el boton del tachito.

    let fila = ev.target.parentElement.parentElement; // fila = quien dispara el evento (boton de tachito)

    let id = fila.children[0].innerText; // identifico el primer hijo de fila (el ID) 

    let indice = carrito.findIndex(producto => producto.id == id); // busco el producto con ese ID

    //remueve el producto del carrito
    carrito.splice(indice,1);

    //remueve la fila del producto
    fila.remove();

    //actualizo el total
    totalCarrito = carrito.reduce((acumulador,pulsera)=> acumulador + pulsera.precio,0);
    let infoTotal = precioTotalCarro;
    infoTotal.innerText="Total a pagar $: " + totalCarrito;

    //Vuelvo a actualizar el Storage
    localStorage.setItem("carrito",JSON.stringify(carrito));
} 

// Por medio de esta funcion traigo los objetos de la API creada en MOCKAPI
function obtenerProductos(){
    const URLpulseras = "https://636cf68691576e19e31aef53.mockapi.io/api/pulseras";
    fetch(URLpulseras)
        .then(respuesta => respuesta.json())
        .then(pulseras => {
            pulserasApi = pulseras
            cardsProductos();
        })

}

// Creo boton de Finalizar compra.
finCompra.innerHTML = `
    <div>
        <button id= "btn-compra" href="#" class="btn btn-primary btn-lg btn-success"> Finalizar Compra </button>
    </div>
`;
finCompra.onclick = () => {
    if(carrito.length==0){
        Swal.fire({
            title: 'El carro está vacío',
            text: 'compre algun producto',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        carrito = [];
        contenidoCarro.innerHTML="";
        let infoTotal = precioTotalCarro;
        infoTotal.innerText="Total a pagar $: ";
        localStorage.clear();

        Toastify({
            text: "Pronto recibirá un mail de confirmacion",
            duration: 3000,
            gravity: 'top',
            position: 'center',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();

    }
}