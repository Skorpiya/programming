document.title = 'Hi';

const todos = [{
  title: '',
  dueDate: ''
}];

add();

function addTodo() {
  const textbox = document.getElementById('todo-title');
  const datePicker = document.getElementById('date-picker');
  todos.push({
    title: textbox.value,
    dueDate: datePicker.value
  });
  add();
}

function add() {
  document.getElementById('todo-list').innerHTML = '';
  todos.forEach(function (todo) {
      const element = document.createElement('div');
      element.innerText = todo.title + ' ' +todo.dueDate;
      const divbox = document.getElementById('todo-list');
      divbox.appendChild(element);
    }
  )
}

