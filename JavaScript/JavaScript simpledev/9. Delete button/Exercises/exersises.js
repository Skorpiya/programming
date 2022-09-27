const numbers = [1, 5, -2, 4, 3, 5];

function fMax() {
  let max = 0;
  numbers.forEach( function(number) {
    if (number >= max) {
      max = number;
    }
  })
  addNum(max);
  return max;
}

function fMin() {
  let min = numbers[0];
  numbers.forEach( function(number) {
    if (number <= min) {
      min = number;
    }
  })
  addNum(min);
}

function fMinNonNeg() {
  let min = fMax();
  numbers.forEach( function(number) {
    if (number <= min && number >= 0) {
      min = number;
    }
  })
  addNum(min);
}

function addNum(number) {
  const spisok = document.getElementById('spisok');
  spisok.innerHTML = '';
  const element = document.createElement('div');
  element.innerText = number;
  spisok.appendChild(element);
}

const myFruits = ['cherry', 'apple', 'orange', 'apple', 'banana', 'apple'];

function pick2Apples() {
  let i = 0;
  const apples = myFruits.filter( function(apple) {
    if (apple == 'apple' && i<2) {
      i++;
      return false
    } else {
      return true
    }
  })
  addFruits(apples);
}

function pick2Apples1Orange() {
  let i = 0;
  const apples = myFruits.filter( function(apple) {
    if (apple == 'apple' && i<2) {
      i++;
      return false
    } else if (apple == 'orange') {
      return false
    } else {
      return true
    }
  })
  addFruits(apples);
}

function pick2LastApples() {
  let i = 0;
  let apples = myFruits.reverse()
  apples = apples.filter( function(apple) {
    if (apple == 'apple' && i<2) {
      i++;
      return false
    } else {
      return true
    }
  })
  addFruits(apples);
}

function addFruits(myFruits1) {
  let fruits = document.getElementById('fruits');
  fruits.innerHTML = '';
  myFruits1.forEach(function(fruit) {
    const element = document.createElement('div');
    element.innerText = fruit;
    fruits.appendChild(element);
  })
}