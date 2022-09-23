document.title = 'Hi';

const todos = [''];

function addTodo() {
  const textbox = document.getElementById('todo-title');
  todos.push(textbox.value);
  add(todos);
}

function add(array) {
  document.getElementById('todo-list').innerHTML = '';
  array.forEach(function (todo) {
      todo = todo.toUpperCase();
      const element = document.createElement('div');
      element.innerText = todo;
      const divbox = document.getElementById('todo-list');
      divbox.appendChild(element);
    }
  )
}

let cart = [''];

function addAppleToCart() {
  const fruit = document.getElementById('apple');
  cart.push(fruit.innerText);
  addToCart(cart);
}

function addOrangeToCart() {
  const fruit = document.getElementById('orange');
  cart.push(fruit.innerText);
  addToCart(cart);
}

function addAvocadoToCart() {
  const fruit = document.getElementById('avocado');
  cart.push(fruit.innerText);
  addToCart(cart);
}

function clearCart() {
  document.getElementById('cart').innerHTML = '';
  cart = [''];
}

function addToCart(array) {
  document.getElementById('cart').innerHTML = '';
  array.forEach(function (todo) {
      const element = document.createElement('div');
      element.innerText = todo;
      const divbox = document.getElementById('cart');
      divbox.appendChild(element);
    }
  )
}

// АЛЬТЕРНАТИВНОЕ РЕШЕНИЕ
// {/* <button onclick="addToCart('Apple')">Apple</button>
// <button onclick="addToCart('Tomato')">Tomato</button>
// <button onclick="addToCart('Eggs')">Eggs</button>
// <button onclick="clearCart()">Clear</button>
// <div id="cart"></div>
// <script>
//   // BONUS POINTS if you saved this variable outside the
//   // function so you can reuse it and not have to run
//   // document.getElementById() every time.
//   const cart = document.getElementById('cart');

//   // BONUS POINTS if you wrote this function with 1 parameter.
//   // Writing separate functions like addApple(), addTomato(),
//   // is fine too, but this make the function more reusable.
//   function addToCart(food) {
//     const cartItem = document.createElement('div');
//     cartItem.innerText = food;
//     cart.appendChild(cartItem);
//   }

//   function clearCart() {
//     cart.innerHTML = '';
//   }
// </script> */}


const number = document.getElementById('number');

function convertCm() {
  const value = document.createElement('div');
  value.innerText = +number.value * 2.54;
  document.body.appendChild(value);
}

function convertInch() {
  const value = document.createElement('div');
  value.innerText = +number.value / 2.54;
  document.body.appendChild(value);
}