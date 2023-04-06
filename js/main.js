const addTodoTaskbtn = document.getElementById("toDoaddBtn");
const inProgressAddbtn = document.getElementById("inProgressaddBtn");
const completedAddBtn = document.getElementById("completedaddBtn");

const toDoinp = document.getElementById("taskName1");
const inprogressinp = document.getElementById("taskName2");
const completedinp = document.getElementById("taskName3");
// main Sections
const tasksTodoSec = document.querySelector(".toDotasks");
const tasksInProgressSec = document.querySelector(".inProgress");
const tasksCompletedSec = document.querySelector(".completed");
const addSection=document.querySelector(".addNewtask");
var taskitem=document.querySelector(".task");
let drag=null;

window.onload = restoreJason;


/****************************************************************/
//add new task
//add new task to To-Do section
addTodoTaskbtn.addEventListener('click', function(e) {
  e.preventDefault();
  let name = toDoinp.value;
  console.log(name);
  if (name != "") {
    let taskDiv = document.createElement("div");
    inputTask = taskDiv.querySelector(".inp");
    taskDiv.className = "task";
    taskDiv.innerHTML = `
    <input  type="text" class="inp" value="${name}" readonly="true"></input>
    <div class="icons">
     <button class="edit">  <i class="fa-sharp fa-solid fa-pencil" ></i>
      <button class="delete"> <i class="fa-regular fa-trash-can"></i></button>
    </div>`;
    tasksTodoSec.appendChild(taskDiv);
    
    toDoinp.value = "";
  
  }
  else {
    alert("Add your task name");
  }
  localStorage.setItem('section1', JSON.stringify((document.getElementById("toDoSec")).innerHTML));
 
  dragTasks();
});

//add new task to Inprogress section
  inProgressAddbtn.addEventListener('click', function(e) {
    e.preventDefault();
    let name = inprogressinp.value;
    console.log(name);
    if (name != "") {
    
      let taskDiv = document.createElement("div");
      inputTask = taskDiv.querySelector(".inp");
      taskDiv.className = "task";
      taskDiv.innerHTML = `
      <input  class="inp" type="text" value="${name}" readonly="true"></input>
      <div class="icons">
      <button class="edit">  <i class="fa-sharp fa-solid fa-pencil" ></i>
      <button class="delete"> <i class="fa-regular fa-trash-can"></i></button>
      </div>`;
      tasksInProgressSec.appendChild(taskDiv);
      inprogressinp.value = "";
    
    }
    else {
      alert("Add your task name");
    }
  
   localStorage.setItem('section2', JSON.stringify((document.getElementById("inProgressSec")).innerHTML));

    dragTasks();
  });

  /*********************************************************** */
  //add new task to Completed section
  completedAddBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let name = completedinp.value;
    console.log(name);
    if (name != "") {
      let taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = `
      <input class="inp" type="text" value="${name}" readonly="true"></input>
      <div class="icons">
      <button class="edit">  <i class="fa-sharp fa-solid fa-pencil" ></i>
      <button class="delete"> <i class="fa-regular fa-trash-can"></i></button>
      </div>`;
      tasksCompletedSec.appendChild(taskDiv);
      completedinp.value = "";
      
    }
    else {
      alert("Add your task name");
    }
    
      localStorage.setItem('section3', JSON.stringify((document.getElementById("completedSec")).innerHTML));


       dragTasks();
  });


/************************************************** */
 // add event listner when mouse enter  task area
    if(taskitem!==null)
     taskitem.addEventListener("mouseenter",function(){
     dragTasks();
 });



/*************************************************** */
// function to mange drag and drop
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
   taskcol.addEventListener('dragleave', function (e) {
    
    this.style.background="#fff";
    this.style.color="#fff"; 
  })
 taskcol.addEventListener('drop',function(){
  taskcol.append(drag);
  task.style.opacity="1";
  this.style.background="#fff";
   this.style.color = "#fff";

  localStorage.setItem('section1', JSON.stringify((document.getElementById("toDoSec")).innerHTML));
  localStorage.setItem('section2', JSON.stringify((document.getElementById("inProgressSec")).innerHTML));
   localStorage.setItem('section3', JSON.stringify((document.getElementById("completedSec")).innerHTML));

  

});
 }); 
});

}



      



function restoreJason(){
  tasksTodoSec.innerHTML=JSON.parse(localStorage.getItem('section1'));
  tasksInProgressSec.innerHTML=JSON.parse(localStorage.getItem('section2'));
  tasksCompletedSec.innerHTML=JSON.parse(localStorage.getItem('section3'));
  dragTasks();
}


  
