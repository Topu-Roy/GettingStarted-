// Variables ------------------------------------------------------------------------------------

const inputBox = document.getElementById("input_text");
const addButton = document.getElementById("add_button");
const clearButton = document.getElementById("clear_button");
const todoSection = document.getElementById("todo_section");
const todoListLi = document.getElementById("todo_list_section");
const filterOptions = document.getElementById("filter_items");
let inputText = "";

// Events ------------------------------------------------------------------------------------

addButton.addEventListener("click", addToDoItem);
clearButton.addEventListener("click", clearInputText);
todoListLi.addEventListener("click", checkOrDelete);
filterOptions.addEventListener('click', filterTodoItems);

// Functions ------------------------------------------------------------------------------------

function addToDoItem(Events) {
    // preventDefault Prevent The Form Submitting------------------------------------------------------------

    Events.preventDefault();

    inputText = inputBox.value;

    if (inputText == "") {
        return;
    }

    const todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo_item_div", "shadow");

    const todoLi = document.createElement("li");
    todoLi.innerText = inputText;
    todoLi.classList.add("todoL_li");
    todoLi.id = "todo";
    todoItemDiv.appendChild(todoLi);

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.classList.add("done_button");
    todoItemDiv.appendChild(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button", "red_hover");
    deleteButton.innerHTML = "Delete";
    todoItemDiv.appendChild(deleteButton);

    todoListLi.appendChild(todoItemDiv);
    inputBox.value = "";
}

function clearInputText(e) {
    e.preventDefault();
    inputBox.value = "";
}

function checkOrDelete(event) {
    const item = event.target;

    // Check Done the Todo item ----------------------------------------------------------------

    if (item.classList[0] === "done_button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    // Delete the Todo item ----------------------------------------------------------------

    if (item.classList[0] === "delete_button") {
        const todo = item.parentElement;
        todo.classList.add("delete_animation");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }
}

function filterTodoItems(e) {
    const todos = todoListLi.childNodes;
    todos.forEach(function (item) {
        switch (e.target.value) {

            case 'completed':
                if (item.classList.contains('completed')) {
                    item.style.display = 'flex';
                }
                break;
            case 'uncompleted':
                if (!item.classList.contains('completed')) {
                    item.style.display = 'flex';
                }
                break;
        
            default:
                break;
        }
    })
}
