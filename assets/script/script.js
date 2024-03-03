let tareas = []; //hago el arreglo//
let idTarea = 0;

function agregarTarea() {
  const descripcion = document.getElementById("tareaInput").value; 
  if (descripcion.trim() === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const tarea = {
    id: idTarea++,
    descripcion: descripcion,
    completada: false,
  };

  tareas.push(tarea);
  mostrarTareas();
  document.getElementById("tareaInput").value = ""; //le doy un string vacío//
}
function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach((tarea) => {
    lista.innerHTML += `<div>${tarea.descripcion} 
    <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
    <input type="checkbox" ${tarea.completada ? "checked" : ""} 
    onchange="marcarCompletada(${tarea.id})"> ${
      tarea.completada ? "(Completada)" : ""
    }
    </div>`;
  });

  actualizarContadorTareas();
}

function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  mostrarTareas();
}
function marcarCompletada(id) {
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    mostrarTareas();
  }
}

function actualizarContadorTareas() {
  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;

  document.getElementById(
    "totalTareas"
  ).innerText = `Total de Tareas: ${totalTareas}`;
  document.getElementById(
    "tareasCompletadas"
  ).innerText = `Tareas Completadas: ${tareasCompletadas}`;
}

function marcarCompletada(id) {
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    mostrarTareas();
  }
}

function actualizarContadorTareas() {
  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;

  document.getElementById(
    "totalTareas"
  ).innerText = `Total de Tareas: ${totalTareas}`;
  document.getElementById(
    "tareasCompletadas"
  ).innerText = `Tareas Completadas: ${tareasCompletadas}`;
}
