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

P.S. Функции вызывать не обязательно*/



'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

//start();

let nameFilm, scoreFilm;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMyFilms() {
    for(let i=0;i<2;i++) {
        nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
        scoreFilm = +prompt('На сколько оцените его?', '');
        while(nameFilm == "" || nameFilm.length>49 || nameFilm == null) {
            nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
            scoreFilm = +prompt('На сколько оцените его?');
        }
        personalMovieDB.movies[nameFilm] = scoreFilm;
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count<10){
        alert("Просмотрено довольно мало фильмов");
    } else if((personalMovieDB.count>=10)&&(personalMovieDB.count<30)) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count>=30){
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

//detectPersonalLevel();



//мой неправильный варинат, нужно было создать переменную и потом уже добавлять в массис genres
// function writeYourGenres () {
//     for(let i=1;i<4;i++) { 
//         personalMovieDB.genres.pull = +prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

//Правильный вариант второй задачи
function writeYourGenres () {
        for(let i=1;i<4;i++) { //начинаем с единицы, потому что пользователя не волнует, что нумерации в массиве с 0
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i-1] = genres; //используем i-1, потому что в массивах нумерация с 0, если оставить i=1, то элемент под номером personalMovieDB.genres[0] - будет пустым
        }
    }

writeYourGenres();

//Первый вариант функции showMyDB
// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

//Второй вариант функции showMyDB
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);