"use stric"



// Задача.
// Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

// let str = 'abcde';
// alert(str[0]);
// alert(str[3]);
// alert(str[4]);



// Задача. Напишите скрипт, который считает количество секунд в часе.

// alert(60 * 60 * 24);



// Задача.Переделайте приведенный код так, чтобы в нем использовались операции += , -= , *= , /=, ++, --. 
// Количество строк кода при этом не должно измениться.Код для переделки:

//     var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);



// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);



// Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.

// let num = 3;
// alert(num);



// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).

// let a = 10,
//     b = 2;

// a - b;  
// a + b;
// a * b;
// a / b;

// alert(a, b);
// // alert(a + b, a - b, a * b, a / b);



// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.

// let c = 15,
//     d = 2;
// let result = c + d;
// console.log(result);
// alert(result);



// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

// let a = 10,
//     b = 2,
//     c = 5;
// alert(a + b + c);



// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. 
// Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

// let a = 17,
//     b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// console.log(result);



// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.

// let str = 'Привет мир!';
// console.log(str);



// Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.



// const str = 'привет, ',
//     str2 = 'мир!';
// console.log(str + str2);



// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

// let name = 'Danial';
// console.log(`Привет, ${name}!`);



// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

// let age = 19;
// console.log(`Мне ${age} лет!`);



// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

// let name = prompt('Ваше имя', '');

// alert(`Ваше имя ${name}`);



// Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

// let number = +prompt('Введите ваше число', '');

// alert(`Ваше число в квадрате ${number * number} `);



// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

// const str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);

// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

// const num = '12345';

// num[0];
// num[1];
// num[2];
// num[3];
// num[4];

// console.log(num[0] * num[1] * num[2] * num[3] * num[4]);



// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

// let time = 60 * 60;
// console.log(time);



// Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

// let hour = 21;
// let minute = 42;
// let second = 30;

// alert(`${hour}:${minute}:${second}`);


// Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

// const number = 1233333;

// alert(number * number);



// Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// alert(num);

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);



// Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

// var num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// alert(num);

// let num = 10;
// num++;
// num++;
// num--;
// alert(num);


// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; //// вызывем массив со знаечением дней недели
// let arr = ['пн', 256, 'ср', 34, 38, 'сб', 95];


// alert(arr[2]); // Выводим отдельный элемент массива



// ассоциативные массивы | ключ: значение.

// let obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
// alert(obj[1]); //выведет 'пн'

// let obj = { 'Коля': 200, 'Вася': 300, 'Петя': 400 };

// let obj = { key1: 200, key2: 300, key2: 400 };
// alert(obj.key1); //выведет 200