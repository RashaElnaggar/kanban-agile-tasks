const addTaskbtn = document.getElementById("addButton");
const Taskinput=document.getElementById("taskName");
const tasksTodo = document.querySelector(".toDotasks");
const addSection=document.querySelector(".addNewtask");
let drag=null;


const sections = document.getElementById("sections");
var shapes = sections.querySelectorAll("div[class='section']");
window.onload = restoreJason;
addTaskbtn.addEventListener('click',function(e){
  e.preventDefault();
 var name=Taskinput.value;
 console.log(name);
  if (name != "") {
    // const li = document.createElement("li");
    // li.innerHTML = `<p>${name}</p>
    // <div class="icons">
    //    <i class="fa-sharp fa-solid fa-pencil" ></i>
    //    <i class="fa-regular fa-trash-can"     ></i>
    // </div>`;
 tasksTodo.innerHTML +=`
 <div class="task">
 <input type="text" value="${name}" readonly="true"></input>
<div class="icons">
   <i class="fa-sharp fa-solid fa-pencil" ></i>
   <i class="fa-regular fa-trash-can"     ></i>
</div>
</div> 
`;
//     tasksTodo.insertBefore(li,tasksTodo.children[0]);
// console.log(tasksTodo.innerHTML );
   console.log("new task added");
  
   Taskinput.value = "";
   makeJson(); 
}
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
makeJson();
}
// document.addEventListener('drop', function(event){
//   event.preventDefault();
//   var data = event.dataTransfer.getData("text");
//   event.target.append(document.getElementById("data"));
//   localStorage.setItem('section1', JSON.stringify(document.getElementById("toDotasks")));
//   localStorage.setItem('section2', JSON.stringify(document.getElementById("inProgress")).innerHTML);
//   localStorage.setItem('section3', JSON.stringify(document.getElementById("completed")));
// });


function makeJson() {
  let divs = [];
  console.log(shapes.length);
  for(var i=0; i<shapes.length; i++){
    // divs[shapes[i].getAttribute('innerHTML')] = shapes[i].innerHTML;
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
  dragTasks();
}
 

function removeTask() {
  
}