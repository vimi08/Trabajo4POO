
function mostrarEnPantalla(mensaje) {
  const pantalla = document.getElementById("pantalla");
  pantalla.innerHTML += `<p>${mensaje}</p>`;
  console.log(mensaje);
}

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre.trim();
    this.telefono = telefono;
  }
  esIgualA(otroContacto) {
    return this.nombre.toLowerCase() === otroContacto.nombre.toLowerCase();
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.tamanoMaximo = tamano;
    this.contactos = [];
  }

  agendaLlena() {
    return this.contactos.length >= this.tamanoMaximo;
  }

  huecosLibres() {
    return this.tamanoMaximo - this.contactos.length;
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.esIgualA(contacto));
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      mostrarEnPantalla("La agenda está completa, no puedes añadir más contactos.");
      alert("⚠️ La agenda está completa, no puedes añadir más contactos.");
      return;
    }
    if (this.existeContacto(contacto)) {
      mostrarEnPantalla(`Ya existe un contacto con el nombre "${contacto.nombre}".`);
      alert(`⚠️ Ya existe un contacto con el nombre "${contacto.nombre}".`);
      return;
    }
    this.contactos.push(contacto);
    mostrarEnPantalla(`✅ El contacto "${contacto.nombre}" se guardó correctamente en la agenda.`);
    alert(`✅ El contacto "${contacto.nombre}" se guardó correctamente en la agenda.`);
    this.mostrarAgenda();
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      mostrarEnPantalla("📭 La agenda todavía no tiene contactos registrados.");
      alert("📭 La agenda todavía no tiene contactos registrados.");
      return;
    }
    mostrarEnPantalla("Contactos guardados en la agenda:");
    let listaTexto = "Contactos guardados en la agenda:\n";
    this.contactos.forEach((c, index) => {
      const info = `${index + 1}. Nombre: ${c.nombre} | Teléfono: ${c.telefono}`;
      mostrarEnPantalla(info);
      listaTexto += info + "\n";
    });
    alert(listaTexto);
  }

  buscarContacto(nombre) {
    const encontrado = this.contactos.find(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (encontrado) {
      mostrarEnPantalla(`🔎 Contacto localizado → Nombre: ${encontrado.nombre}, Teléfono: ${encontrado.telefono}`);
      alert(`🔎 Contacto localizado → Nombre: ${encontrado.nombre}, Teléfono: ${encontrado.telefono}`);
    } else {
      mostrarEnPantalla(`❌ No se encontró ningún contacto con el nombre "${nombre}".`);
      alert(`❌ No se encontró ningún contacto con el nombre "${nombre}".`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex((c) => c.esIgualA(contacto));
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      mostrarEnPantalla(`🗑️ El contacto "${contacto.nombre}" fue eliminado exitosamente.`);
      alert(`🗑️ El contacto "${contacto.nombre}" fue eliminado exitosamente.`);
      this.mostrarAgenda();
    } else {
      mostrarEnPantalla(`❌ No se pudo eliminar: el contacto "${contacto.nombre}" no está en la agenda.`);
      alert(`❌ No se pudo eliminar: el contacto "${contacto.nombre}" no está en la agenda.`);
    }
  }

  mostrarAgenda() {
    if (this.contactos.length === 0) {
      mostrarEnPantalla("📭 La agenda está vacía.");
      return;
    }
    mostrarEnPantalla("📒Agenda actualizada:");
    this.contactos.forEach(c => {
      mostrarEnPantalla(`👤 ${c.nombre} - ${c.telefono}`);
    });
  }
}

// Definir tamaño de la agenda
const definirTamano = confirm(
  "¿Deseas definir un tamaño personalizado para tu agenda? (Cancelar para usar el valor por defecto: 10)"
);
let miAgenda;

if (definirTamano) {
  let tam = parseInt(prompt("Introduce el tamaño máximo de la agenda:"), 10);
  if (isNaN(tam) || tam <= 0) {
    alert("Tamaño inválido. Se usará el tamaño por defecto (10).");
    miAgenda = new Agenda();
  } else {
    miAgenda = new Agenda(tam);
  }
} else {
  miAgenda = new Agenda();
}

// Menú interactivo
let opcion = "";
while (opcion !== "8") {
  opcion = prompt(
    "PANEL DE GESTIÓN DE CONTACTOS\n" +
    "1. Añadir contacto\n" +
    "2. Verificar si existe un contacto\n" +
    "3. Listar todos los contactos\n" +
    "4. Buscar contacto por nombre\n" +
    "5. Eliminar un contacto\n" +
    "6. Comprobar si la agenda está llena\n" +
    "7. Ver huecos libres disponibles\n" +
    "8. Salir\n\n" +
    "Selecciona una opción (1-8):"
  );

  switch (opcion) {
    case "1": {
      let nom = prompt("Introduce el nombre del contacto:");
      let tel = prompt("Introduce el teléfono del contacto:");
      if (nom && tel) {
        miAgenda.aniadirContacto(new Contacto(nom, tel));
      } else {
        alert("⚠️ Campos inválidos. No se guardó el contacto.");
      }
      break;
    }
    case "2": {
      let nom = prompt("Introduce el nombre del contacto a verificar:");
      if (nom) {
        let existe = miAgenda.existeContacto(new Contacto(nom, ""));
        if (existe) {
          mostrarEnPantalla("✅ Sí, el contacto ya existe en la agenda.");
          alert("✅ Sí, el contacto ya existe en la agenda.");
        } else {
          mostrarEnPantalla("❌ El contacto no está registrado en la agenda.");
          alert("❌ El contacto no está registrado en la agenda.");
        }
      }
      break;
    }
    case "3":
      miAgenda.listarContactos();
      break;
    case "4": {
      let nom = prompt("Introduce el nombre del contacto a buscar:");
      if (nom) miAgenda.buscarContacto(nom);
      break;
    }
    case "5": {
      let nom = prompt("Introduce el nombre del contacto a eliminar:");
      if (nom) miAgenda.eliminarContacto(new Contacto(nom, ""));
      break;
    }
    case "6":
      const llena = miAgenda.agendaLlena()
        ? "📕 La agenda está llena."
        : "📗 Todavía queda espacio disponible.";
      mostrarEnPantalla(llena);
      alert(llena);
      break;
    case "7":
      const huecos = `📂 Quedan ${miAgenda.huecosLibres()} espacios libres en la agenda.`;
      mostrarEnPantalla(huecos);
      alert(huecos);
      break;
    case "8":
      mostrarEnPantalla("👋 Cerrando la agenda telefónica. ¡Hasta pronto!");
      alert("👋 Cerrando la agenda telefónica. ¡Hasta pronto!");
      break;
    case null:
      opcion = "8";
      break;
    default:
      alert("⚠️ Opción no válida. Inténtalo de nuevo.");
      break;
  }
}
