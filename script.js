const slider = document.querySelector('.container');
const container = document.querySelectorAll('.slide');

document.getElementById('left').addEventListener('click', function() {
    toPrevious();
});

document.getElementById('left').addEventListener('click', function() {
    toNext();
});

let current = 0
let prev = 11
let next = 1

const toPrevious = () => {
    console.log('prev')
    if (current > 0) {
        toSlide(current - 1)
    } else {
        toSlide(container.length - 1)
    }
}

const toNext = () => {
    if (current < 11 ) {
        toSlide(current + 1)
    } else {
        toSlide(0)
    }
}

