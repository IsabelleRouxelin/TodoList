//Todo List
// Thing we need:
/* arrays to store taks 
event listeners to respond to clicks to create/remove tasks *maybe edit
need to be able to add and delete tasks to start 
*/
// Array to store tasks 
var tasks = [];
var newTask = [1];

//DOM elements
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var errorMsg = document.getElementById("errorMsg");
var todoList = document.getElementById("todoList");
var emptyMsg = document.getElementById("emptyMsg");

// Event listeners
//add task 
addBtn.addEventListener("click", addTask);

//validate input
function addTask() {
    var text = taskInput.value(); //gets task input 
    
    if (text === "") {
        showError("Please enter a task"); // if empty show error
        return;
    }
}

// display and update tasks

// should we use push? or should this be

//implement the delete functionality

// *tasks to be edited 

//* tasks to be saved