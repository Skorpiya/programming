document.title = 'Hi';

let todos = [{
  title: 'Task',
  dueDate: '23.09.2022',
  id: 'id1'
}];

add();

function addTodo() {
  const textbox = document.getElementById('todo-title');
  const datePicker = document.getElementById('date-picker');

  const id = '' + new Date().getTime();

  todos.push({
    title: textbox.value,
    dueDate: datePicker.value,
    id: id
  });
  add();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  todos = todos.filter( function(todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  } );
  add();
}

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

