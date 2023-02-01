let slider = document.querySelector('.sliderThree');
let innerSlider = document.querySelector('.sliderThree__inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
    console.log(innerSlider.offsetLeft)
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
    pressed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startx}px`

    checkBoundary();
});

function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px'
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}