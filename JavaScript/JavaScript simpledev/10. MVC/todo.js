document.title = 'Hi';

// Model

let todos;
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [{
    title: 'Task',
    dueDate: '23.09.2022',
    id: 'id1'
  }];
}

// Creates a todo
function createTodo(title, dueDate) {
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });

  saveTodos();
}
// Deletes a todo
function removeTodo(idToDelete) {
  todos = todos.filter( function(todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  } );

  saveTodos();
}

// Saving

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Controler

function addTodo() {
  const textbox = document.getElementById('todo-title');
  const datePicker = document.getElementById('date-picker');
  createTodo(textbox.value, datePicker.value);
  add();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  removeTodo(deleteButton.id);
  add();
}

// View
add();

function add() {
  document.getElementById('todo-list').innerHTML = '';
  todos.forEach(function (todo) {
      const divbox = document.getElementById('todo-list');
      const element = document.createElement('div');
      element.innerText = todo.title + ' ' +todo.dueDate;
      const deleteButton = document.createElement('button');
      deleteButton.innerText = '-';
      deleteButton.style = 'margin-left: 12px';
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);
      divbox.appendChild(element);
    }
  )
}

