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
let drag=null;
// const sections = document.getElementById("sections");
// var shapes = sections.querySelectorAll("div[class='task-col']");
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
    taskDiv.className = "task";
    taskDiv.innerHTML = `
    <input type="text" value="${name}" readonly="true"></input>
    <div class="icons">
       <i class="fa-sharp fa-solid fa-pencil" ></i>
       <i class="fa-regular fa-trash-can"     ></i>
    </div>`;
    tasksTodoSec.appendChild(taskDiv);
    Taskinput.value = "";
    makeJson();
  }
  else {
    alert("Add your task name");
  }
  dragTasks();
});

//add new task to Inprogress section
  inProgressAddbtn.addEventListener('click', function(e) {
    e.preventDefault();
    let name = inprogressinp.value;
    console.log(name);
    if (name != "") {
      makeJson();
      let taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = `
      <input type="text" value="${name}" readonly="true"></input>
      <div class="icons">
         <i class="fa-sharp fa-solid fa-pencil" ></i>
         <i class="fa-regular fa-trash-can"     ></i>
      </div>`;
      tasksInProgressSec.appendChild(taskDiv);
      Taskinput.value = "";
      
    }
    else {
      alert("Add your task name");
    }
    dragTasks(tasksInProgressSec);
  });

  //add new task to Completed section
  completedAddBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let name = completedinp.value;
    console.log(name);
    if (name != "") {
      let taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = `
      <input type="text" value="${name}" readonly="true"></input>
      <div class="icons">
         <i class="fa-sharp fa-solid fa-pencil" ></i>
         <i class="fa-regular fa-trash-can"     ></i>
      </div>`;
      tasksCompletedSec.appendChild(taskDiv);
      Taskinput.value = "";
      makeJson();
    }
    else {
      alert("Add your task name");
    }
      tasksCompletedSec.appendChild(taskDiv);
      // dragTasks();
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
   taskcol.addEventListener('dragleave', function (e) {
    
    this.style.background="#fff";
    this.style.color="#fff"; 
  })
 taskcol.addEventListener('drop',function(){
  taskcol.append(drag);
  task.style.opacity="1";
  this.style.background="#fff";
   this.style.color = "#fff";
 
  //  taskcol.innerHTML = divs[0];
});
 }); 
});
//makeJson();
}
// document.addEventListener('drop', function(event){
//   event.preventDefault();
//   var data = event.dataTransfer.getData("text");
//   event.target.append(document.getElementById("data"));
//   localStorage.setItem('section1', JSON.stringify(document.getElementById("toDotasks")));
//   localStorage.setItem('section2', JSON.stringify(document.getElementById("inProgress")).innerHTML);
//   localStorage.setItem('section3', JSON.stringify(document.getElementById("completed")));
// });


function makeJson(section) {
  // let divs = [];
  // console.log(shapes.length);
  // for(var i=0; i<shapes.length; i++){
  //   // divs[shapes[i].getAttribute('innerHTML')] = shapes[i].innerHTML;
  //   divs.push(shapes[i].innerHTML);
  // }
  
  // localStorage.setItem("divs", JSON.stringify(divs));
  let toDoArr = [];
  let inProgressArr = [];
  let completedArr = [];
  if (JSON.parse(localStorage.getItem("ToDotasks")) != null) {
    toDoArr = JSON.parse(localStorage.getItem("notStarted"));
  }
  if (JSON.parse(localStorage.getItem("inProgresstasks")) != null) {
    inProgressArr = JSON.parse(localStorage.getItem("inProgress"));
  }
  if (JSON.parse(localStorage.getItem("completedtasks")) != null) {
    completedArr = JSON.parse(localStorage.getItem("completed"));
  }

  if (section.className === "task-col toDotasks") {
    let task = section.querySelector("input");
    if (task && task.textContent.trim().length != "") {
      toDoArr.push(task.textContent);
    }
  }
 else if (section.className === "task-col inProgress") {
    let task = section.querySelector("input");
    if (task && task.textContent.trim().length!="") {
     inProgressArr.push(task.textContent)
    }
  }
 else if (section.className === "task-col completed") {
    let task = section.querySelector("input");
    if (task && task.textContent.trim().length != "") {
      completedArr.push(task.textContent);
    }
  }
    localStorage.setItem("ToDotasks", JSON.stringify("toDoArr"));
    localStorage.setItem("inProgresstasks", JSON.stringify("inProgressArr"));
    localStorage.setItem("completedtasks", JSON.stringify("completedArr"));
  


}
function restoreJason() {
  //let divs = JSON.parse(localStorage.getItem("divs"));
 // for(var i = 0; i<shapes.length; i++){
   // shapes[i].innerHTML = divs[i];
   // console.log(shapes[i]);
//}
  //console.log(divs);
  //dragTasks();
if(JSON.parse(localStorage.getItem("ToDotasks")) != null) {
Todotasks=JSON.parse(localStorage.getItem("ToDotasks"));
}
if(JSON.parse(localStorage.getItem("inProgresstasks")) != null) {
inProgresstasks=JSON.parse(localStorage.getItem("inProgresstasks"));
}
if(JSON.parse(localStorage.getItem("completedtasks"))
completedtasks=JSON.parse(localStorage.getItem("completedtasks"));
}
}
 

function removeTask() {
  
}
