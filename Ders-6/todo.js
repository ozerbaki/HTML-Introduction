const todos=['Todo 1','Todo 2','Todo 3'];

const wrapper = document.querySelector('.todos-wrapper');

function createTodo(title) {
    const p = document.createElement('p'); //p elementi oluşturur.
    p.classList.add('todo-item'); // p elentine class ekler.
    p.innerText = title; // p tag'inin içine dışarıdan aldığı yazıyı ekliyor.
    wrapper.append(p); // wrapper'ın içine p elentini ekliyor.
}

function renderTodos(todosArr) {
    todosArr.forEach(function (todo) {
        createTodo(todo);
    }   
    );
}

renderTodos(todos);

function removeTodos() {
    wrapper.innerHTML='';
}

const todoForm = document.querySelector('#todo-form');

todoForm.addEventListener('submit', function (event) {
   const todoInput = document.querySelector('#todo-input');
   event.preventDefault();
   todos.push(todoInput.value);
   //createTodo(todoInput.value);
   
   removeTodos();
   renderTodos(todos);
});
