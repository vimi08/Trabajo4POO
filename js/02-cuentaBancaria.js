/*2-Escribe un programa que cree 
un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción,
 ingresar y extraer dinero y
  volver a mostrar la descripción del estado de la cuenta.

*/



const pantalla = document.getElementById("pantalla");

const cuenta = {
  // propiedades
  titular: "Alex",
  saldo: 0,
  // métodos
  ingresar: function (cantidad) {
    this.saldo += cantidad;
    const texto = `<p> Se ingresaron $${cantidad}. Saldo actual: $${this.saldo}</p>`;
    pantalla.innerHTML += texto;
  },

  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      const texto = `<p>Se extrajeron $${cantidad}. Saldo actual: $${this.saldo}</p>`;
      pantalla.innerHTML += texto;
    } else {
      const texto = `<p> No tenés suficiente saldo para realizar una extracción de $${cantidad}. Saldo actual: $${this.saldo}</p>`;
      pantalla.innerHTML += texto;
    }
  },

  informar: function () {
    const texto = `<h3> Estado de la cuenta</h3>
    <p>Titular: ${this.titular}</p>
    <p>Saldo: $${this.saldo}</p>`;
    pantalla.innerHTML += texto;
  }
};

// muestra el estado inicial
cuenta.informar();

cuenta.ingresar(500);
cuenta.extraer(200);
cuenta.extraer(400); // ejemplo si es mayor al saldo disponible
cuenta.informar();
