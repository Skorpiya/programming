let todo1 = 'Ab';
let todo2 = 'Bb';
let todo3 = 'Cb';

let button = document.createElement('button');
button.innerText = 'Press me ooo';
document.body.appendChild(button);

document.title = 'Goodbye';

function addTodo(todo) {
  let element = document.createElement('div');
  element.innerText = todo;
  document.body.appendChild(element);
}

let todos = ['something', todo1, todo2, todo3];
todos.push('something pushed'); // добавляет элемент
// todos.pop(); // удаляет последний элемент

for (let i = 0; i < todos.length; i++) {
  todos[i] = todos[i].toUpperCase();
  addTodo(todos[i]);
}

