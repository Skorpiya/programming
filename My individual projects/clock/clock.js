
setInterval(() => {
  const time = document.getElementById('time');
  const dateObject = new Date();
  const hours = dateObject.getHours();
  const minutes = format(dateObject.getMinutes()) + dateObject.getMinutes();
  const seconds = format(dateObject.getSeconds()) + dateObject.getSeconds();
  time.innerText = hours + ":" + minutes + ":" + seconds;
  // time.innerText = dateObject.toLocaleTimeString(); // аналог
}, 10);

function format (number) {
  if (number < 10) {
    return '0'
  } else {
    return ''
  }
}

setInterval(() => {
  const date = document.getElementById('date');
  const dateObject = new Date();
  const dayOfWeek = dayOfWeekConverter(dateObject.getDay());
  const dayDate = dateObject.getDate();
  const month = monthConverter(dateObject.getMonth());
  const year = dateObject.getFullYear();
  date.innerText = dayOfWeek + ', ' + dayDate + ' ' + month + ' ' + year;
}, 10)

function dayOfWeekConverter(number) {
  if (number === 1) {
    return 'Понедельник'
  } else if (number === 2) {
    return 'Вторник'
  } else if (number === 3) {
    return 'Среда'
  } else if (number === 4) {
    return 'Четверг'
  } else if (number === 5) {
    return 'Пятница'
  } else if (number === 6) {
    return 'Суббота'
  } else if (number === 7) {
    return 'Воскресенье'
  } 
}

function monthConverter(number) {
  if (number === 0) {
    return 'Января'
  } else if (number === 1) {
    return 'Февраля'
  } else if (number === 2) {
    return 'Марта'
  } else if (number === 3) {
    return 'Апреля'
  } else if (number === 4) {
    return 'Мая'
  } else if (number === 5) {
    return 'Июня'
  } else if (number === 6) {
    return 'Июля'
  } else if (number === 7) {
    return 'Августа'
  } else if (number === 8) {
    return 'Сентября'
  } else if (number === 9) {
    return 'Октября'
  } else if (number === 10) {
    return 'Ноября'
  } else if (number === 11) {
    return 'Декабря'
  }
}