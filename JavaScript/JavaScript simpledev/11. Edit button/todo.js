document.title = 'Hi';

// Model

let todos;
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [{
    title: 'Empty task',
    dueDate: 'Empty date',
    id: 'id1',
    isEditing: false
  }];
}

// Creates a todo
function createTodo(title, dueDate) {
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
    isEditing: false
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

// Switches Edit mode

function switchEdit(idOfTodo) {
  todos.forEach( function(todo){
    if (todo.id === idOfTodo && todo.isEditing === false) {
      todo.prtitle = todo.title;
      todo.prdueDate = todo.dueDate;
      todo.isEditing = true;
    } else if (todo.id === idOfTodo && todo.isEditing === true) {
      todo.isEditing = false;
    }
  });

  saveTodos();
}

// Changes the content of todo
function changeTodo(idOfTodo, title, dueDate) {
  todos.forEach( function(todo){
    if (todo.id === idOfTodo) {
      todo.title = title;
      todo.dueDate = dueDate;
    } 
  });

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
  textbox.value = '';
  datePicker.value = '';
  add();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  removeTodo(deleteButton.id);
  add();
}

function editTodo(event) {
  const editButton = event.target;
  switchEdit(editButton.id);
  add();
}

function updateTodo(event) {
  const editButton = event.target;
  const textbox = document.getElementById('edit-text');
  const datePicker = document.getElementById('edit-date');
  changeTodo(editButton.id, textbox.value, datePicker.value);
  switchEdit(editButton.id);
  add();
}
// View
add();

function add() {
  document.getElementById('todo-list').innerHTML = '';
  todos.forEach(function (todo) {
      const element = document.createElement('div');
      // element.className = 'line';
      element.className = 'element';
      if (todo.isEditing === false) {
        const textBox = document.createElement('div');
        textBox.innerText = todo.title + ' ' +todo.dueDate;
        element.appendChild(textBox);

        const editButton = document.createElement('button');
        editButton.innerText = '????????????????';
        editButton.style = 'margin-left: 12px';
        editButton.onclick = editTodo;
        editButton.id = todo.id;
        element.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#10006;&#xfe0e;';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        deleteButton.className = 'delete-button';
        const deleteBox = document.createElement('div');
        deleteBox.appendChild(deleteButton);
        element.appendChild(deleteBox);
      } else {
        const editText = document.createElement('input');
        editText.type = 'text';
        editText.value = todo.prtitle;
        editText.id = 'edit-text';
        element.appendChild(editText);

        
        const editDate = document.createElement('input');
        editDate.style = 'margin-left: 12px';
        editDate.type = 'date';
        editDate.value = todo.prdueDate;
        editDate.id = 'edit-date';
        
        element.appendChild(editDate);

        const updateButton = document.createElement('button');
        updateButton.innerText = '????????????????';
        updateButton.style = 'margin-left: 12px';
        updateButton.onclick = updateTodo;
        updateButton.id = todo.id;
        element.appendChild(updateButton);
      }
      const divbox = document.getElementById('todo-list');
      divbox.appendChild(element);
    }
  )
}

