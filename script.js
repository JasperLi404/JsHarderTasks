'use strict';
let week = ['понедельник','вторник','среда','четверг','пятница','субота','восресенье'];
let day = (new Date()).getDay();
console.log(typeof(day));

for(let i = 0;i<week.length;i++){
    if (i == 6 || i == 5){
        document.write('<br \/>',week[i].italics());

   }
   else if (day == i+1){
        document.write('<br \/>',week[i].bold());
   }
   else{
        document.write('<br \/>',week[i]);

   }
   
    
}
