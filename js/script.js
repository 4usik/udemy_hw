"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Cколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Cколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const a = prompt ('Один из последних просмотренных фильмов:', ''),
              b = prompt ('На сколько оцените его?', '');
            
        if ((a != null) && (b != null) && (a != '') && (b != '') && (a.length < 50) && (b.length < 50)) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if ((personalMovieDB.count >= 0) && (personalMovieDB.count < 10)) {
        alert ('Просмотрено довольно мало фильмов')
    } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
        alert ('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        alert ('Вы киноман')
    } else {
        alert ('Произошла ошибка')
    };
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    let i = 0;
    while (i < 3) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        i++;
    }
}
writeYourGenres();

// console.log (personalMovieDB);


