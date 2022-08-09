'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

const phoneAnimation0 = images[0].animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(100px)' },
    { transform: 'translateY(-100px)' },
    { transform: 'translateY(0)' }
], {
    duration: 1000,
    iterations: Infinity
});

const phoneAnimation1 = images[1].animate([
    // keyframes
    { transform: 'scaleX(1)' },
    { transform: 'scaleX(-0,25)' },
    { transform: 'scaleX(-0,5)' },
    { transform: 'scaleX(-0,75)' },
    { transform: 'scaleX(-1)' },
    { transform: 'scaleX(-0,75)' },
    { transform: 'scaleX(-0,5)' },
    { transform: 'scaleX(-0,25)' },
    { transform: 'scaleX(1)' }
], {
    // timing options
    duration: 1000,
    iterations: Infinity
});