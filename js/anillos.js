
// Aqui trabajermos todo el codigo javascript correspondiente a la pagina de Anillos... //

// Pendientes: agregar, sumas o restas o divisiones o multiplicaciones , agregar metodo de busqueda con find


const carrito = [];
class Anillo {
    constructor(id, nombre, descripcion, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
    // metodo del Anillo para restarle el stock
    restaStock(){
        this.stock = this.stock -1;
    }
}

const anillo1 = new Anillo(01, "anillo linea oro", "anillo de acero y oro", 5500, 10);
const anillo2 = new Anillo(02, "anillo escamado", "anillo de acero con escamado negro", 2500, 10);
const anillo3 = new Anillo(03, "anillo brujula", "anillo de acero con brujula tallada", 3500, 10);
const anillo4 = new Anillo(04, "anillo serpiente", "anillo de acero con serpiente arriba", 4500, 10);
const anillo5 = new Anillo(05, "anillo moderno", "anillo de acero negro con linea en azul", 3500, 10);
const anillo6 = new Anillo(06, "anillo total serpiente", "anillo de acero con forma de serpiente", 2500, 10);

let misAnillos = [anillo1, anillo2, anillo3, anillo4, anillo5, anillo6];

let catalogoAnillos = " \n "
function menuDeAnillos(){
    for (const anillo of misAnillos){
        catalogoAnillos += ("ID: " + anillo.id + " -- " + anillo.nombre.toUpperCase() + ",  " + anillo.descripcion + " $" + anillo.precio + " \n ");

    }
}
menuDeAnillos();

let seguirComprando;

function seguirCompra() {
    do{
        let opcionUser = prompt("Bienvenido a nuestra seccion de Anillos, a continuacion podra ver nuestros productos y elegir los que desee comprar por su numero de ID" + catalogoAnillos + "Porfavor ingrese el numero de ID del anillo que desea comprar");

        const anilloElegido = misAnillos.find( elemento => elemento.id == opcionUser);

        carrito.push(anilloElegido);

        seguirComprando = prompt("Perfecto ha elegido el anillo " + opcionUser + ":" + anilloElegido.nombre.toUpperCase() + ", el precio a abonar es de $" + anilloElegido.precio + ". Si desea seguir comprando presione 1, para salir presione cualquier otra tecla" );

        let anillosCarro = [];
        let precioTotal = 0;
        if (seguirComprando != "1"){
            for (const anillos of carrito){
                anillosCarro += (" \n " + anillos.nombre + " a $" + anillos.precio + " \n ");
            }
            for (const precioAnillo of carrito){
                precioTotal += precioAnillo.precio 
            }

        alert( " Usted va a llevar :" + anillosCarro + " \n Por un total de $" + precioTotal);

        }

                

    }while(seguirComprando == "1");
}

seguirCompra();

