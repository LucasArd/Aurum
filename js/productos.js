
// Aqui trabajermos todo el codigo javascript correspondiente a la pagina de Anillos... //

// Pendientes: agregar, sumas o restas o divisiones o multiplicaciones , agregar metodo de busqueda con find


let carrito = [];
class Anillo {
    constructor(id, nombre, descripcion, precio, foto, stock){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.foto = foto;
        this.stock = stock;
    }
    // metodo del Anillo para restarle el stock
    restaStock(){
        this.stock = this.stock -1;
        
    }
}

const anillo1 = new Anillo(01, "anillo linea oro", "anillo de acero y oro", 5500,"../img/anillo1.jfif", 10);
const anillo2 = new Anillo(02, "anillo escamado", "anillo de acero con escamado negro", 2500,"../img/anillo2.jfif", 10);
const anillo3 = new Anillo(03, "anillo brujula", "anillo de acero con brujula tallada", 3500,"../img/anillo3.jfif", 10);
const anillo4 = new Anillo(04, "anillo serpiente", "anillo de acero con serpiente arriba", 4500,"../img/anillo4.jfif", 10);
const anillo5 = new Anillo(05, "anillo moderno", "anillo de acero negro con linea en azul", 3500,"../img/anillo5.jfif", 10);
const anillo6 = new Anillo(06, "anillo total serpiente", "anillo de acero con forma de serpiente", 2500,"../img/anillo6.jfif", 10);

let misAnillos = [anillo1, anillo2, anillo3, anillo4, anillo5, anillo6]; 

// Creo funcion por si quiero crear y agregar automaticamente a mi array de Anillos
function nuevoAnillo (id, nombre, descripcion, precio, foto, stock) {
    const nuevoAnillo = ( new Anillo (id, nombre, descripcion, precio, foto, stock))
    misAnillos.push(nuevoAnillo);
};



