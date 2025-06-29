//Todo List
// Thing we need:
/* arrays to store taks 
event listeners to respond to clicks to create/remove tasks *maybe edit
need to be able to add and delete tasks to start */

//Array to store tasks - unsure if still needed
let tasks = [];

//DOM elements
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", onClickaddBtn);

function onClickaddBtn() {

  var taskInputValue = taskInput.value;

  var todoList = document.getElementById("todoList");
  
  var newtaskEl = document.createElement("li");
 
  newtaskEl.textContent = taskInputValue;
 
  todoList.appendChild(newTaskEl);

};




/*validate input
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

//* tasks to be saved */