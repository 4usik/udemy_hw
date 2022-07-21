"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt ('Cколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Cколько фильмов вы уже посмотрели?', '');
        };
        return personalMovieDB.count
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
    
            const a = prompt ('Один из последних просмотренных фильмов:', ''),
                  b = prompt ('На сколько оцените его?', '');
                
            if ((a != null) && (b != null) && (a != '') && (b != '') && (a.length < 50) && (b.length < 50)) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if ((personalMovieDB.count >= 0) && (personalMovieDB.count < 10)) {
            alert ('Просмотрено довольно мало фильмов')
        } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
            alert ('Вы классический зритель')
        } else if (personalMovieDB.count > 30) {
            alert ('Вы киноман')
        } else {
            alert ('Произошла ошибка')
        };
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function() {
        let i = 0;
        while (i < 3) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if ((genre !== null) && (genre !== '')) {
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }
            i++;
        }
        personalMovieDB.genres.forEach( (item, i) => console.log(`Любимый жанр #${i+1} - это ${item}`));
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
        // console.log (personalMovieDB);
        return personalMovieDB.privat;
    }
};


personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();


// console.log (personalMovieDB);


