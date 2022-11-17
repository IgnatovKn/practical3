"use strict";
function calculateArea(r) {
  let area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area.toFixed(2);
  }
}
let radius = 2.2;
let theArea = calculateArea(radius);
console.log("The area is: " + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@'
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let txt = 'js';
// console.log(txt.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество
// символов в этой строке.
// let txt = "я люблю JS!";
// console.log(txt.length);

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years,myDog,guests
// Функции:  dogYears, makeTea, secret
// Встроенные функции: console.log
// Аргументы: myDog, 4,guests, 'Earl Grey'
// Параметры:dogname, age, cups, tea

// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();

// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt1 = "JS";
console.log(txt1.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово
// 'люблю' и слово 'javascript' тремя разными способами
// (через substr, substring, slice).
let txt2 = "Я люблю Javascript!";

console.log(txt2.substr(2, 5));
console.log(txt2.substring(2, 8));
console.log(txt2.slice(2, 8));

console.log(txt2.substr(8, 10));
console.log(txt2.substring(8, 18));
console.log(txt2.slice(8, 18));

// Дана строка 'я люблю JS!'. Найдите позицию
// подстроки 'люблю'.
console.log(txt2.indexOf("люблю"));
console.log(txt2.lastIndexOf("люблю"));

// Дана переменная txt, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему
// принципу: если количество символов этого текста больше
// заданного в переменной n, то в переменную result запишем
// первые n символов строки txt и добавим в конец
// троеточие '...'. В противном случае в переменную
// result запишем содержимое переменной txt.

function sliceTxt3(n) {
  if (txt3.length > n) {
    console.log(txt3.slice(0, n));
  } else {
    console.log(txt3);
  }
}
let txt3 = "Я люблю Javascript!";
sliceTxt3(10);

// Для решения задач данного блока вам понадобятся следующие
// методы: replace.
// Дана строка 'Я-люблю-JS!'.
// Замените все  '-' на '!' с помощью глобального
// поиска и замены.
let txt4 = "Я-люблю-JS!";
console.log(txt4.replace(/-/g, "!"));

// Дана строка 'я люблю JS'. С помощью метода split
// запишите каждое слово этой строки в отдельный элемент
// массива.
let string1 = "я люблю JS";
let arr = string1.split(" ");
console.log(arr);
// Дана строка 'привет мир'. С помощью метода split
// запишите каждый символ этой строки в отдельный элемент
// массива.
let srting2 = "привет мир";
let arr2 = srting2.split("");
console.log(arr2);
