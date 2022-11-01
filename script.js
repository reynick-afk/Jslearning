// "use strict";

// a = 15;
// console.log(a);

// console.log(1);

// Практика подключения js к html страницы

// ПЕременные < вкладываем что-либо

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }

// obj.a = 10;

// console.log(obj);

// Прямых переменных в js нет!


// alert('Are you here?');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Салам алейкум!",
//     "Алейкум салам");

// console.log(answer + "salam");
// console.log(typeof(answer));


// let answers = [];

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Как у вас дела?', '');
// answers[2] = prompt('Кто по жизни?', '');

// document.wriasdte(answers);

// // Условия 

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Слишком много');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('Ok!'): console.log('Error');


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('не верно');
//         break;
//     case 100:
//         console.log('не верно');
//         break;
//     case 51:
//         console.log('в точку');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }

// Циклы

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}