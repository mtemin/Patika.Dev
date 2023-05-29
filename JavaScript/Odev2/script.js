
let toDoList = document.querySelector("#toDoList");
let toDoInput = document.getElementById("toDoInput");
let listItems = document.querySelectorAll("#toDoList .list-item");
let editTaskBtns = document.querySelectorAll('.edit-task')

let taskList = [
  { id: 1, name: 'Görev 1', state:"completed" },
  { id: 2, name: 'Görev 2', state:"completed" },
  { id: 3, name: 'Görev 3', state:"completed" },
  { id: 4, name: 'Görev 4', state:"pending" },
];

if(localStorage.getItem("taskList") !== null){
  taskList = JSON.parse(localStorage.getItem("taskList"));
};

displayTasks();



  
function displayTasks() {
  toDoList.innerHTML = "";
  for (task of taskList) {
    
    let taskState = task.state;

    let li = `
      
      <li id = "task-${task.id}" class="list-item px-5 d-flex justify-content-between list-group-item">
      <div>
      
      <input id = "input${task.id}" onclick = "updateTaskStatus(this)"class="form-check-input px-0 mx-0 border-secondary" type="checkbox" value="">
      
      <label for = "input${task.id}" class="form-check-label" style = "display:inline-block; margin:0px 20px; padding:0;">${task.name}</label>
      </div>
        <div style = "display:flex;">
        
            <a onclick = "editTask(${task.id}, '${task.name}')" class = "text-secondary edit-task" type="button"><i style = "line-height:1" class="fa fa-pencil fa-lg" aria-hidden="true"></i></a>
            <button onclick='removeTask(${task.id})' class = "btn-close" type="button" aria-label="Close" style="margin-left:1.25rem"></button>
        </div>
        </li>`;

        toDoList.insertAdjacentHTML("beforeend", li);
      };
};

let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addTask);
// addButton.addEventListener("keypress", function(){
//   if(event.key == "Enter"){addButton.click()}
// });

let isEditModeOn = false;
let idToEdit;

function addTask() {
    if(!isEditModeOn){
    if (toDoInput.value != "") {
      taskList.push({ id: taskList.length + 1, name: toDoInput.value, state: "pending"});
    } else {
    alert("Görev bilgisi boş olamaz");
    };
    displayTasks();
    toDoInput.value = "";
  }else{ //güncelleme
    for (let i = 0; i < taskList.length; i++) {
      const task = taskList[i];
      if(task.id === idToEdit){
        task.name = toDoInput.value;
        toDoInput.value = "";
        addButton.innerText = "Ekle";
      };
    };
    displayTasks();
    isEditModeOn = false;
  };
  localStorage.setItem("taskList", JSON.stringify(taskList));
};


function removeTask(id) {
  let idToRemove;
  for(let i=  0; i < taskList.length; i++) {
      if (taskList[i].id == id) {
          idToRemove = i;
    };
  };
  taskList.splice(idToRemove, 1);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  displayTasks();

};

function editTask(id, name){
  isEditModeOn = true;
  idToEdit = id;
  console.log(name);
  addButton.innerText = "Güncelle";
  toDoInput.value = name;
  localStorage.setItem("taskList", JSON.stringify(taskList));

};

function updateTaskStatus(selectedTask){
  console.log(selectedTask)
  // selectedTask.
  let selectedTaskName = selectedTask.nextElementSibling.outerHTML;
  
  if((selectedTask.parentElement).parentElement.classList.includes("bg-info")){
    (selectedTask.parentElement).parentElement.classList.remove("bg-info")
  }else{
    (selectedTask.parentElement).parentElement.classList.add("bg-info");
  }

  console.log((selectedTask.parentElement).parentElement.classList)
  console.log(selectedTaskName);


};



