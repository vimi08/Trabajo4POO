/*Crear un objeto “libro” que contenga al menos las siguientes
propiedades:
ISBN
Título
Autor
Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/


class Libro {
  constructor(isbn, titulo, autor, paginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  mostrarLibro() {
    const mensaje = `El libro "${this.titulo}" con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas.`;
    console.log(mensaje); //consola
    pantalla.innerHTML += `<p>${mensaje}</p>`; //pantalla
  }
}

const pantalla = document.getElementById("pantalla");

const libro1 = new Libro("978-0-123456-78-9", "El principito", "Antoine de Saint-Exupéry", 96);
const libro2 = new Libro("978-0-987654-32-1", "Cien años de soledad", "Gabriel García Márquez", 471);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.paginas > libro2.paginas) {
  console.log(`"${libro1.titulo}" tiene más páginas.`);
  pantalla.innerHTML += `<p>"${libro1.titulo}" tiene más páginas.</p>`;
} else if (libro2.paginas > libro1.paginas) {
  console.log(`"${libro2.titulo}" tiene más páginas.`);
  pantalla.innerHTML += `<p>"${libro2.titulo}" tiene más páginas.</p>`;
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
  pantalla.innerHTML += `<p>Ambos libros tienen la misma cantidad de páginas.</p>`;
}

