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

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }


/// function 

// function showFirstMessage() {
//     console.log('Hello world!');
// }

// showFirstMessage();



// let = num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage('Hello world!');

// console.log(num); /// не корректно так как переменная let в function локальная!!!


// function cal(a, b) {
//     return (a + b);
// }


// console.log(cal(4, 3));
// console.log(cal(44, 34));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };

// logger();


// const calc = (a, b) => { return a + b; }

// console.log(calc(4, 6));

//







// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     } else {
//         console.log('error');
//         i--;
//     }


// }



// const numberOfAnswers = +prompt('Check your luck!', '');

// const personalAnswersDB = {
//     count: numberOfAnswers,
//     correctAnswers: {},
//     answers: {},
//     privat: false
// };



// for (let i = 0; i < 1; i++) {
//     const a = prompt('Check your luck!', '');

//     if (a != null && a != '' && a != a.length < 50) {
//         personalAnswersDB.answers = a;
//         console.log('You are lucky!')
//     } else {
//         console.log('One more');
//         i--;
//     }
// }

// if (numberOfAnswers.count < 5, numberOfAnswers.count > 7) {
//     personalAnswersDB.count = a;
//     console.log('Corect');
// } else {
//     console.log('One more!@');
// }

// console.log(personalAnswersDB);





const answersCheckDB = {
    correctNumber: {},
    answers: {},
    privat: false
}

for (let i = 0; i < 2; i++) {
    const a = +prompt('Check your lucky 1 > 10', '');
    if (a == 6) {
        answersCheckDB.correctNumber = a;
        console.log('Correct');
        i++;
    } else {
        alert('One more')
        console.log('One more');
        i--;
    }

    if (a !== 6) {

        answersCheckDB.answers = a;

    }


}

console.log(answersCheckDB);

alert(+"Infinity");