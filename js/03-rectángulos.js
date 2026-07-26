/*Escribe un programa para que permita
 crear objetos “rectángulos”, con las propiedades de alto y ancho,
  mas los métodos necesarios para modificar y 
  mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  mostrar() {
    const texto = `<h3> Rectángulo</h3>
    <p>Alto: ${this.alto}</p>
    <p>Ancho: ${this.ancho}</p>`;
    pantalla.innerHTML += texto;
  }
  calcularPerimetro() {
    const perimetro = 2 * (this.alto + this.ancho);
    pantalla.innerHTML += `<p>📏 Perímetro: ${perimetro}</p>`;
  }
  calcularArea() {
    const area = this.alto * this.ancho;
    pantalla.innerHTML += `<p>🟦 Área: ${area}</p>`;
  }

  modificar(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
    pantalla.innerHTML += `<p>-Rectángulo modificado: alto = ${this.alto}, ancho = ${this.ancho}</p>`;
  }
}

const pantalla = document.getElementById("pantalla");

// crear el  objeto
const rectangulo1 = new Rectangulo(6, 18);

// mostrar el estado inicial
rectangulo1.mostrar();
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();

// modifica las  propiedades
rectangulo1.modificar(8, 4);
rectangulo1.mostrar();
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();
