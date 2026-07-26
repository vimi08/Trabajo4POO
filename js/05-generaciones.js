/*Crea un objeto “persona” que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
 Si quieres añadir alguna propiedad extra puedes hacerlo.
 
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

const generaciones = [
  {
    nombre: "Generación Beta",
    desde: 2025,
    hasta: 2039,
    rasgo: "Adaptabilidad",
  },
  {
    nombre: "Generación Alfa",
    desde: 2011,
    hasta: 2024,
    rasgo: "Hiperconectividad",
  },
  { nombre: "Generación Z", desde: 1994, hasta: 2010, rasgo: "Irreverencia" },
  {
    nombre: "Generación Y (Millennials)",
    desde: 1981,
    hasta: 1993,
    rasgo: "Frustración",
  },
  {
    nombre: "Generación X",
    desde: 1969,
    hasta: 1980,
    rasgo: "Obsesión por el éxito",
  },
  { nombre: "Baby Boom", desde: 1949, hasta: 1968, rasgo: "Ambición" },
  {
    nombre: "Silent Generation",
    desde: 1930,
    hasta: 1948,
    rasgo: "Austeridad",
  },
];

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.dni = dni || this.generaDNI();
  }

  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  mostrarGeneracion() {
    const gen = generaciones.find(
      (g) => this.anioNacimiento >= g.desde && this.anioNacimiento <= g.hasta,
    );
    return gen
      ? `${this.nombre} pertenece a la ${gen.nombre}. Rasgo: ${gen.rasgo}`
      : `${this.nombre} no pertenece a una generación definida.`;
  }

  esMayorDeEdad() {
    return this.edad >= 18
      ? `${this.nombre} es mayor de edad.`
      : `${this.nombre} es menor de edad.`;
  }

  mostrarDatos() {
    return `<h3>👤 Datos de la persona</h3>
    <p>Nombre: ${this.nombre}</p>
    <p>Edad: ${this.edad}</p>
    <p>Sexo: ${this.sexo}</p>
    <p>Peso: ${this.peso} kg</p>
    <p>Altura: ${this.altura} cm</p>
    <p>Año de nacimiento: ${this.anioNacimiento}</p>
    <p>DNI: ${this.dni}</p>`;
  }
}

const pantalla = document.getElementById("pantalla");

//personas
const personas = [
  new Persona("Victoria", 29, "M", 68, 172, 1996),
  new Persona("Candela", 41, "M", 80, 167, 1984, 30954893),
  new Persona("Joe", 56, "H", 75, 177, 1970, 20095893),
];

//muesta los datos de todas las personas
personas.forEach((p) => {
  pantalla.innerHTML += p.mostrarDatos();
  pantalla.innerHTML += `<p>${p.esMayorDeEdad()}</p>`;
  pantalla.innerHTML += `<p>${p.mostrarGeneracion()}</p><hr>`;
});
