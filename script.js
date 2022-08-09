'use strict';

// const btnPhone = document.querySelector('#iphone'),
//     btnMacbook = document.querySelector('#macbook'),
//     images = document.querySelectorAll('img');

// const phoneAnimation0 = images[0].animate([
//     { transform: 'translateY(0)' },
//     { transform: 'translateY(100px)' },
//     { transform: 'translateY(-100px)' },
//     { transform: 'translateY(0)' }
// ], {
//     duration: 1000,
//     iterations: Infinity
// });

// const phoneAnimation1 = images[1].animate([
//     // keyframes
//     { transform: 'scaleX(1)' },
//     { transform: 'scaleX(0,75)' },
//     { transform: 'scaleX(0,5)' },
//     { transform: 'scaleX(0,25)' },
//     { transform: 'scaleX(0)' },
//     { transform: 'scaleX(-0,25)' },
//     { transform: 'scaleX(-0,5)' },
//     { transform: 'scaleX(-0,75)' },
//     { transform: 'scaleX(-1)' },
//     { transform: 'scaleX(-0,75)' },
//     { transform: 'scaleX(-0,5)' },
//     { transform: 'scaleX(-0,25)' },
//     { transform: 'scaleX(0)' },
//     { transform: 'scaleX(0,25)' },
//     { transform: 'scaleX(0,5)' },
//     { transform: 'scaleX(0,75)' },
//     { transform: 'scaleX(1)' }

//     // { transform: 'scaleY(1)' },
//     // { transform: 'scaleY(0,5)' },
//     // { transform: 'scaleY(0)' },
//     // { transform: 'scaleY(-0,5)' },
//     // { transform: 'scaleY(-1)' },
//     // { transform: 'scaleY(-0,5)' },
//     // { transform: 'scaleY(0)' },
//     // { transform: 'scaleY(0,5)' },
//     // { transform: 'scaleY(1)' }
// ], {
//     // timing options
//     duration: 1000,
//     iterations: Infinity
// });

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            },
            {
                transform: 'translateY(100px) rotate(120deg)',
                filter: 'opacity(50%)'
            },
            {
                transform: 'translateY(-100px) rotate(240deg)',
                filter: 'opacity(75%)'
            },
            {
                transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
            }
        ], {
            duration: 1000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});

// Ex. 113** - (**) Сложная задача на понятие композиции функций


