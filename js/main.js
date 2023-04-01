  window.onload = restoreJason;
const addTaskbtn = document.getElementById("addButton");
const taskInput=document.getElementById("taskName");
const tasksTodo = document.querySelector(".toDotasks");
const addSection=document.querySelector(".addNewtask");
let drag=null;
// var divs=JSON.parse(localStorage.getItem("divs"))|| [];

const sections = document.getElementById("sections");
var shapes = sections.querySelectorAll("div[class='section']");


addTaskbtn.addEventListener('click', function (e){
  e.preventDefault();
  // makeJson();
  var name = taskInput.value;
  console.log(name);
  if (name == "") {
      alert("Please add some task!");
      return false;
    }
    
      //  tasksTodo.insertAdjacentHTML("beforeend",`<li class="task" draggable="true">${name}</li>`);
      // tasksTodo.innerHTML += `<li class="task" draggable="true">${name}</li>`;
  
      // let items = Array.from(JSON.parse(localStorage.getItem("items")));
      // console.log(items);
      if (document.querySelector(`input[value="${taskInput.value}"]`))
       {
        alert("Task already exist!");
        taskInput.value = "";
        return;
        
       }
      // add task to local storage
  localStorage.setItem("items", JSON.stringify([...JSON.parse(localStorage.getItem("items") || "[]"),
    { taskInput: taskInput.value }]));
  makeJson();
  tasksTodo.innerHTML += `
    <li class="task">
      <p>${name}</p>
      <div class="icons">
        <i class="fa-sharp fa-solid fa-pencil" ></i>
        <i class="fa-regular fa-trash-can"     ></i>
      </div>
    </li> 
    `;
  taskInput.value = ""; 
    dragTasks();
  
});

function dragTasks(){
  let tasks=document.querySelectorAll(".task");
  tasks.forEach(task=>{
    task.addEventListener('dragstart',function(){
     drag=task;
     task.style.opacity="0.5";
      });
    task.addEventListener('dragend',function(){
     drag=null;
     task.style.opacity="1";
 });
 taskCols= document.querySelectorAll(".task-col");
 taskCols.forEach(taskcol=>{
  taskcol.addEventListener('dragover',function(e){
  e.preventDefault();
  this.style.background="#090";
  this.style.color="#fff";
  });
  taskcol.addEventListener('dragleave',function(){
    this.style.background="#fff";
    this.style.color="#fff"; 
  })
 taskcol.addEventListener('drop',function(){
  taskcol.append(drag);
  task.style.opacity="1";
  this.style.background="#fff";
   this.style.color = "#fff";
  //  localStorage.setItem("items", JSON.stringify([...JSON.parse(localStorage.getItem("items") || "[]"),
  //    { taskInput: taskInput.value }]));
   updateItemsjson();
   makeJson();
   restoreJason();

 });
   
 }); 
    
  });
  
}
function updateItemsjson(){
  let items = [];
  console.log(document.querySelectorAll(".task").length);
  for(var i=0; i<document.querySelectorAll(".task").length; i++){
    divs.push(items[i].innerHTML);
  }
  localStorage.setItem("items", JSON.stringify(items));
  
}
function restoreItemsjson() {
  // let taskstodo = document.querySelectorAll(".task");
  let items = JSON.parse(localStorage.getItem("items"));
  items.forEach(item => {
    tasksTodo.innerHTML += `
    <li class="task">
      <p>${item.}</p>
      <div class="icons">
        <i class="fa-sharp fa-solid fa-pencil" ></i>
        <i class="fa-regular fa-trash-can"     ></i>
      </div>
    </li> 
    `;
  })
  // for(var i = 0; i<taskstodo.length; i++){
  //  taskstodo[i].innerHTML = items[i];
  //   console.log(items[i]);
}
console.log(divs);
}

function makeJson() {
  let divs = [];
  console.log(shapes.length);
  for(var i=0; i<shapes.length; i++){
    divs.push(shapes[i].innerHTML);
  }
  
  localStorage.setItem("divs", JSON.stringify(divs));

}
function restoreJason() {
  
  let divs = JSON.parse(localStorage.getItem("divs"));
  for(var i = 0; i<shapes.length; i++){
    shapes[i].innerHTML = divs[i];
    console.log(shapes[i]);
}
  console.log(divs);
  restoreItemsjson();
}

// restoreJason();

function loadTodoTasks() {
  
}