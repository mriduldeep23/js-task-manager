const taskInput = document.getElementById('taskInput');    
const addBtn = document.getElementById('addBtn');         
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';         
    tasks.forEach((task, index) => {       
    const li = document.createElement('li');       
    li.innerHTML = `                               
    <span>${task} </span>
    <button onclick="deleteTask(${index})">❌</button>     
    `;                                                     
    

    taskList.appendChild(li);         
    });
}

function addTask() {
    const task = taskInput.value.trim();    
    if(task) {        
        const isDuplicate = tasks.some(t => t.name.toLowerCase() === task.toLowerCase());
        if(isDuplicate) {
            alert("Task Already exist!");
            return;
        }
        
        tasks.push({name:task, completed:false  });                      
        saveTasks();                            
        renderTasks();                         
        taskInput.value = '';                  
    } 
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed; 
  saveTasks(); 
  renderTasks(); 
}


function deleteTask(index) {                   
  tasks.splice(index, 1);                      
  saveTasks();                                 
  renderTasks();                               
}

addBtn.addEventListener('click', addTask);       

function renderTasks() {
    taskList.innerHTML = '';                                          
    tasks.forEach((tsk, index) => {                                    
        const li = document.createElement('li');                      
    li.className = task.completed ? 'completed': '';                  
    li.innerHTML = `                           
    <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>     
     <span>${task.name}</span>
      <button onclick="deleteTask(${index})">❌</button>
    `;                                                                   
    taskList.appendChild(li);                                            
         });
}


