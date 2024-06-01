document.addEventListener("DOMContentLoaded", () => {
  displayCurrentDateAndTime();
  loadTasks();
  setInterval(highlightCurrentTasks, 1000);
  setInterval(displayCurrentDateAndTime, 1000);
  highlightCurrentTasks();

  document.getElementById("addTaskButton").addEventListener("click", addTask);
  document
    .getElementById("taskList")
    .addEventListener("click", handleTaskListClick);
});

function displayCurrentDateAndTime() {
  const currentDate = new Date().toDateString();
  const currentTime = new Date().toTimeString().substring(0, 5);
  document.getElementById(
    "currentDate"
  ).textContent = `Date: ${currentDate} Time: ${currentTime}`;
}

function addTask() {
  const taskDescription = document.getElementById("taskDescription").value;
  const taskTime = document.getElementById("taskTime").value;

  if (taskDescription && taskTime) {
    const task = { description: taskDescription, time: taskTime };
    saveTask(task);
    appendTaskToDOM(task);
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskTime").value = "";
  }
}

function saveTask(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function appendTaskToDOM(task) {
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.dataset.description = task.description;
  li.dataset.time = task.time;
  li.innerHTML = `
      ${task.description} - ${task.time}
      <button class="btn btn-danger btn-sm float-right">Remove</button>


      
  `;
  taskList.appendChild(li);
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => appendTaskToDOM(task));
}

function handleTaskListClick(event) {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.classList.contains("btn-danger")
  ) {
    const li = event.target.parentElement;
    removeTask(li.dataset.description, li.dataset.time);
    li.remove();
  }
}

function removeTask(description, time) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter(
    (task) => task.description !== description || task.time !== time
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function highlightCurrentTasks() {
  const currentTime = new Date().toTimeString().substring(0, 5);
  const tasks = getTasksFromLocalStorage();
  const taskListItems = document.getElementById("taskList").children;
  for (let li of taskListItems) {
    li.classList.remove("current-hour");
  }
  tasks.forEach((task, index) => {
    if (task.time === currentTime) {
      taskListItems[index].classList.add("current-hour");
    }
  });
}
