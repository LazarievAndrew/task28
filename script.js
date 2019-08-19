// Часы

// Реализовать через js часы и будильник.

// реализовать визуальное отображение часов
// (электронных или механических)

// реализовать корректное отображение времени

// реализовать возможность установить будильник
// будильник можно поставить 2 видов на заданное время
//  или через определенное время


function clock() {

  let date = new Date();

  let seconds = date.getSeconds();
  seconds < 10 ? seconds = `0${seconds}` : seconds;
  
  let minutes = date.getMinutes();
  minutes < 10 ? minutes = `0${minutes}` : minutes;

  let hours = date.getHours();
  hours < 10 ? hours = `0${hours}` : hours;

  document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
};


setInterval(clock);


const audio = new Audio(src = './audio/alarm-clock-buzzer-beeps.mp3');


document.getElementById('timer').onclick = function(){

  let getMin = +prompt ('Введите время до оповещения в минутах:');

  if (!isNaN(getMin) && getMin){

    setTimeout (() => audio.play(), getMin*60000);

  } else {

    timer.onclick();
  }; 
};

document.getElementById('stop--timer').onclick = function(){
  return audio.pause();
};

function getAlarm(){

  let date = new Date();
  let minute = date.getMinutes();
  let hour = date.getHours();

  let check = document.getElementById('alarmOn');
  let getHour = document.getElementById('hour').value;
  let getMinute = document.getElementById('minute').value;

  if (check.checked && (+getHour === +hour && +getMinute === +minute)) {
    audio.play();
  };
};

document.getElementById('alarmOn').onclick = function(){
  setInterval(getAlarm, 1000);
};

document.getElementById('stop--alarm').onclick = function(){
  return audio.pause();
}
  
