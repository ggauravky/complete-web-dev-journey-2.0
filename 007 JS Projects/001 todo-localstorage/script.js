document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task-btn");
  const toDoList = document.getElementById("todo-list");
  const toDoInput = document.getElementById("todo-input");

  let tasks =JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = toDoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      complete: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    toDoInput.value = "";
    console.log(tasks);
  });

  function renderTasks(task) {
    const li=document.createElement('li');
    li.setAttribute('data-id',task.id);
    if(task.complete) li.classList.add("Completed")
    li.innerHTML=`
    <span>${task.text}</span>
    <button>Delete</button>
    `;
    li.addEventListener('click',(e)=>{
      if(e.target.tagName==='BUTTON') return ;
      task.completed=!task.completed
      li.classList.toggle('completed')
      saveTasks()
    });

    li.querySelector('button').addEventListener('click',(e)=>{
      e.stopPropagation()
      tasks=tasks.filter(t=> t.id != task.id)
      li.remove();
      saveTasks();
    })

    toDoList.appendChild(li);
    
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
