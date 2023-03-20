const addTaskbtn = document.getElementById("addButton");

// let el = document.createElement('li');
// el.className="task";
// el.textContent="new task";

addTaskbtn.addEventListener('click',addTask);
function addTask(e) {
  const tasksTodo = document.querySelector(".toDotasks");
  tasksTodo.insertAdjacentHTML('beforeend',`<li class="task" draggable="true">last</li>`)
}