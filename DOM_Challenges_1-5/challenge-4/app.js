/* <li class="task-item">
        <input type="checkbox" class="complete-checkbox" />
        <span class="task-text">this is me </span>
        <button class="delete-button">delete</button>
      </li>*/

let taskaddbtn = document.querySelector("#addButton");
let taskinput = document.querySelector("#taskInput");
let taskitems = document.querySelector("#taskList");
let emptyitem = document.querySelector(".empty-list");

let completedTasks = document.querySelector("#completedTasks");
let totalTasks = document.querySelector("#totalTasks");

let count = 0;
let totalcount = 0;

function createTaskItem(item) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  let span = document.createElement("span");
  let button = document.createElement("button");

  li.className = "task-item";
  input.type = "checkbox";
  input.className = "complete-checkbox";
  span.className = "task-text";
  button.className = "delete-button";

  span.innerHTML = item;
  button.innerHTML = "delete";
  li.append(input, span, button);

  taskitems.append(li);
}

function taskStatusDisplay(count, totalcount) {
  completedTasks.innerHTML = `Completed: ${count}`;
  totalTasks.innerHTML = `Total tasks: ${totalcount}`;
}

taskaddbtn.addEventListener("click", (e) => {
  if (taskinput.value.trim() == "") return;
  if (emptyitem) emptyitem.remove();
  createTaskItem(taskinput.value);
  totalcount++;
  taskStatusDisplay(count, totalcount);
  taskinput.value = "";
});

taskitems.addEventListener("click", (e) => {
  if (e.target.className == "complete-checkbox") {
    let checkbtn = e.target;
    let li = checkbtn.closest("li");
    if (checkbtn.checked) {
      count++;
      li.classList.add("completed");
    } else {
      count--;
      li.classList.remove("completed");
    }
    taskStatusDisplay(count, totalcount);
  }

  if (e.target.classList.contains("delete-button")) {
    totalcount--;
    let li = e.target.closest("li");
    let checkbtn = li.querySelector(".complete-checkbox");
    if (checkbtn.checked) count--;
    taskStatusDisplay(count, totalcount);
    let taskitems = li.closest("ul");
    li.remove();
    if (!taskitems.querySelector(".task-item")) taskitems.append(emptyitem);
  }
});
