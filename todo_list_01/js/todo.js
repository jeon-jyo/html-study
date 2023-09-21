const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

const onSaveTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));   // 밖에서 받은걸 접근할수있다?
}

const onTodoSubmit = (event) => {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value="";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    // [{},{},{}]

    todos.push(newTodoObj);
    onPrintTodo(newTodoObj);
    onSaveTodo();
}

const onPrintTodo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button")
    button.innerText = "X";

    button.addEventListener("click",onDeleteTodo);

    li.append(span, button);
    todoList.append(li);
}

const onDeleteTodo = (event) => {
    const li = event.target.parentElement;  // 찍은 버튼의 li
    li.remove();

    todos = todos.filter(function (obj) {  // 하나하나 접근
        return obj.id !== Number(li.id)
    })

    onSaveTodo();

    console.log(todos);
};

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem("todos");
if(savedTodos) {

    const  todoObj = JSON.parse(savedTodos);
    todos = todoObj;
    todoObj.forEach(onPrintTodo);

    // console.log(JSON.parse(savedTodos));
    // JSON.parse(savedTodos);
}