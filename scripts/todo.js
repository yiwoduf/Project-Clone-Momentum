const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

const TODOS_KEY = "toDos";

function todoSubmitHandler(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo); // Push to Array
    addToDo(newToDo); // Call Function
}

function addToDo(newToDo) { // Add List to HTML
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newToDo;

    toDoList.appendChild(list);
    saveToDos();
}

function deleteToDo(event) {
    const list = event.target.parentElement;
    list.remove();
}

function saveToDos() { // Saving To Do List on Local Storage
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", todoSubmitHandler);

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos)
{
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("This is the turn of ", item))
}

