const next = document.getElementById('next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');
let currentActive = 1;

next.addEventListener('click', (event) => {
    currentActive++;
    updateClass(event);
});

prev.addEventListener('click', (event) => {
    currentActive--;
    updateClass(event);
});

function updateClass(event) {
    circles.forEach((circle, idx) => {
        if(idx < currentActive  && event.target.id == "next") 
            circle.classList.add('active');
        if (idx >= currentActive  && event.target.id == "prev")
            circle.classList.remove('active');
    });
    
    progressBar.style.width = (currentActive - 1) / (circles.length - 1) * 100 + "%";

    if (currentActive == 1)
        prev.disabled = true;
    else if (currentActive === circles.length)
        next.disabled = true;
    else {
        next.disabled = false;
        prev.disabled = false;
    }
}
