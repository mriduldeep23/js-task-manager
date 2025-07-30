const taskInput = document.getElementById('taskInput');    // document.getElementById('id') is a method used to access a specific HTML element within a web page.
const addBtn = document.getElementById('addBtn');         // e.g. if you have an HTML element <div id="myDiv">, you would use document.getElementById('myDiv').
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';         // This line clears out the old list from the screen
    tasks.forEach((task, index) => {       // loops through the tasks array, for each tasks it will run loop
    const li = document.createElement('li');       // it will create a new list item in js
    li.innerHTML = `                               
    <span>${task} </span>
    <button onclick="deleteTask(${index})">❌</button>     
    `;                                                     // Adds the task name and ❌ button
    // add the tasks and the ❌ button is created for each task. The onclick="deleteTask(${index})" part makes the button call the deleteTask() function with the task’s index when clicked.

    taskList.appendChild(li);         // we are adding that <li> (the task + ❌ button) to the actual HTML list on the page.
    });
}

function addTask() {
    const task = taskInput.value.trim();      // (taskInput) is the input box where the user type task. (.value) gets actual text entered by user. (.trim()) removes any extra spaces from the beginning and end of the text.Example: " Buy Milk " becomes "Buy Milk"
    if(task) {                                 // If the input is not empty, we go inside the if block.
        tasks.push({name:task, completed:false  });                      // (tasks) is an array that holds all the task names. (.push(task)) means add the new task to the end of the array.
        saveTasks();                           // saves the tasks array into browser memory using localStorage
        renderTasks();                         // This calls another function that updates the task list shown on the screen- (including the new one)
        taskInput.value = '';                  // After adding the task, we clear the input box
    } 
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed; // Flip true/false
  saveTasks(); // Save change to storage
  renderTasks(); // Re-render updated list
}


function deleteTask(index) {                   // It runs when a user clicks the ❌ delete button next to a task. It tells which task (by its position) to delete from the list.
  tasks.splice(index, 1);                      // removes the task from the tasks array.
  saveTasks();                                 // saves the updated tasks array into the browser’s memory (localStorage). So that even if the user refreshes the browser, their tasks are still saved.
  renderTasks();                               // re-draws the list of tasks on the screen.
}

addBtn.addEventListener('click', addTask);     // When you click the button, it calls addTask() function. That function takes the text from input and adds it to the tasks array and updates everything

//renderTasks();  

function renderTask() {
    taskList.innerHTML = '';                     // clear old list
    tasks.forEach((tsk, index) => {              // loop through each task
        const li = document.createElement('li'); // Create <li> for each task
    li.className = task.completed ? 'completed': '';        // If task is completed, add a class to style it
    li.innerHTML = `                            // Add checkbox, task name, and delete button inside li
    <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>     
     <span>${task.name}</span>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    taskList.appendChild(li); // 6. Add the <li> to the page inside <ul>
         });
}


