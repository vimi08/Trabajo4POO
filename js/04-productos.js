/*Escribe un programa para crear objetos ”producto”.
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Crea tres objetos “producto” y guárdalas en un array.
Por último, utilice el método imprime datos 
para mostrar por pantalla los valores de los tres objetos.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    const texto = `<h3>Producto</h3>
    <p>Código: ${this.codigo}</p>
    <p>Nombre: ${this.nombre}</p>
    <p>Precio: $${this.precio}</p>`;
    pantalla.innerHTML += texto;
  }
}

const pantalla = document.getElementById("pantalla");

// productos
const producto1 = new Producto("NTB01", "Notebook Lenovo", 850000);
const producto2 = new Producto("S006", "Celular Samsung", 450000);
const producto3 = new Producto("A003", "Auriculares Sony", 120000);

//array para guardar
const productos = [producto1, producto2, producto3];

// mostrar los datos
productos.forEach((prod) => prod.imprimeDatos());
