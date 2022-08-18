class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }
    countMascotas(){
        console.log(`${this.mascotas.length}`);
    }
    getBooksNames(libros){
        this.libros.map((l)=>{
            console.log(`${l.nombreLibro}`)})
        }
    getBooksAutor(libros){
        this.libros.map((l)=>{
            console.log(`${l.autorLibro}`);
        }
        )
    }
    addBook(nombreLibro, autorLibro){
        this.libros.push({nombreLibro, autorLibro})
    }
    }


    const persona = new Usuario("Fernando", "Abrego")
    persona.getFullName();
    persona.addMascota("Roger");
    persona.countMascotas();
    persona.addBook("El psicoanalista", "John Katzenbach")
    persona.getBooksNames();
    persona.getBooksAutor();