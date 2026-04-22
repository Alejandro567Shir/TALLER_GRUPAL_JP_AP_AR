const btnAgregar = document.getElementById("btn-agregar");
const inputMision = document.getElementById("input-mision");
const inputPrioridad = document.getElementById("input-prioridad");
const inputFecha = document.getElementById("input-fecha");
const lista = document.getElementById("lista-misiones");

const btnTodas = document.getElementById("btn-todas");
const btnPendientes = document.getElementById("btn-pendientes");
const btnCompletados = document.getElementById("btn-completados");

const totalTareas = document.getElementById("total-tareas");
const tareasPendientes = document.getElementById("tareas-pendientes");
const tareasCompletadas = document.getElementById("tareas-completadas");

const menuDesplegable = document.querySelector(".menu-desplegable");

let filtroActual = "todas";

function esTablet() {
  return window.innerWidth >= 768 && window.innerWidth <= 1023;
}

function actualizarContadores() {
  const items = lista.children;
  let total = 0;
  let pendientes = 0;
  let completadas = 0;

  for (let i = 0; i < items.length; i++) {
    total++;
    if (items[i].classList.contains("pendiente")) pendientes++;
    if (items[i].classList.contains("completado")) completadas++;
  }

  totalTareas.textContent = total;
  tareasPendientes.textContent = pendientes;
  tareasCompletadas.textContent = completadas;
}

function aplicarFiltro() {
  const items = lista.children;

  for (let i = 0; i < items.length; i++) {
    if (filtroActual === "todas") {
      items[i].style.display = "flex";
    } else if (filtroActual === "pendientes") {
      items[i].style.display = items[i].classList.contains("pendiente") ? "flex" : "none";
    } else if (filtroActual === "completados") {
      items[i].style.display = items[i].classList.contains("completado") ? "flex" : "none";
    }
  }
}

function crearBoton(icono, clase) {
  const boton = document.createElement("button");
  boton.innerHTML = icono;
  boton.type = "button";
  boton.classList.add(clase);
  return boton;
}

if (menuDesplegable) {
  document.addEventListener("click", (e) => {
    if (esTablet() && !menuDesplegable.contains(e.target)) {
      menuDesplegable.removeAttribute("open");
    }
  });

  window.addEventListener("resize", () => {
    if (!esTablet()) {
      menuDesplegable.removeAttribute("open");
    }
  });
}

btnAgregar.addEventListener("click", () => {
  if (inputMision.value.trim() === "") return;

  const nuevaMision = document.createElement("div");
  nuevaMision.classList.add("item-mision", "pendiente");

  const circulo = document.createElement("div");
  circulo.classList.add("estado-circulo");

  const infoMision = document.createElement("div");
  infoMision.classList.add("info-tarea");

  const tituloMision = document.createElement("h4");
  tituloMision.textContent = inputMision.value;

  const etiquetaPrioridad = document.createElement("span");
  etiquetaPrioridad.classList.add("etiqueta");
  etiquetaPrioridad.textContent = inputPrioridad.value;

  if (inputPrioridad.value === "Alta") {
    etiquetaPrioridad.style.background = "#22c55e";
    etiquetaPrioridad.style.color = "#000";
  } else if (inputPrioridad.value === "Media") {
    etiquetaPrioridad.style.background = "#facc15";
    etiquetaPrioridad.style.color = "#000";
  } else if (inputPrioridad.value === "Baja") {
    etiquetaPrioridad.style.background = "#ef4444";
    etiquetaPrioridad.style.color = "#fff";
  }

  const ladoDerecho = document.createElement("div");
  ladoDerecho.classList.add("lado-derecho");

  const fechaMision = document.createElement("p");
  fechaMision.classList.add("fecha-tarea");

  if (inputFecha.value === "") {
    fechaMision.innerHTML = '<i class="fa-regular fa-calendar-days"></i> Sin fecha';
  } else {
    const partes = inputFecha.value.split("-");
    fechaMision.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  const contenedorBotones = document.createElement("div");
  contenedorBotones.classList.add("acciones");

  const btnVisto = crearBoton('<i class="fa-solid fa-check"></i>', "btn-visto");
  const btnEliminar = crearBoton('<i class="fa-regular fa-trash-can"></i>', "btn-eliminar");

  btnVisto.addEventListener("click", () => {
    nuevaMision.classList.remove("pendiente", "rehecha");
    nuevaMision.classList.add("completado");
    tituloMision.style.textDecoration = "line-through";
    tituloMision.style.opacity = "0.7";
    circulo.style.borderColor = "#22c55e";
    circulo.style.background = "#22c55e";

    const btnRehacer = crearBoton('<i class="fa-solid fa-rotate-left"></i>', "btn-rehacer");

    btnRehacer.addEventListener("click", () => {
      nuevaMision.classList.remove("completado");
      nuevaMision.classList.add("pendiente", "rehecha");
      tituloMision.style.textDecoration = "none";
      tituloMision.style.opacity = "1";
      circulo.style.borderColor = "#1e3a8a";
      circulo.style.background = "#1e3a8a";

      contenedorBotones.replaceChild(btnVisto, btnRehacer);
      actualizarContadores();
      aplicarFiltro();
    });

    contenedorBotones.replaceChild(btnRehacer, btnVisto);
    actualizarContadores();
    aplicarFiltro();
  });

  btnEliminar.addEventListener("click", () => {
    nuevaMision.classList.remove("completado", "rehecha");
    nuevaMision.classList.add("eliminando");
    circulo.style.borderColor = "#dc2626";
    circulo.style.background = "#dc2626";

    setTimeout(() => {
      nuevaMision.remove();
      actualizarContadores();
      aplicarFiltro();
    }, 1000);
  });

  infoMision.appendChild(tituloMision);
  infoMision.appendChild(etiquetaPrioridad);

  contenedorBotones.appendChild(btnVisto);
  contenedorBotones.appendChild(btnEliminar);

  ladoDerecho.appendChild(fechaMision);
  ladoDerecho.appendChild(contenedorBotones);

  nuevaMision.appendChild(circulo);
  nuevaMision.appendChild(infoMision);
  nuevaMision.appendChild(ladoDerecho);

  lista.appendChild(nuevaMision);

  inputMision.value = "";
  inputPrioridad.value = "Media";
  inputFecha.value = "";

  actualizarContadores();
  aplicarFiltro();
});

btnTodas.addEventListener("click", () => {
  filtroActual = "todas";
  aplicarFiltro();
});

btnPendientes.addEventListener("click", () => {
  filtroActual = "pendientes";
  aplicarFiltro();
});

btnCompletados.addEventListener("click", () => {
  filtroActual = "completados";
  aplicarFiltro();
});

actualizarContadores();
aplicarFiltro();