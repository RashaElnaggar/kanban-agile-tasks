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
 let name=Taskinput.value;
 console.log(name);
 if(name!="") {
//  tasksTodo.insertAdjacentHTML("beforeend",`<li class="task" draggable="true">${name}</li>`);
tasksTodo.innerHTML += `<li class="task" draggable="true">${name}</li>`;
 Taskinput.value="";
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
  this.style.color="#fff";
});
 });
});
}