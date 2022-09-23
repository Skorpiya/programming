let todo1 = 'Ab';
let todo2 = 'Bb';
let todo3 = 'Cb';


document.title = 'Goodbye';

let todos = [''];

function addTodo() {
  let textbox = document.getElementById('todo-title');
  todos.push(textbox.value);
  let div = document.createElement('div');
  div.innerText = textbox.value;
  document.body.appendChild(div);
}

function addAndUpper(array) {
  array.forEach(
    function (todo) {
      todo = todo.toUpperCase();
      let element = document.createElement('div');
      element.innerText = todo;
      document.body.appendChild(element);
    }
  )
}



function clickDone() {
  let button = document.getElementById('done-button')
  button.innerHTML = '<strong>Done</strong>';
}



let count = 0;

function counterUp() {
  count += 1;
  let counter = document.getElementById('count-div');
  counter.innerText = count;
}

function counterDown() {
  count -= 1;
  let counter = document.getElementById('count-div');
  counter.innerText = count;
}