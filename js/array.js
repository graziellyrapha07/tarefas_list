const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0;

function addTask(){
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
    taskContent.id = id

    taskItemContainer.appendChild(taskContent);

    tasksContainer.appendChild(taskItemContainer);

    if(inputElement.value != ""){
        listTasks.push(inputElement.value);
    }
    inputElement.value = "";
    id++
}

addTaskButton.addEventListener("click", () => addtask());

function deletetasks(id){
    listTasks.slice(id, 1)
    document.getElementById(id).remove()
    document.getElementById(id).remove()
}

const deleteItem = document.createElement("i");
deleteItem.innerText = "delete"
deleteItem.classList.add("material-symbols-outlined")
deleteItem.id = id
deleteItem.classList.add("far")
deleteItem.classList.add("fa-trash-alt")

deleteItem.addEventListener("click", () => 
deleteTasks(deleteItem.id)
);

taskItemContainer.appendChild(taskContent);
taskItemContainer.appendChild(deleteItem);


const removeButton = document.createElement("button");
    removeButton.innerText = "delete";
    removeButton.id = id
    removeButton.addEventListener("click", () => deleteTasks(removeButton.id));

    TaskItemContainer.appendChild(removeButton);

