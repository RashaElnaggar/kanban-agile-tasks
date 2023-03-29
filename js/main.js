const addTaskbtn = document.getElementById("addButton");
const Taskinput=document.getElementById("taskName");
const tasksTodo = document.querySelector(".toDotasks");
const addSection=document.querySelector(".addNewtask");
let drag=null;

// let el = document.createElement('li');
// el.className="task";
// el.textContent="new task";

addTaskbtn.addEventListener('click',addTask);
function addTask() {
 var name=Taskinput.value;
 console.log(name);
 if(name!="") {
//  tasksTodo.insertAdjacentHTML("beforeend",`<li class="task" draggable="true">${name}</li>`);
tasksTodo.innerHTML += `<li class="task" draggable="true">${name}</li>`;
   Taskinput.value = "";
   console.log("new task added");
}

dragTasks();
}
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
  this.style.background="#fff";
   this.style.color = "#fff";
   makeJson();
});
 });
});
}
// document.addEventListener('drop', function(event){
//   event.preventDefault();
//   var data = event.dataTransfer.getData("text");
//   event.target.append(document.getElementById("data"));
//   localStorage.setItem('section1', JSON.stringify(document.getElementById("toDotasks")));
//   localStorage.setItem('section2', JSON.stringify(document.getElementById("inProgress")).innerHTML);
//   localStorage.setItem('section3', JSON.stringify(document.getElementById("completed")));
// });
window.onload = restoreJason;

function makeJson() {
  const sections = document.getElementById("sections");
  var shapes = sections.querySelectorAll("div[class='section']");
  var divs = [];
  console.log(shapes.length);
  for(var i=0; i<shapes.length; i++){
    // divs[shapes[i].getAttribute('innerHTML')] = shapes[i].innerHTML;
    divs.push(shapes[i].innerHTML);
  }
  
  localStorage.setItem("divs", JSON.stringify(divs));
}
function restoreJason() {
  var divs = JSON.parse(localStorage.getItem("divs"));
  const sections = document.getElementById("sections");
  var shapes = sections.querySelectorAll("div[class='section']");
  for(var i = 0; i<shapes.length; i++){
    shapes[i].innerHTML = divs[i];
}
console.log(divs);
}