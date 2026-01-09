const addTaskButton = document.getElementById("add-task-btn");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");

let tasks = [];
addTaskButton.addEventListener("click", () => {
  const taskText = toDoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    complete: false,
  };

  tasks.push(newTask);
  toDoInput.value = "";
  console.log(tasks);
});
