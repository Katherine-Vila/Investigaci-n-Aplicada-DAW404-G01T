const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Evento para agregar tarea
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  addTaskAsync(task); // usamos versión asíncrona
  input.value = "";
});

// Función síncrona (bloquea)
function addTaskSync(task) {
  const li = document.createElement("li");
  li.textContent = task;
  const btn = document.createElement("button");
  btn.textContent = "Eliminar";
  btn.onclick = () => list.removeChild(li);
  li.appendChild(btn);
  list.appendChild(li);
  console.log("Tarea agregada de forma SÍNCRONA");
}

// Función asíncrona (no bloquea)
function addTaskAsync(task) {
  console.log("Procesando tarea...");
  setTimeout(() => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => list.removeChild(li);
    li.appendChild(btn);
    list.appendChild(li);
    console.log("Tarea agregada de forma ASÍNCRONA");
  }, 1000); // simulamos latencia de API
}

// Ejemplo con Promises y async/await
function addTaskPromise(task) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(task), 1000);
  });
}

async function demoAsyncAwait(task) {
  const result = await addTaskPromise(task);
  addTaskSync(result);
  console.log("Tarea agregada con async/await");
}

// PRUEBA DIRECTA EN LA PÁGINA

// 1. Agregar tareas de forma síncrona
addTaskSync("Tarea síncrona A");
addTaskSync("Tarea síncrona B");
console.log("Todas las tareas síncronas ya se agregaron.");

// 2. Agregar tareas de forma asíncrona
addTaskAsync("Tarea asíncrona X");
addTaskAsync("Tarea asíncrona Y");
console.log("Las tareas asíncronas se están procesando...");

// 3. Usar async/await con Promises
demoAsyncAwait("Tarea con async/await");
