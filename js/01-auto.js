/*Crea un objeto llamado auto que tenga algunas 
características como el color, marca, modelo y 
si está encendido o apagado. 
Crea los métodos necesarios para permitir encender 
y apagar el auto.

Output:
objeto.encender();
objeto.apagar();
auto encendido
El auto se apagó
*/

const auto = {
  // propiedades
  color: "Eucalyptus Green",
  marca: "BMW",
  modelo: "BMW i3 Neue Klasse - Berlina eléctrica",
  encendido: false,

  // métodos
  encender: function () {
    this.encendido = true;
    const texto = `<p> 🚗 Auto encendido</p>`;
    pantalla.innerHTML += texto;
  },

  apagar: function () {
    this.encendido = false;
    const texto = `<p> 🔴 El auto se apagó</p>`;
    pantalla.innerHTML += texto;
  },

  mostrarEstado: function () {
    const estado = this.encendido ? "El auto está encendido ✅ " : " El auto está apagado❌";
    pantalla.innerHTML += `<p>${estado}</p>`;
  }
};

console.log(auto);

const pantalla = document.getElementById("pantalla");

// muestra datos iniciales del objeto
let datosObjeto = `<h3>Datos del auto</h3>
<p>Color: ${auto.color}</p>
<p>Marca: ${auto.marca}</p>
<p>Modelo: ${auto.modelo}</p>
<p>Encendido: ${auto.encendido}</p>`;

pantalla.innerHTML += datosObjeto;

// reorre
const mostrarObjeto = () => {
  datosObjeto += "<h3>Recorremos todo el objeto</h3>";
  for (let clave in auto) {
    if (typeof auto[clave] !== "function") {
      datosObjeto += `<p>${clave}: ${auto[clave]}</p>`;
    }
  }
  pantalla.innerHTML += datosObjeto;
};

mostrarObjeto();

// Uso de los metodos
auto.encender();
auto.mostrarEstado();
auto.apagar();
auto.mostrarEstado();
