let todo1 = 'Ab';
let todo2 = 'Bb';
let todo3 = 'Cb';

let button = document.createElement('button');
button.innerText = 'Press me ooo';
document.body.appendChild(button);

document.title = 'Goodbye';

let todos = ['something', todo1, todo2, todo3];
todos.push('something pushed'); // добавляет элемент
// todos.pop(); // удаляет последний элемент

let doubledArray = [];

todos.forEach(
  function Double(todo) {
    doubledArray.push(todo);
    doubledArray.push(todo);
  }
)

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

function addNumber(number) {
  let element = document.createElement('div');
  element.innerText = number;
  document.body.appendChild(element);
}

addAndUpper(doubledArray);

let sum = 0;
let numbers = [4, 5, 10, 11];

numbers.forEach (
  function (number) {
    sum += number;
  }
)

addNumber(sum);
