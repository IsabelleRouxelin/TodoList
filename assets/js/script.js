//Todo List
// Thing we need:
/* arrays to store taks 
event listeners to respond to clicks to create/remove tasks *maybe edit
need to be able to add and delete tasks to start */

//Array to store tasks - unsure if still needed
let tasks = [];

//DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


//validate input
function addTask() {
    const text = taskInput.value.trim(); //gets task input 
    if (text === "") {
       alert("Please enter a task"); // if empty show error
        return;
    } else {
        (text !== "");
        tasks.push(newTask);
    }
    displayTasks();
};



// display 



//add task when button is clicked
addBtn.addEventListener("click", addTask);

// could add delete button here perhaps?

//implement the delete functionality

// *tasks to be edited 

//* tasks to be saved