"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Hello');
    }
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);

// console.log(Object.keys(options).length); ////// Очень важно, сокрашает код

// console.log(options.name);

// // delete options.name; /// Удаление свойства!
// console.log(options);


// /// Для перебора св-ва обьекта функция обекта

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} и меет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойства ${key} и меет значение ${options[key]}`);
//         counter++;
//     }

// }

// console.log(counter);