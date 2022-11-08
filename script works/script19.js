"use strict"

// function first() {
//     //do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500)
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJs(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJs('JavaScript', done);


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.name);

// delete options.name;
// console.log(options);

for (let key in options) {
    console.log(`Свойства ${key} имеет значение ${options[key]}`)
}