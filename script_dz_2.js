/* Домашка номер 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами

____________________________________________________________________________________
Домашка номер 3

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно
_____________________________________________________________________________________
Домашка номер 4

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

*/



'use strict';


let nameFilm, scoreFilm;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function ()  {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    rememberMyFilms: function () {
        for(let i=0;i<2;i++) {
            nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
            scoreFilm = +prompt('На сколько оцените его?', '');
            while(nameFilm == "" || nameFilm.length>49 || nameFilm == null) {
                nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
                scoreFilm = +prompt('На сколько оцените его?');
            }
            personalMovieDB.movies[nameFilm] = scoreFilm;
        }
    },

    detectPersonalLevel: function () {
        if(personalMovieDB.count<10){
            alert("Просмотрено довольно мало фильмов");
        } else if((personalMovieDB.count>=10)&&(personalMovieDB.count<30)) {
            alert("Вы классический зритель");
        } else if(personalMovieDB.count>=30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat  ) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for(let i=1;i<2;i++) { //начинаем с единицы, потому что пользователя не волнует, что нумерации в массиве с 0
            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();
            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе')
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, j) => {
            console.log(`Любимый жанр №${j+1} - это ${item}`);
        });  
        },
        
};


 console.log(typeof(!!(1&&2)));

 
