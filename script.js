'use strict';

let today = 'Сегодня ',
     write,
     day,
     item,
     h1w = document.getElementById('words'),
     h1n = document.getElementById('numbers');
const regularity = (value,first, second, third) => {
     if(value == 1 || value == 21 || value == 31 || value == 41 || value == 51){
          item = first;
     }
     else {
               item = third;
     }
     if(value == 2 || value == 3 || value == 4 || value == 22 || value == 24 || value == 23 ||
           value == 32 || value == 34 || value == 33 || value == 42 || value == 44 || value == 43 
          || value == 52 || value == 54 || value == 53){
               item = second;
     }
     else {
               item = third;
     }
     return item;
}, 
     add0 = (num) => {
          if (num < 10){
              num = 0 + String(num);
          }
          return num;
     },
     wordsDate = () => {
     let  date = new Date(),
          day = date.getDay(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds(),
          week = date.getDate(),
          month = date.getMonth(),
          year = date.getUTCFullYear();
     switch(day){
          case 1 : day = 'Понидельник, ';break;
          case 2 : day = 'Вторник, ';break;
          case 3 : day = 'Среда, ';break;
          case 4 : day = 'Четверг, ';break;
          case 5 : day = 'Пятница, ';break;
          case 6 : day = 'Субота, ';break;
          case 0 : day = 'Воскресенье, ';break;
     }
     switch(month){
          case 0 : month = ' Января, '; break;
          case 1 : month = ' Февраля, '; break;
          case 2 : month = ' Марта, '; break;
          case 3 : month = ' Апреля, '; break;
          case 4 : month = ' Мая, '; break;
          case 5 : month = ' Июня, '; break;
          case 6 : month = ' Июля, '; break;
          case 7 : month = ' Августа, '; break;
          case 8 : month = ' Сентября, '; break;
          case 9 : month = ' Октября, '; break;
          case 10 : month = ' Ноября, '; break;
          case 11 : month = ' Декабря, '; break;

     }
     write = today + day + week + month + year + " года, " + hour +
     regularity(hour, ' час ',' часа ',' часов ') + min + regularity(min, ' минута ',' минуты ',' минут ') +
     sec + regularity(sec, ' секунда ',' секунды ',' секунд ') ;
     // console.log();
     
     h1w.textContent = write;
},
     numDate = () => {
          let  date = new Date(),
               hour = add0(date.getHours()),
               min = add0(date.getMinutes()),
               sec = add0(date.getSeconds()),
               week = add0(date.getDate()),
               month = add0( date.getMonth() + 1),
               year = add0(date.getUTCFullYear());
          write = week + '.' + month + '.' + year + '   -   ' + hour + '.' + min + '.' + sec;
          h1n.textContent = write;
      
     }

setInterval(wordsDate, 1000);
setInterval(numDate, 1000);
