let addBtn = document.querySelector(".addBtn");
let task = document.getElementById("inputBox");
let tasks = document.querySelector(".task");
let taskList = document.getElementById("taskList");
let list = [];

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let t = task.value;
  if (t == "") {
    task.placeholder = "Enter a valid task.";
    task.classList.add("error");
    return;
  }
  task.value = "";
  list.push({ text: t, completed: false });
  printList();
});

// task.addEventListener("input", () => {
//   task.classList.remove("error");
// });

const printList = () => {
  taskList.innerText = "";

  list.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.text;

    if (item.completed) {
      listItem.classList.add("completed");
    }
    listItem.addEventListener("click", () => {
      item.completed = !item.completed;
      printList();
    });
    taskList.appendChild(listItem);
  });
};
