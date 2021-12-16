const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(i => {
        i.style.width = width + 'px';
        i.style.height = 'auto';
    });
    rollSlider()
}

window.addEventListener('resize', init)

init();

document.querySelector('.button_slider-next').addEventListener('click', () => {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.button_slider-prev').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}