let todos = []; // En tom array
const buttonElem = document.querySelector("#add-todo-button");
const todoList = document.querySelector("#todoList");
console.log(buttonElem);

function displayTodos() {
  //   let todoItems = "";

  for (let i = 0; i < todos.length; i++) {
    console.log("Todo nr: ", i);
    console.log("Todo: ", todos[i]);
    // todoItems = todoItems + "<p>" + todos[i] + "</p>";
    // todoList.innerHTML = todos;
  }
}

buttonElem.addEventListener("click", function () {
  const todo = prompt("Vad vill du göra?");

  todos.push(todo);

  displayTodos();
});
