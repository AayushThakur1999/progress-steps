const next = document.getElementById('next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');
let currentActive = 1;

next.addEventListener('click', () => {
    for (const circle of circles) {
        if (!circle.classList.contains('active')) {
            circle.classList.add('active');
            currentActive++;
            prev.removeAttribute('disabled');
            break;
        }
    }
    progressBar.style.width = (currentActive - 1) / (circles.length - 1) * 100 + "%";
    if(currentActive == circles.length){
        next.setAttribute('disabled', true);
    }
});

prev.addEventListener('click', () => {
    for(let i = circles.length - 1; i > 0; i--) {
        if (circles[i].classList.contains('active')) {
            circles[i].classList.remove('active');
            currentActive--;
            next.removeAttribute('disabled');
            break;
        } 
    }
    progressBar.style.width = 100 - (circles.length - currentActive) / (circles.length - 1) * 100 + "%";
    if(currentActive == 1) {
        prev.setAttribute('disabled', true);
    }
});
