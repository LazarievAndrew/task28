// Часы

// Реализовать через js часы и будильник.

// реализовать визуальное отображение часов
// (электронных или механических)

// реализовать корректное отображение времени

// реализовать возможность установить будильник
// будильник можно поставить 2 видов на заданное время
//  или через определенное время


function clock() {
  
  var date = new Date();
  return document.getElementById("clock").innerHTML = date.toLocaleTimeString();
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

function getMSecToAlarm (time, id){

  const arrTime = time.split(':');

  const hourNow = +arrTime[0];
  const minuteNow = +arrTime[1];
  // const secondNow = +arrTime[2];  //// для классики, см. ниже

  const getAlarmTime = document.getElementById(id).value.split(':');

  const alarmHour = +getAlarmTime[0];
  var alarmMinute = +getAlarmTime[1];

  if (isNaN(alarmMinute)){
    alarmMinute = 0;
  }

  const dayInMsec = 24 * 60 * 60 * 1000;

  var timeNowInMSec = arrTime.reduceRight ((sum, current, index)=>{    //// решил поиграться, заодно получше понять)
    
    return sum + current * 1000 * (60 ** ((arrTime.length-1) - (index)));
  }, 0);

  // var timeNowInMSec = hourNow * 3600000 + minuteNow * 60000 + secondNow * 1000;  //// либо классика)

  var timeToAlarmInMsecFromMidnight = getAlarmTime.reduce((sum, current, index)=>{  //// решил поиграться, заодно получше понять)
    return sum + current * 1000 * (60 ** (getAlarmTime.length - index));
  }, 0);
  
  // var timeToAlarmInMsecFromMidnight = alarmHour * 3600000 + alarmMinute * 60000; ///либо классика)

  if (hourNow > alarmHour || hourNow === alarmHour && minuteNow >= alarmMinute){

    return dayInMsec - timeNowInMSec + timeToAlarmInMsecFromMidnight;

  } else {

    return (timeToAlarmInMsecFromMidnight) - timeNowInMSec;
  }
};

document.getElementById('alarm--on').onclick = function(){

  timerId = setTimeout (() => audio.play(), getMSecToAlarm (clock(), 'alarm--time'))
}

document.getElementById('alarm--off').onclick = function(){
  audio.pause();
  clearTimeout(timerId);
};