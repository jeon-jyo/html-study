window.addEventListener("load", function () {

    const todoForm = document.querySelector(".todoForm2");
    const todoInput = document.querySelector(".todo2");
    const todoList = document.querySelector(".todoList2 > ul");

    const todosKey2 = "todos2";

    const todoId2 = JSON.parse(localStorage.getItem(todosKey2));

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
            localStorage.setItem(todosKey2, JSON.stringify(todos));
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
        li.remove();

        todos = todos.filter(function (data) {
            return data.id !== Number(li.id);
        })

        localStorage.setItem(todosKey2, JSON.stringify(todos));
        console.log(todos);
    }

    todoForm.addEventListener("submit", addTodo);

    if (todoId2) {
        todos = todoId2;
        todoId2.forEach(todoLoad);
    }
})