let todo1 = 'Ab';
let todo2 = 'Bb';
let todo3 = 'Cb';

let button = document.createElement('button');
button.innerText = 'Press me ooo';
document.body.appendChild(button);

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);

document.title = 'Goodbye';

function addTodo(todo) {
  let element = document.createElement('div');
  element.innerText = todo;
  document.body.appendChild(element);
}