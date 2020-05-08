'use strict';
let db={};
const autocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
     defaultText = document.querySelector('.dropdown-lists__list--default'),
    select = document.querySelector('.dropdown-lists__list--select');
const input = document.getElementById('select-cities'),
      cross = document.querySelector('.close-button');
const button = document.querySelector('.button');
const label  = document.querySelector('.label');
let lang;

const  getCookie = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
if(localStorage.getItem('language')){
    lang = getCookie('language');
} else{
    lang = prompt("EN / RU / DE").toUpperCase();
    document.cookie = `language = ${lang}`;
    localStorage.setItem('language', lang);
}



const getCities = (handler, randomPosition) => {
    fetch('./db_cities.json')
    .then(response => response.json())
    .then(randomPosition)
    .then(handler);
}

const put = (data) => {
    db = data;
    const arr = db[lang];
    let j=0;
    if(lang == 'DE'){
        let str = arr[0];
        arr[0] = arr[1];
        arr[1] = str;
    } else if( lang == 'EN'){
        let str = arr[0];
        arr[0] = arr[2];
        arr[2] = str;

    }
    arr.forEach((i)=>{  
       
            let countryBlock = document.createElement('div');
            countryBlock.classList.add('dropdown-lists__countryBlock');
            countryBlock.innerHTML = ` 
                <div class="dropdown-lists__total-line">
                    <div class="dropdown-lists__country">${i.country}</div>
                    <div class="dropdown-lists__count">${i.count}</div>
               </div>`;
               i.cities.forEach((elem)=>{
                   let line = document.createElement('div');
                    line.classList.add('dropdown-lists__line');
                   line.innerHTML = `
                   <div class="dropdown-lists__city">${elem.name}</div>
                   <div class="dropdown-lists__count">${elem.count}</div>`;
                   countryBlock.appendChild(line);
               });

               if(j==3) return;
                j++;
               defaultText.querySelector('.dropdown-lists__col').append(countryBlock);
        
        
    });
   

};

const filter = data => {
    return data;
};
const find = () => {
    const letter = new RegExp('^'+input.value+'.*','i'+'g');
        const arr = db[lang];
        defaultText.style.display = 'none';
        autocomplete.style.display  = 'flex';
        autocomplete.querySelector('.dropdown-lists__col').innerHTML=``;
        console.log(arr);
        console.log(letter);
        arr.forEach((i)=>{
                let countryBlock = document.createElement('div');
                countryBlock.classList.add('dropdown-lists__countryBlock');
                if(letter.test(i.country)){
                    countryBlock.innerHTML = ` 
                        <div class="dropdown-lists__total-line">
                            <div class="dropdown-lists__country">${i.country}</div>
                            <div class="dropdown-lists__count">${i.count}</div>
                       </div>`;
                }
                   i.cities.forEach((elem)=>{
                       if(letter.test(elem.name)){
                           let line = document.createElement('div');
                            line.classList.add('dropdown-lists__line');
                           line.innerHTML = `
                           <div class="dropdown-lists__city">${elem.name}</div>
                           <div class="dropdown-lists__count">${elem.count}</div>`;
                           countryBlock.appendChild(line);
                       }
                   });
                   autocomplete.querySelector('.dropdown-lists__col').append(countryBlock);
            
        });
            
        
    };
const followeTheLink = () => {
    let target = event.target;
    let link;
    label.style.display = 'none';
    if(target.closest('.dropdown-lists__line')){
        cross.style.display = 'flex';
        if(target.className !== 'dropdown-lists__line') target = target.parentNode;
        let code = target.querySelector('.dropdown-lists__count').textContent;
        db[lang].forEach(item=>{
            item.cities.forEach(elem => {
                if(code === elem.count){
                    link  = elem.link;
                    return;
                }
            });
        });
        button.href=link;        
        input.value = event.target.parentNode.querySelector('.dropdown-lists__city').textContent;
    }
    if(event.target.closest('.dropdown-lists__total-line')){
        cross.style.display = 'flex';
        // colSelect = select.querySelector('.dropdown-lists__col');
        input.value = event.target.parentNode.querySelector('.dropdown-lists__country').textContent;
        // colSelect.innerHTML=``;
    }
    
    
}

getCities(put, filter);
input.addEventListener('input', find.bind(this));
document.querySelector('.dropdown-lists').addEventListener('click', followeTheLink.bind(this));
cross.addEventListener('click', () => {
    cross.style.display = 'none';
    input.value = '';
    label.style.display = 'flex';
})