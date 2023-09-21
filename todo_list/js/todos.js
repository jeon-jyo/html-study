window.addEventListener("load", function () {

    const todoForm = document.querySelector(".todoForm");
    const todoInput = document.querySelector(".todo");
    const todoList = document.querySelector(".todoList > ul");

    const todosKey = "todos";

    // const todoId = localStorage.getItem(todosKey);
    const todoId = JSON.parse(localStorage.getItem(todosKey));

    let todos = [];

    function addTodo (event) {
        event.preventDefault();

        if (todoInput.value !== "") {

            const todo = {
                text: todoInput.value,
                id: Date.now()
            }
            todoInput.value ="";

            todos.push(todo);
            todoLoad(todo);
            localStorage.setItem(todosKey, JSON.stringify(todos));
        }
    }

    function todoLoad (event) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        li.id = event.id;
        span.innerHTML = " · " + event.text + "  ";
        button.innerHTML = "X";

        button.addEventListener("click", todoDelete);

        li.append(span, button);
        todoList.append(li);
    }

    function todoDelete (event) {
        const li = event.target.parentElement;
        // console.log(typeof li.id)   // string
        li.remove();

        todos = todos.filter(function (data) {
            // console.log(typeof data.id)   // number
            return data.id !== Number(li.id);
        })

        localStorage.setItem(todosKey, JSON.stringify(todos));
        console.log(todos);
    }

    todoForm.addEventListener("submit", addTodo);

    if (todoId) {
        todos = todoId;
        todoId.forEach(todoLoad);
    }
})