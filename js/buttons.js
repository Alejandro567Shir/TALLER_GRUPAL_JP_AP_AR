const btnAgregar = document.getElementById("btn-agregar");
const inputMision = document.getElementById("input-mision");
const lista = document.getElementById("lista-misiones");

const btnTodas = document.getElementById("btn-todas");
const btnPendientes = document.getElementById("btn-pendientes");
const btnCompletados = document.getElementById("btn-completados");

let filtroActual = "todas";

btnAgregar.addEventListener("click", () => {
  if (inputMision.value === "") return;

  const nuevaMision = document.createElement("div");
  nuevaMision.classList.add("item-mision", "pendiente");

  const textoMision = document.createElement("p");
  textoMision.textContent = inputMision.value;

  const contenedorBotones = document.createElement("div");
  contenedorBotones.classList.add("botones");

  const btnVisto = document.createElement("button");
  btnVisto.textContent = "✔";
  btnVisto.type = "button";

  const btnPendiente = document.createElement("button");
  btnPendiente.textContent = "↺";
  btnPendiente.type = "button";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "❌";
  btnEliminar.type = "button";

  btnVisto.addEventListener("click", () => {
    nuevaMision.classList.remove("pendiente");
    nuevaMision.classList.add("completado");
    textoMision.style.textDecoration = "line-through";

    btnPendiente.disabled = true;
    btnPendiente.style.opacity = "0.5";

    if (filtroActual !== "completados") {
      nuevaMision.style.display = "none";
    }
  });

  btnPendiente.addEventListener("click", () => {
  });

  btnEliminar.addEventListener("click", () => {
    lista.removeChild(nuevaMision);
  });

  contenedorBotones.appendChild(btnVisto);
  contenedorBotones.appendChild(btnPendiente);
  contenedorBotones.appendChild(btnEliminar);

  nuevaMision.appendChild(textoMision);
  nuevaMision.appendChild(contenedorBotones);

  lista.appendChild(nuevaMision);

  inputMision.value = "";
});

btnTodas.addEventListener("click", () => {
  filtroActual = "todas";
  const items = lista.children;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("pendiente")) {
      items[i].style.display = "flex";
    } else {
      items[i].style.display = "none";
    }
  }
});

btnPendientes.addEventListener("click", () => {
  filtroActual = "pendientes";
  const items = lista.children;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("pendiente")) {
      items[i].style.display = "flex";
    } else {
      items[i].style.display = "none";
    }
  }
});

btnCompletados.addEventListener("click", () => {
  filtroActual = "completados";
  const items = lista.children;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("completado")) {
      items[i].style.display = "flex";
    } else {
      items[i].style.display = "none";
    }
  }
});