const taskInput = document.getElementById('taskInput');
const publishBtn = document.getElementById('publishBtn');
const todo = document.getElementById('todo');
const localStorage = window.localStorage;

//Datos de la pagina
let tasks = [];
//cargar datos que tenia antes
let loadedTasks = localStorage.getItem("tasks");
if(loadedTasks === null){
    tasks = [];
}else{
    tasks = JSON.parse(loadedTasks);
}
console.log(tasks);

function showTasks(){
    let html = "";
    for(let i=0 ; i<tasks.length ; i++){
        html += `<div><h3>${tasks[i].task}. Estado: ${tasks[i].state}</h3>
        <button id="btnAzul"></button>
        <button id="btnRojo"></button></div>`;
    }
    todo.innerHTML = html;
}



showTasks();

function post(){
    let text = taskInput.value;
    let state = 0;
    let task = new Task(text, state);
    console.log(task);
    tasks.push(task);
    console.log(tasks);
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
}

publishBtn.addEventListener('click', post);