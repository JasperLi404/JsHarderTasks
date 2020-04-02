'use strict';
let isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let tries = 10;
const num = Math.ceil(Math.random() * (100 - 1) + 1);
console.log(num);
const GuessNumber = () =>{
    if(tries > 0) { 
        let bool = confirm("Угадай число от 1 до 100. Хорошо?");
        if(bool){
        
            let input = +prompt('Угадай');
            if (isNumber(input)){
            
                tries--;
                if (num < input){
                    
                    alert('Загаданное число меньше, осталось попыток:' + tries);
                    GuessNumber();
                }
                else if (num > input){
                    
                    alert('Загаданное число больше, осталось попыток:' + tries);
                    GuessNumber();
                }
                else if (num == input ){
                    let boo = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                    if(boo){
                        GuessNumber();
                    } else {
                        alert('bye');
                    }
                }
            } else{
                alert('Введи число!');
                GuessNumber();
            } 
            
            
        
                
            
        
        
    }
       
        else{
            alert('Bye');
        }
    }else if (tries == 0){
        let boo = confirm('Попытки закончились, хотите сыграть еще?');
        if(boo){
            GuessNumber();
        } else {
            alert('bye');
        }
        tries=10;
    }
    
}
GuessNumber();
