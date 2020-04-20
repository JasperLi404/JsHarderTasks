'use strict';
const bird = document.querySelector('.bird');
let count = 0;
let flyInterval;
const flyAnimate = () => {
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    if (count < 530)  {
        bird.style.top = count + 'px';
        bird.style.left = count * 2 + 'px';
    } else {
        cancelAnimationFrame(flyInterval);
    }
}
let animate = false;
document.addEventListener('click', () => {
    if (animate) {
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = false;
    }
    else {
        animate = true;
        cancelAnimationFrame(flyInterval);
    }
});
document.querySelector('.reset').addEventListener('click', () => {
    count = 0;
    bird.style.top = count + 'px';
    bird.style.left = count * 2 + 'px';
    animate = false;
});
