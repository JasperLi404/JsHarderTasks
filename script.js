const collection = document.querySelector('.collection'),
      categories = document.querySelector('.categories');
let cards = document.querySelectorAll('.cards');
let db = [], i=0;
const getHeroes = (handler, randomPosition) => {
     fetch('./dbHeroes.json')
     .then(response => response.json())
     .then(randomPosition)
     .then(handler);

}
const getData = (data) => {
     data.forEach(item => db.push(item));
};
const setCards = (photo, name, realName, citizenship, gender, species, birthDay, deathDay, status, movies) => {
     
     let str = ``, movie;
     let card = document.createElement('div');
     let img = document.createElement('img');
     let text = document.createElement('div');
     const checkIt = (str, real) => {
          let string = ``;
          if(real) string = str + ` : ${real} <br>`;
          else string =``;
          return string;
     }
          card.classList.add('card');
          card.setAttribute('Movies', movies);
          img.classList.add('img');
          text.classList.add('text');
          
     if(cards[i].childNodes.length === 3) {
          let cardNew = cards[i].cloneNode();
          collection.append(cardNew);
          cards = document.querySelectorAll('.cards');
          i++;
     }
          cards[i].append(card);
          img.src = photo;
          img.alt = photo;
          str = ` Name: ${name} <br>`;
          if(name !== realName && realName){
               str += `Real name : ${realName}  <br>`;
          }
          str += `Species : ${species}  <br>`;
          str += checkIt('Citizenship', citizenship);
          str += checkIt('Gender', gender);
          str += checkIt('Birth day', birthDay);
          str += checkIt('Death day', deathDay);
          str += checkIt('Status', status);
          
          if(movies){
               movie = movies.join(`; <br>`);
               str += `Movies :  ${movie}`;
          }
          text.innerHTML = str;
          
          card.append(img);
          card.append(text);
};

const chooseCard = (event) => {
     event.preventDefault();
     const target = event.target;
     if(target.classList.contains('movie')){
          categories.childNodes.forEach(item => {
               if(item.className == 'movie choosed') item.classList.remove('choosed');
          });
          target.classList.add('choosed');
          const film = target.getAttribute('film');
          cards.forEach(item => item.innerHTML=``);
          collection.innerHTML =`<div class="cards"></div>`;
          i = 0;
          cards = document.querySelectorAll('.cards');
          getHeroes(renderCard, cards => cards.filter(item => 
               {    
                    if(item.movies) return item.movies.includes(film);
                    else return false;
               }));
          }
     }
const renderCard = (items) => {
     items.forEach(item => 
     
     setCards(item.photo, item.name, item.realName, item.citizenship, 
          item.gender, item.species, item.birthDay, item.deathDay, item.status, 
          item.movies));
}
const getPosition = item => item.sort(()=> Math.random() - 0.5);
categories.addEventListener('click', chooseCard);
getHeroes(renderCard, getPosition);

