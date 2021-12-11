// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//eventlistner

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//functions

function addTodo(e) {
    //Prevent form from submitting
    e.preventDefault();

    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //CREATE List
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value="";

    //CHECK COMPLETED BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // CREATE Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // ATTACH FINAL TODO
    todoList.appendChild(todoDiv);  
    
    
    todoDiv.classList.add("uncompleted")
}

function deleteTodo(e) {
    const item = e.target;
    //Delete todo
    if (item.classList[0] === "trash-btn") {
        //e.target.parentElement.remove();
        const todo = item.parentElement;

        //Animation
        todo.classList.add("fall");
        //at the end 
        
        todo.addEventListener("transitionend", e=> {
            todo.remove();
        });

    }

    //checkmark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo)
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                 }
               
        }

    });

}

