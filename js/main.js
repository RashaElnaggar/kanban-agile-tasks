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
    inputTask = taskDiv.querySelector(".inp");
    taskDiv.className = "task";
    taskDiv.innerHTML = `
    <input  type="text" class="inp" value="${name}" readonly="true"></input>
    <div class="icons">
       <i class="fa-sharp fa-solid fa-pencil" ></i>
       <i class="fa-regular fa-trash-can"     ></i>
    </div>`;
 
    tasksTodoSec.appendChild(taskDiv);
    
    //makeJson(tasksTodoSec);
    toDoinp.value = "";
  
  }
  else {
    alert("Add your task name");
  }
  localStorage.setItem('section1', JSON.stringify((document.getElementById("toDoSec")).innerHTML));
  //makeJson(tasksTodoSec);
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
         <i class="fa-sharp fa-solid fa-pencil" ></i>
         <i class="fa-regular fa-trash-can"     ></i>
      </div>`;
      tasksInProgressSec.appendChild(taskDiv);
      makeJson(tasksInProgressSec);
      inprogressinp.value = "";
    }
    else {
      alert("Add your task name");
    }
   // makeJson(tasksInProgressSec);
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
         <i class="fa-sharp fa-solid fa-pencil" ></i>
         <i class="fa-regular fa-trash-can delete"     ></i>
      </div>`;
      tasksCompletedSec.appendChild(taskDiv);
      completedinp.value = "";
      //makeJson();
    }
    else {
      alert("Add your task name");
    }
      //makeJson(tasksCompletedSec);
     // localStorage.setItem('section3', JSON.stringify((document.getElementById("completedSec")).innerHTML));
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

   //makeJson(taskcol);

});
 }); 
});
//makeJsonsec();
}



function makeJson(section) {

  let toDotasks ;
  let inProgresstasks;
  let completedtasks ;
  if (JSON.parse(localStorage.getItem("ToDotasks")) != null) {
    toDotasks = JSON.parse(localStorage.getItem("toDotasks"));
  }
  else
  toDotasks = [];
  if (JSON.parse(localStorage.getItem("inProgresstasks")) != null) {
    inProgresstasks = JSON.parse(localStorage.getItem("inProgresstasks"));
  }
  else
  inProgresstasks = [];
  if (JSON.parse(localStorage.getItem("completedtasks")) != null) {
    completedtasks = JSON.parse(localStorage.getItem("completedtasks"));
  }
  else
   completedtasks = [];

  if (section.className === "task-col toDotasks") {
    let task = section.lastElementChild.querySelector("input");
    if (task && task.textContent.trim().length !== "") {
      console.log(task.textContent);
      let item={content:task.textContent};
      toDotasks.push(item);
      console.log(item);
      console.log(toDotasks);
    }
    console.log(toDotasks);
    localStorage.setItem("toDotasks", JSON.stringify(toDotasks));
    window.location.reload();
   
  }

 else if (section.className === "task-col inProgress") {
    let task = section.lastElementChild.querySelector("input");
    if (task && task.textContent.trim().length!== "") {
      inProgresstasks.push(task.textContent);
    } 
    localStorage.setItem("inProgresstasks", JSON.stringify(inProgresstasks));
  }

 else if (section.className === "task-col completed") {
    let task = section.lastElementChild.querySelector("input");
    if (task && task.textContent.trim().length !== "") {
      completedtasks.push(task.textContent);
    }    
     localStorage.setItem("completedtasks", JSON.stringify(completedtasks));

  }
  


}
// function restoreJason() {
//   //let divs = JSON.parse(localStorage.getItem("divs"));
//  // for(var i = 0; i<shapes.length; i++){
//    // shapes[i].innerHTML = divs[i];
//    // console.log(shapes[i]);
// //}
//   //console.log(divs);
//   //dragTasks();

// let toDotasks=JSON.parse(localStorage.getItem("toDotasks"));
// let inProgresstasks=JSON.parse(localStorage.getItem("inProgresstasks"));
// let completedtasks=JSON.parse(localStorage.getItem("completedtasks"));
// // if(toDotasks!== null){
// //   toDotasks.forEach((item)=>{
// //   if (item){
// //     let taskDiv = document.createElement("div");
// //     taskDiv.className = "task";
// //     taskDiv.innerHTML = `
// //     <input class="inp" type="text" value="${item.value}" readonly="true"></input>
// //     <div class="icons">
// //        <i class="fa-sharp fa-solid fa-pencil" ></i>
// //        <i class="fa-regular fa-trash-can"     ></i>
// //     </div>`;
// //     tasksTodoSec.appendChild(taskDiv);
// //   }
// // });
// // }
// let itemtext="";
// if(toDotasks!== null){
//   const localItems = JSON.parse(localStorage.getItem("toDotasks"));
//   toDotasks.map((data)=>{
//     itemtext=data.content;
//     let taskDiv = document.createElement("div");
//     taskDiv.className = "task";
//     taskDiv.innerHTML = `
//     <input class="inp" type="text" value="${itemtext}" readonly="true"></input>
//     <div class="icons">
//        <i class="fa-sharp fa-solid fa-pencil" ></i>
//        <i class="fa-regular fa-trash-can"     ></i>
//     </div>`;
//     tasksTodoSec.appendChild(taskDiv);
  
// });
// }
// if(inProgresstasks!==null){
// inProgresstasks.forEach((item)=>{
  
//   if (item!=null){
//     let taskDiv = document.createElement("div");
//     taskDiv.className = "task";
//     taskDiv.innerHTML = `
//     <input class="inp" type="text" value="${item.value}" readonly="true"></input>
//     <div class="icons">
//        <i class="fa-sharp fa-solid fa-pencil" ></i>
//        <i class="fa-regular fa-trash-can"     ></i>
//     </div>`;
//    tasksInProgressSec.appendChild(taskDiv);
//   }
// });
// }
// if(completedtasks !== null){
// completedtasks.forEach((item)=>{
//   if (item !=null){
//     let taskDiv = document.createElement("div");
//     taskDiv.className = "task";
//     taskDiv.innerHTML = `
//     <input class="inp" type ="text" value="${item.value}" readonly="true"></input>
//     <div class="icons">
//        <i class="fa-sharp fa-solid fa-pencil" ></i>
//        <i class="fa-regular fa-trash-can"     ></i>
//     </div>`;
//    tasksCompletedSec.appendChild(taskDiv);
//   }
// });
// }


// }


function restoreJason(){
  tasksTodoSec.innerHTML=JSON.parse(localStorage.getItem('section1'));
  tasksInProgressSec.innerHTML=JSON.parse(localStorage.getItem('section2'));
  tasksCompletedSec.innerHTML=JSON.parse(localStorage.getItem('section3'));
}


  var removeTasks=document.querySelectorAll(".delete");
  for(let i=0;i<removeTasks.length;i++){
    removeTasks[i].onclick =function(){
      this.parentElement.parentElement.remove();
      
  localStorage.setItem('section1', JSON.stringify((document.getElementById("toDoSec")).innerHTML));
  localStorage.setItem('section2', JSON.stringify((document.getElementById("inProgressSec")).innerHTML));
   localStorage.setItem('section3', JSON.stringify((document.getElementById("completedSec")).innerHTML));
    }
  }

