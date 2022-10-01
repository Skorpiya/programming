// Model

let data;
const savedLines = JSON.parse(localStorage.getItem('lines'));

if (Array.isArray(savedLines)) {
  data = savedLines
} else {
  data = [];
}



function addTableLine(type, desription, date, amount) {
  const id = '' + new Date().getTime();
  let innerType;
  if (type === 'choose') {
    return
  } else if (type === 'expenses') {
    innerType = 'Расходы'
  } else {
    innerType = 'Доходы'
  }
  data.push({
    type: innerType,
    description: desription,
    date: date,
    amount: amount,
    id: id
  })
  saveLines();
}

function removeTableLine(idToDelete) {
  data = data.filter( function(line) {
    if (line.id === idToDelete) {
      return false
    } else {
      return true
    }
  })
  saveLines();
}

function saveLines() {
  localStorage.setItem('lines', JSON.stringify(data));
}

// Controller

const addButton = document.querySelector('.add');
addButton.addEventListener('click', function () {
  const type = document.querySelector('.type');
  const description = document.querySelector('.description');
  const date = document.querySelector('.date');
  const amount = document.querySelector('.amount');
  addTableLine(type.value, description.value, date.value, amount.value);
  type.value = 'choose';
  description.value = '';
  date.value = '';
  amount.value = '';
  render();
})

function deleteButton(event) {
  const idDeleteButton = event.target;
  removeTableLine(idDeleteButton.id);
  render();
}

// View

render();

function render()  {
  const body = document.querySelector('tbody');
  body.innerHTML = '';
  data.forEach(function(data) {
    const trow = document.createElement('tr');
    body.appendChild(trow);

    const renderType = document.createElement('td');
    renderType.innerText = data.type;
    trow.appendChild(renderType);

    const renderDescription = document.createElement('td');
    renderDescription.innerText = data.description;
    trow.appendChild(renderDescription);

    const renderDate = document.createElement('td');
    renderDate.innerText = data.date;
    trow.appendChild(renderDate);

    const renderAmount = document.createElement('td');
    renderAmount.innerText = data.amount;
    trow.appendChild(renderAmount);

    const renderDeleteButton = document.createElement('td');
    trow.appendChild(renderDeleteButton);

    const DeleteButton = document.createElement('button');
    DeleteButton.innerText = 'X';
    DeleteButton.id = data.id;
    DeleteButton.onclick = deleteButton;
    renderDeleteButton.appendChild(DeleteButton);
  })
}


