function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.textContent = taskText;

  const btnGroup = document.createElement("div");

  const doneBtn = document.createElement("button");
  doneBtn.className = "btn btn-success btn-sm me-2";
  doneBtn.textContent = "Done";
  doneBtn.onclick = () => {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}