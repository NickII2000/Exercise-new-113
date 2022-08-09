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

// /*
Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
В итоге мы получим результат, но эта цепочка не совсем удобна.А если действий там будет много ? Можно запустить её вот так:

// result = a(b(c(x)))
const discount = normalizePrice(divide100(multiply20(200)));
Но при увеличении количества функций это превратиться в нечитаемый ад.И вот задача состоит в том, чтобы написать функцию compose, которая будет принимать все эти функции и делать тоже самое.То есть, организовывать композицию функций.Обратите внимание на порядок записи функций - последняя записанная запускается первой и дальше справа налево.Возможно вам понадобится это.

const discount = compose(normalizePrice, divide100, multiply20);
discount(200.0);
Функций может быть сколько угодно и они могут принимать только один начальный аргумент.Так что вариант:

const compose = (a, b, c) => (x) => a(b(c(x)));

Не подходит, так как работает только с 3мя функциями.

    P.S.Да, в работе такие функции уже готовы за нас, мы будем работать с подобными в части по React.Но как оно устроено изнутри, да и вообще такое понятие полезно знать.Лично у меня спрашивали на одном собеседовании и на экзаменах в универе когда - то 🙂

Усложненное задание!

Справились с первой частью ? Хорошо, давайте усложним 🙂

А теперь напишите функцию композиции composeWithArgs, которая принимает сколько угодно аргументов в начале.Пример:

const add1 = function (a) { return a + 1 }
const addAll3 = function (a, b, c) { return a + b + c }
composeWithArgs(add1, addAll3)(1, 2, 3)  => Вернет 7

// */    