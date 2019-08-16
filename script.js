// Часы

// Реализовать через js часы и будильник.

// реализовать визуальное отображение часов
// (электронных или механических)

// реализовать корректное отображение времени

// реализовать возможность установить будильник
// будильник можно поставить 2 видов на заданное время
//  или через определенное время

var clock = document.getElementById('clock');

function time() {

  let date = new Date();

  let seconds = date.getSeconds();
  seconds < 10 ? seconds = '0' + seconds : seconds;
  
  let minutes = date.getMinutes();
  minutes < 10 ? minutes = '0' + minutes : minutes;

  let hours = date.getHours();
  hours < 10 ? hours = '0' + hours : hours;

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
};

setInterval(time);

let getMSec = (minutes) => minutes * 60000;

let audio = new Audio ();
audio.src = './audio/alarm-clock-buzzer-beeps.mp3';

let alarm = () => audio.play();

let setTimer = timer.onclick = () => {
  let getMin = +prompt ('Введите время до оповещения в минутах:');
  if (!isNaN(getMin) && getMin){
    let x = getMSec(getMin);
    setTimeout (alarm, x);
  } else {
    setTimer();
  }; 
};

let stopTimer = document.getElementById('stop--timer');

stopTimer.onclick = () => audio.pause();

let getValue = (x) => {
  let select = document.getElementById(x);
  let value = select.value;
  return value;
};

let getAlarm = () => {
  let d = new Date();

  let m = d.getMinutes();
  m < 10 ? m = '0' + m : m;

  let h = d.getHours();
  h < 10 ? h = '0' + h : h;

  let check = document.getElementById('alarmOn');
  let getHour = getValue('hour');
  let getMinute = getValue('minute');

  if (check.checked && (+getHour === +h && +getMinute === +m)) {
    audio.play();
  };
};

let setAlarm = document.getElementById('alarm');

setAlarm.onclick = () => setInterval(getAlarm, 1000);

let stopAlarm = document.getElementById('stop--alarm');

stopAlarm.onclick = () => audio.pause();
  
