/*

TASK MANAGER 

1.ADD - COMPLETED
2.DELETE - 
3.SEARCH TASK
4.MARK AS COMPLETED 
5.USING LOCAL STORAGE TO PERSIST DATA

*/

let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

let inputBox = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskDisplay = document.getElementById("taskDisplay");
let searchInput = document.getElementById("searchInput");

//ADD TASK
let addTask = () => {
  let taskInput = document.getElementById("taskInput").value;

  if (taskInput == "") {
    alert("Plaease enter a valid task");
  } else {
    const task = {
      id: Date.now(),
      text: taskInput,
      isCompleted: false,
    };

    Tasks.push(task);
    saveTask();
    renderTask(Tasks);
    inputBox.value = "";
  }
};

//RENDER TASK
function renderTask(array) {
  taskDisplay.innerHTML = "";

  array.forEach((item) => {
    let divElement = document.createElement('div');

    divElement.innerHTML +=
        `<h2 id="${item.id}" class="${item.isCompleted? "completed":""}">${item.text}</h2>
          <button onclick="deleteTask(${item.id})">❌</button>
          <button onclick="toggleCompleted(${item.id})">✅</button>`;

    taskDisplay.appendChild(divElement);

  });

  
}

renderTask(Tasks);

addBtn.addEventListener("click", () => {
  addTask();
});

//DETELE TASK

let deleteTask = (id) => {
  Tasks = Tasks.filter((item) => item.id !== id);

  saveTask();
  renderTask(Tasks);
};

// SEARCH TASK

let searchTask = () => {
  let searchKey = document.getElementById("searchInput").value.toLowerCase();
  let filteredTasks = Tasks.filter((item) =>
    item.text.toLowerCase().includes(searchKey),
  );
  renderTask(filteredTasks);
};

if (searchInput) {
  searchInput.addEventListener("input", searchTask);
}
// SAVE TASK

let saveTask = () => {
  localStorage.setItem("Tasks", JSON.stringify(Tasks));
};

// MARK AS COMPLETED

let toggleCompleted = (id) => {
  Tasks = Tasks.map((item)=>{
    if(item.id === id ){
       return {...item,isCompleted : !item.isCompleted };
    }
    return item;
  });

  saveTask();
  renderTask(Tasks);
}

