// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const done = document.querySelector("#done");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();
  if (inputValue.length > 0) {
    addItem(inputValue);
  }
});
input.addEventListener("keyup", function () {
  const inputValue = input.value.trim();
  if (event.key === "Enter" && inputValue.length > 0) {
    addItem(inputValue);
  }
});

// Delete and check and resume
list.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    let parentElement = target.parentElement;
    done.appendChild(parentElement);
    target.classList.toggle("checked");
  }
});

done.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    let parentElement = target.parentElement;
    list.appendChild(parentElement);
    target.classList.remove("checked");
  }
});
