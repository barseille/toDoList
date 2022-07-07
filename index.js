// SELECTEURS
const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");

// ECOUTEURS
toDoButton.addEventListener("click", addToDo);

// FUNCTIONS
function addToDo(event) {
  event.preventDefault();
  // TodoDiv
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo");
  // Créer le Li
  const newToDo = document.createElement("li");
  newToDo.innerText = "Hey";
  newToDo.classList.add("toDoItem");
  toDoDiv.appendChild(newToDo);
  // Bouton Check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="bi bi-check2-square"></i> `;
  completedButton.classList.add("completeBtn");
  toDoDiv.appendChild(completedButton);
  // Bouton Supprimer
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="bi bi-trash"></i> `;
  trashButton.classList.add("trashBtn");
  toDoDiv.appendChild(trashButton);
  // Ajouter toDo à ToDoList
  toDoList.appendChild(toDoDiv);
}
