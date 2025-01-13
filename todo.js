const save = document.getElementById("save");
const todos = document.querySelector("#todo-input")
const todo_KEY = "todo";

const todolist = JSON.parse(localStorage.getItem(todo_KEY)) || [];
const filteredTodoList = todolist.filter((value, index) => todolist.indexOf(value) === index);


function handleDeleteTodo(index) {
    filteredTodoList.splice(index, 1);
    localStorage.setItem(todo_KEY, JSON.stringify(filteredTodoList));
    handlePaintTodo();
}

function handlePaintTodo() {
    const todoListContainer = document.querySelector("#todo-list");
    todoListContainer.innerHTML = "";
    filteredTodoList.forEach((todo, index) => {
        const li = document.createElement("li");
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "X";
        deleteButton.style.color = "red";
        deleteButton.style.cursor = "pointer";
        li.textContent = todo;
        li.setAttribute("id", index);
        li.appendChild(deleteButton);
        todoListContainer.appendChild(li);

        deleteButton.addEventListener("click", ()=> handleDeleteTodo(index));
    });
}

function handleSave(event) {
    event.preventDefault();
    const newTodo = todos.value;
    const storedValue = JSON.parse(localStorage.getItem(todo_KEY)) || [];
    if (newTodo.trim() != "" && !storedValue.includes(newTodo)) {
    filteredTodoList.push(newTodo);
    localStorage.setItem(todo_KEY, JSON.stringify(filteredTodoList));
    todos.value =""
    handlePaintTodo();
    } else if (storedValue.includes(newTodo)){
        alert("해당 내용은 중복입니다");
    }
}
handlePaintTodo()
save.addEventListener("click", handleSave);