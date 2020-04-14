'use strict';
document.addEventListener('DOMContentLoaded', function(){

    let up=0,
         right=0;
    const DOMElement = function(selector, height, width, bg, fontSize,up,right){
        let el;
        if(selector[0] === '#'){
            el = document.createElement('p');
            el.id = selector.slice(1);
        } else if(selector[0] === '.'){
            el = document.createElement('div');
            el.classList.add(selector.slice(1));
            
        }
        height = height;
        width = width;
        bg = bg;
        fontSize = fontSize;
        el.style.cssText = `height:${height}; 
                            width:${width};
                            background-color:${bg};
                            font-size:${fontSize};
                            position:absolute;
                            bottom:${up + 'px'};
                            right:${right + 'px'};` ;
        document.body.prepend(el);
    };
   


    function checkKey(e) {
        switch(e.keyCode){
            case 39: right -= 10; break;
            case 40: up -= 10; break;
            case 38: up += 10; break;
            case 37: right +=10; break;
            default: console.log('dkfhkjdfh');break;
            
        }
        console.log(right, up);
        document.body.innerHTML='';
       element = new DOMElement('.eldfgdf','100px','100px','red','2em',up,right); 
    }
    
    document.onkeydown = checkKey;
    const element = new DOMElement('.eldfgdf','100px','100px','red','2em',up,right); 
       console.log(element);
})