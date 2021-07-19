/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";*/
    //$scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}];

    //JSON array containing all movie names, genres, ratings, and image links
    $scope.moviesList=[{title:'The Departed',genre:'crime',rating:99,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'},{title:'Ex Machina',genre:'scifi',rating:99,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg'},{title:'The Social Network',genre:'drama',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Fight Club',genre:'thriller',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Good Will Hunting',genre:'drama',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Dead Poets Society',genre:'drama',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Terminator 2',genre:'scifi',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Star Wars: Episode V - The Empire Strikes Back',genre:'scifi',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Return of the King',genre:'fantasy',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Nightcrawler',genre:'thriller',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Goodfellas',genre:'crime',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Shape of Water',genre:'unique',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg'},{title:'Moon',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_SX300.jpg'},{title:'The Godfather Part II',genre:'crime',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Blade Runner',genre:'scifi',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Memento',genre:'thriller',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Birdman or (the Unexpected Virtue of Ignorance)',genre:'drama',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg'},{title:'Spotlight',genre:'drama',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg'},{title:'Hell or High Water',genre:'crime',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_SX300.jpg'},
    {title:'The Silence of the Lambs',genre:'thriller',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Rocky',genre:'drama',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg'},{title:'A Clockwork Orange',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg'},{title:'Children of Men',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ5NTI2NTI4NF5BMl5BanBnXkFtZTcwNjk2NDA2OQ@@._V1_SX300.jpg'},
    {title:'Arrival',genre:'scifi',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg'},{title:'Moonlight',genre:'drama',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg'},{title:'The Shining',genre:'thriller',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Godfather',genre:'crime',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Dark Knight',genre:'superhero',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'},{title:'The Prestige',genre:'thriller',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg'},{title:'The Terminator',genre:'scifi',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Her',genre:'scifi',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg'},{title:'Alien',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpghttps://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_SX300.jpg'},
    {title:'Spider-Man: Into the Spider-Verse',genre:'superhero',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg'},{title:'Die Hard',genre:'action',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Interstellar',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Up in the Air',genre:'drama',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_SX300.jpg'},{title:'Snowpiercer',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_SX300.jpg'},
    {title:'The Farewell',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg'},{title:'12 Monkeys',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Black Panther',genre:'superhero',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg'},{title:'Lady Bird',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Scarface',genre:'crime',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'The Martian',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg'},{title:'Blade Runner: 2049',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'},{title:'Mad Max: Fury Road',genre:'scifi',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Nice Guys',genre:'crime',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},{title:'Argo',genre:'drama',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {title:'WALL-E',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg'},{title:'Get Out',genre:'thriller',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg'},{title:'There Will Be Blood',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg'},{title:'BlacKkKlansman',genre:'drama',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg'},{title:'Gladiator',genre:'action',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'Perks of Being a Wallflower',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZThjMmQ5YjktMTUyMC00MjljLWJmMTAtOWIzNDIzY2VhNzQ0XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg'},{title:'Ready Player One',genre:'scifi',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg'},{title:'Se7en',genre:'thriller',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Inception',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'},
    {title:'The Town',genre:'crime',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcyNzcxODg3Nl5BMl5BanBnXkFtZTcwMTUyNjQ3Mw@@._V1_SX300.jpg'},{title:'The Shawshank Redemption',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Starship Troopers',genre:'scifi',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWExNzg3MmMtYjc3MS00MzFlLWJiOWQtNWYxZTgxNjhlZTQ2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Hurt Locker',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Peanut Butter Falcon',genre:'drama',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWVmZGQ0MGYtMDI1Yy00MDkxLWJiYjQtMmZjZmQ0NDFmMDRhXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg'},{title:'The Sixth Sense',genre:'thriller',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg'},{title:'Taxi Driver',genre:'drama',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Matrix',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'Casino Royale',genre:'action',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Jurassic Park',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg'},{title:'Mission: Impossible - Fallout',genre:'action',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg'},{title:'Minority Report',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Us',genre:'thriller',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg'},{title:'Moneyball',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg'},{title:'Pulp Fiction',genre:'unique',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Source Code',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_SX300.jpg'},
    {title:'Knives Out',genre:'crime',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg'},{title:'Sorry to Bother You',genre:'unique',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjgwMmI4YzUtZGI2Mi00M2MwLWIyMmMtZWYzMWZmNzAyNmYwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Thor: Ragnarok',genre:'superhero',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg'},{title:'Being John Malkovich',genre:'unique',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmUxY2MyOTQtYjRlMi00ZWEwLTkzODctZDMxNDcyNTFhYjNjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
    {title:'District 9',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Captain America: Civil War',genre:'superhero',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'},{title:'Avengers: Infinity War',genre:'superhero',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'},{title:'Ford v Ferrari',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg'},
    {title:'Once Upon a Time...In Hollywood',genre:'drama',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},{title:'Inglourious Basterds',genre:'action',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Django Unchained',genre:'action',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg'},{title:'Dallas Buyers Club',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg'},
    {title:'Drive',genre:'crime',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg'},{title:'A Quiet Place',genre:'thriller',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg'},{title:'The Theory of Everything',genre:'drama',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg'},{title:'Zodiac',genre:'thriller',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Edge of Seventeen',genre:'drama',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BODE2NjE4NjYyMV5BMl5BanBnXkFtZTgwNzk3MjQ0OTE@._V1_SX300.jpg'},{title:'The Wolf of Wall Street',genre:'drama',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg'},{title:'The Way, Way Back',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTU5ODk5NDg0Nl5BMl5BanBnXkFtZTcwNzQwMjI1OQ@@._V1_SX300.jpg'},{title:'Catch Me If You Can',genre:'crime',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg'},
    {title:'Iron Man',genre:'superhero',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'},{title:'Safety Not Guaranteed',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWU3ZDJmMTQtZjRiZi00MjQ5LWFlZjctYzhjMjRlZGJmMTY3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg'},{title:'Star Trek',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg'},{title:'Mad Max',genre:'scifi',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM4Mjg5ODEzMV5BMl5BanBnXkFtZTcwMDc3NDk0NA@@._V1_SX300.jpg'},
    {title:'The Lobster',genre:'unique',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SX300.jpg'},{title:'The Endless',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjA5OTI1MjgwMl5BMl5BanBnXkFtZTgwMDU2NzY2NDM@._V1_SX300.jpg'},{title:'The Dark Knight Rises',genre:'superhero',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg'},{title:'Baby Driver',genre:'crime',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SX300.jpg'},
    {title:'Saving Private Ryan',genre:'action',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'},{title:'Straight Outta Compton',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_SX300.jpg'},{title:'Uncut Gems',genre:'drama',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'},{title:'Apollo 13',genre:'drama',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Hot Fuzz',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'Annihilation',genre:'scifi',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SX300.jpg'},{title:'The Big Sick',genre:'drama',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SX300.jpg'},{title:'Looper',genre:'scifi',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_SX300.jpg'},{title:'Whiplash',genre:'drama',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Logan',genre:'superhero',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'},
    {title:'Rush',genre:'drama',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Scott Pilgrim Vs. The World',genre:'comedy',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_SX300.jpg'},{title:'Friday Night Lights',genre:'drama',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcxMDI5MTM4Ml5BMl5BanBnXkFtZTcwNjA4MDcyMQ@@._V1_SX300.jpg'},{title:'Dunkirk',genre:'action',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg'},{title:'Edge of Tomorrow',genre:'scifi',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg'},
    {title:'The Other Guys',genre:'comedy',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_SX300.jpg'},{title:'Back to the Future',genre:'scifi',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Zombieland',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg'},{title:'The Big Short',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'Gone Girl',genre:'thriller',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg'},
    {title:'Silver Linings Playbook',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg'},{title:'Total Recall',genre:'scifi',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg'},{title:'Ad Astra',genre:'scifi',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZTBmMi00MGQ5LWFjN2MtOGEyZTliNGY1MzFiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'},{title:'Unbreakable',genre:'superhero',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDIwMjAxNzktNmEzYS00ZDY5LWEyZjktM2Y0MmUzZDkyYmZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'V for Vendetta',genre:'action',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg'},
    {title:'Shutter Island',genre:'thriller',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Babadook',genre:'thriller',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_SX300.jpg'},{title:"Ocean's Eleven",genre:'crime',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'Jojo Rabbit',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg'},{title:'The Karate Kid',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'10 Cloverfield Lane',genre:'thriller',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_SX300.jpg'},{title:'Another Earth',genre:'scifi',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAzNTIzMjkxNjJeQTJeQWpwZ15BbWU3MDEwNDQ2OTU@._V1_SX300.jpg'},{title:'Joker',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'What We Do in the Shadows',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg'},{title:'Miracle',genre:'drama',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEyOTk1OTcyNV5BMl5BanBnXkFtZTYwNjMzNDU3._V1_SX300.jpg'},
    {title:'The Truman Show',genre:'drama',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'The Gift',genre:'thriller',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQzMjM2NjM1Nl5BMl5BanBnXkFtZTgwMDM1MjQyNTE@._V1_SX300.jpg'},{title:'Requiem for a Dream',genre:'drama',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Under the Skin',genre:'scifi',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU1MDEwMDg4Nl5BMl5BanBnXkFtZTgwOTk3NTcxMTE@._V1_SX300.jpg'},{title:'Braveheart',genre:'action',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Fifth Element',genre:'scifi',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg'},{title:'Independence Day',genre:'scifi',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'War of the Worlds',genre:'scifi',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg'},{title:'Men in Black',genre:'scifi',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Anchorman: The Legend of Ron Burgundy',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_SX300.jpg'},
    {title:'Step Brothers',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Hateful Eight',genre:'action',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg'},{title:'Office Space',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_SX300.jpg'},{title:'2001: A Space Odyssey',genre:'scifi',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    //below movies not from original list
    {title:'Captain America: The Winter Soldier',genre:'superhero',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg'},{title:'Captain America: The First Avenger',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg'},{title:'Doctor Strange',genre:'superhero',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'},{title:'Avengers: Endgame',genre:'superhero',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'},{title:'Avengers: Age of Ultron',genre:'superhero',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'},
    {title:'The Avengers',genre:'superhero',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Thor',genre:'superhero',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'},{title:'Thor: The Dark World',genre:'superhero',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg'},{title:'Iron Man 2',genre:'superhero',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg'},{title:'Iron Man 3',genre:'superhero',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg'},
    {title:'WarGames',genre:'scifi',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_SX300.jpg'},{title:'World War Z',genre:'scifi',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Serenity',genre:'scifi',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWE2MDAwZjEtODEyOS00ZjYyLTgzNDUtYmNiY2VmNWRiMTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:"The World's End",genre:'scifi',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_SX300.jpg'},{title:'Avatar',genre:'scifi',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'},
    {title:'Watchmen',genre:'scifi',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Robocop',genre:'scifi',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Bird Box',genre:'scifi',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SX300.jpg'},{title:'The Running Man',genre:'scifi',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWU4NzA2OWYtNGQ0MS00YWNkLTg4M2YtZjlkZmY1YmJjMDE4XkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg'},{title:'Prometheus',genre:'scifi',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SX300.jpg'},
    {title:"Ender's Game",genre:'scifi',rating:57,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg'},{title:'Real Steel',genre:'scifi',rating:57,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg'},{title:'I, Robot',genre:'scifi',rating:52,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg'},{title:'In Time',genre:'scifi',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg@@._V1_SX300.jpg'},{title:'Gamer',genre:'scifi',rating:46,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_SX300.jpg'},
    {title:'Death Race',genre:'scifi',rating:44,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTA4ODc4YTQtM2YyZS00YTgzLTgyMTAtMTg4Y2Q1YWFmZDYzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg'},{title:'Tron',genre:'scifi',rating:51,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzZhNjYyZDYtZmE4MC00M2RlLTlhOGItZDVkYTVlZTYxOWZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Oblivion',genre:'scifi',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg'},{title:'Elysium',genre:'scifi',rating:41,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDc2NjU0MTcwNV5BMl5BanBnXkFtZTcwMjg4MDg2OQ@@._V1_SX300.jpg'},{title:'The Last Starfighter',genre:'scifi',rating:52,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjIzMWIzMmUtM2E0MC00OTExLWIzYzEtNWIzNzg3M2VjZmQ5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {title:'Tron: Legacy',genre:'scifi',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_SX300.jpg'},{title:'The Maze Runner',genre:'scifi',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg'},{title:'Pacific Rim',genre:'scifi',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg'},{title:'Battlefield Earth',genre:'scifi',rating:23,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg0Njk2OTM3OF5BMl5BanBnXkFtZTYwNTAyMzc3._V1_SX300.jpg'},{title:'Cowboys + Aliens',genre:'scifi',rating:22,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM1MzkyNzQ3OV5BMl5BanBnXkFtZTcwMDk1NTg2NQ@@._V1_SX300.jpg'},
    {title:'Lucy',genre:'scifi',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_SX300.jpg'},{title:'Battleship',genre:'scifi',rating:13,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI5NTM5MDA2N15BMl5BanBnXkFtZTcwNjkwMzQxNw@@._V1_SX300.jpg'},{title:'After Earth',genre:'scifi',rating:11,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MzQyMjkwMl5BMl5BanBnXkFtZTcwMDk2OTE0OQ@@._V1_SX300.jpg'},{title:'The Giver',genre:'scifi',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY1MTIxMjg2Ml5BMl5BanBnXkFtZTgwMjUyNzgwMjE@._V1_SX300.jpg'},{title:'Jupiter Ascending',genre:'scifi',rating:8,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQyNzk2MjA2NF5BMl5BanBnXkFtZTgwMjEwNzk3MjE@._V1_SX300.jpg'},
    {title:'Star Wars: Episode VIII - The Last Jedi',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'},{title:'Star Wars: Episode IV - A New Hope',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Star Wars: Episode VI - Return of the Jedi',genre:'scifi',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Star Wars: Episode VII - The Force Awakens',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'},{title:'Star Wars: Episode III - Revenge of the Sith',genre:'scifi',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'},
    {title:'Star Wars: Episode I - The Phantom Menace',genre:'scifi',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Star Wars: Episode II - Attack of the Clones',genre:'scifi',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'},{title:'Star Wars: Episode IX - The Rise of Skywalker',genre:'scifi',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg'},{title:'Rogue One: A Star Wars Story',genre:'scifi',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'},{title:'Solo: A Star Wars Story',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg'},
    {title:'Spider-Man: Homecoming',genre:'superhero',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg'},{title:'Spider-Man: Far From Home',genre:'superhero',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg'},{title:'Ant-Man',genre:'superhero',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg'},{title:'Ant-Man and the Wasp',genre:'superhero',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Guardians of the Galaxy',genre:'superhero',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg'},
    {title:'Guardians of the Galaxy Vol. 2',genre:'superhero',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'},{title:'Captain Marvel',genre:'superhero',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg'},{title:'X-Men: First Class',genre:'superhero',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg'},{title:'X-Men: Days of Future Past',genre:'superhero',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'X-Men Origins: Wolverine',genre:'superhero',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'X-Men Apocalypse',genre:'superhero',rating:53,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg'},{title:'X-Men: Dark Phoenix',genre:'superhero',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg'},{title:'X-Men',genre:'superhero',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'X2: X-Men United',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg'},{title:'X-Men: The Last Stand',genre:'superhero',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'The Wolverine',genre:'superhero',rating:54,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_SX300.jpg'},{title:'Deadpool',genre:'superhero',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Deadpool 2',genre:'superhero',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Two Towers',genre:'fantasy',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Fellowship of the Ring',genre:'fantasy',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'},
    {title:'Aliens',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Shazam!',genre:'superhero',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg'},{title:'Porco Rosso',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjVkYmFkZWQtZmNjYy00NmFhLTliMWYtNThlOTUxNjg5ODdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'1917',genre:'action',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg'},{title:'Black Mirror: Bandersnatch',genre:'scifi',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM5MzgzMjM3OF5BMl5BanBnXkFtZTgwMzQ2MzQwNzM@._V1_SX300.jpg'},
    {title:'Purple Noon',genre:'drama',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGZkMjQxM2YtMzEyMS00ZjQyLWE1NzAtZTUwMmQ5MDY5YzNjXkEyXkFqcGdeQXVyODQ0OTczOQ@@._V1_SX300.jpg'},{title:'Rise of the Planet of the Apes',genre:'action',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzE3ZmNlZTctMDdmNy00MjMzLWFmZmYtN2M5N2YyYTQ1ZDJjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Dawn of the Planet of the Apes',genre:'action',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_SX300.jpg'},{title:'War for the Planet of the Apes',genre:'action',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg'},
    {title:'Batman Begins',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Terminator 3: Rise of the Machines',genre:'scifi',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg'},{title:'Terminator: Salvation',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg'},{title:'Star Trek: Into Darkness',genre:'scifi',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg'},
    {title:'Incredibles 2',genre:'superhero',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg'},{title:'Widows',genre:'action',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM3ODc5NDEyOF5BMl5BanBnXkFtZTgwMTI4MDcxNjM@._V1_SX300.jpg'},{title:'Wreck it Ralph',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_SX300.jpg'},{title:'Ralph Breaks the Internet',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_SX300.jpg'},{title:'Godzilla: King of the Monsters',genre:'scifi',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'Rocky II',genre:'drama',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQzZjQyMDgtMmQ3YS00ZDE4LWIyYTAtMWRkMWQ4ZTI5ZjA5XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg'},{title:'Rocky III',genre:'drama',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMyOTYzMDMzMF5BMl5BanBnXkFtZTcwMTkzODM1NA@@._V1_SX300.jpg'},{title:'Rocky IV',genre:'drama',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3ODk5ODE0NV5BMl5BanBnXkFtZTcwNDkzODM1NA@@._V1_SX300.jpg'},{title:'The Incredibles',genre:'superhero',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg'},
    {title:'The LEGO Movie',genre:'comedy',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg'},{title:'Zootopia',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg'},{title:'Inside Out',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg'},{title:'Up',genre:'comedy',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg'},
    {title:'Ratatouille',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg'},{title:'Groundhog Day',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Monsters, Inc.',genre:'comedy',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_SX300.jpg'},{title:'Wonder Woman',genre:'superhero',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {title:'12 Angry Men',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'},{title:'Creed',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmZkYjQzY2QtNjdkNC00YjkzLTk5NjUtY2MyNDNiYTBhN2M2XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg'},{title:'Creed II',genre:'drama',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg'},{title:'Ghostbusters',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg'},{title:'The Express',genre:'drama',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM3MTY5OTA5MF5BMl5BanBnXkFtZTcwMjA5ODk3MQ@@._V1_SX300.jpg'},
    {title:'Hoosiers',genre:'drama',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyNTc0OTUwNV5BMl5BanBnXkFtZTcwODA3NzE0NA@@._V1_SX300.jpg'},{title:'Invincible',genre:'drama',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA1NjI2ODA5MF5BMl5BanBnXkFtZTcwNjMyMTMzMQ@@._V1_SX300.jpg'},{title:'Invictus',genre:'drama',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAyMzExMDM1N15BMl5BanBnXkFtZTcwNTcyMTQ5Mg@@._V1_SX300.jpg'},{title:'The Blind Side',genre:'drama',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_SX300.jpg'},{title:'Robin Hood: Men in Tights',genre:'comedy',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGYyNmU2NmEtNGU1ZS00YjFkLWI0MWQtZjU2MmUxZDAyN2UxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {title:'Skyfall',genre:'action',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg'},{title:'Moana',genre:'comedy',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg'},{title:'The Cabin in the Woods',genre:'thriller',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SX300.jpg'},{title:'Shaun of the Dead',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Chronicle',genre:'superhero',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmRkY2RhM2QtMjQwNC00NDVjLTk4MTQtZGNiMjYxMmJmODVhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'Zombeavers',genre:'thriller',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTMzMzc4ODc1M15BMl5BanBnXkFtZTgwMTM0MTgxMTE@._V1_SX300.jpg'},{title:'The Simpsons Movie',genre:'comedy',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg'},{title:'The SpongeBob Squarepants Movie',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGQwNWE3NmEtMmQwNS00OTY4LWExN2ItN2UwOGJmZjExZTJjXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg'},{title:'Blood Diamond',genre:'action',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'The Woman in Black',genre:'thriller',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEwMzIxOTg3N15BMl5BanBnXkFtZTcwMjI4ODUzNw@@._V1_SX300.jpg'},
    {title:'The Big Lebowski',genre:'comedy',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg'},{title:'The Usual Suspects',genre:'crime',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Total Recall',genre:'scifi',rating:39,year:'2012',imageSrc:'https://m.media-amazon.com/images/M/MV5BN2ZiMDMzYWItNDllZC00ZmRmLWI1YzktM2M5M2ZmZDg1OGNlXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg'},{title:'Dredd',genre:'scifi',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BODkyNDQzMzUzOF5BMl5BanBnXkFtZTcwODYyMDEyOA@@._V1_SX300.jpg'},{title:'Paul',genre:'comedy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmM4YjAyODktOWM0YS00MmVjLWI0YzMtYTBhYzczZGU5YzBiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'Blue Mountain State: The Rise of Thadland',genre:'comedy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyODE5MTUwNV5BMl5BanBnXkFtZTgwMjk2MjM4NzE@._V1_SX300.jpg'},{title:'Monsters University',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_SX300.jpg'},{title:'The Last Airbender',genre:'fantasy',rating:1,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM1NjE0NDA0MV5BMl5BanBnXkFtZTcwODE4NDg1Mw@@._V1_SX300.jpg'},{title:'Billy Madison',genre:'comedy',rating:58,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzcyMjZmNjctNGNhMS00ZmQxLWFkNzQtYTIxYjVkYmU1NmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Happy Gilmore',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Stranger Than Fiction',genre:'drama',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmE2ZjYwNGYtYWMyMS00M2I0LWI4NDEtMzc1MTllMjk0ZmFmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Prisoners',genre:'thriller',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg'},{title:'Coco',genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg'},{title:'Cool Hand Luke',genre:'drama',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWFlNzZhYmYtYTI5YS00MDQyLWIyNTUtNTRjMWUwNTEzNjA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'},{title:'The 40-Year-Old Virgin',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTNjYTA1NDMtZGZmZi00MTdiLThjZTMtZWU1MGYyZjZkNzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {title:'Forgetting Sarah Marshall',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_SX300.jpg'},{title:'The Breakfast Club',genre:'drama',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'50/50',genre:'comedy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjg3ODQyNTIyN15BMl5BanBnXkFtZTcwMjUzNzM5NQ@@._V1_SX300.jpg'},{title:'This is the End',genre:'comedy',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_SX300.jpg'},{title:'Angels & Demons',genre:'action',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg'},
    {title:'The Da Vinci Code',genre:'action',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIxMjQyMTc3Nl5BMl5BanBnXkFtZTcwMTA1MDUzMw@@._V1_SX300.jpg'},{title:'Hitch',genre:'comedy',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_SX300.jpg'},{title:'The Fast and the Furious',genre:'action',rating:46,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'2 Fast 2 Furious',genre:'action',rating:37,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Fast and the Furious: Tokyo Drift',genre:'action',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg'},
    {title:'Fast Five',genre:'action',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg'},{title:'Fast & Furious 6',genre:'action',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg'},{title:'Furious 7',genre:'action',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg'},{title:"Ocean's Twelve",genre:'crime',rating:58,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmJmYzBjNTktMTJjZS00ZGRhLWE1Y2QtOWQxZGU0Y2RmMjkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:"Ocean's Thirteen",genre:'crime',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMyNTc1NzY5MV5BMl5BanBnXkFtZTcwNDM4NTQzMw@@._V1_SX300.jpg'},{title:'Back to the Future Part II',genre:'scifi',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Back to the Future Part III',genre:'scifi',rating:58,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Titanic',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:"A Knight's Tale",genre:'comedy',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTE5OTE4OTE2Nl5BMl5BanBnXkFtZTYwMDkzMTQ3._V1_SX300.jpg'},
    {title:"White Men Can't Jump",genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc5ZjE2MmEtYWIxYi00OGY0LTk0ZTUtMzJiYjI4OWZmNTVmXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'},{title:'Saw',genre:'thriller',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'},{title:'Saw II',genre:'thriller',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjY4Mjg4YTgtZWU2MC00MzVlLTg3MDgtYzUyYzU1NGMyMmU5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Saw III',genre:'thriller',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg'},{title:'Saw IV',genre:'thriller',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjc0NjUyNzg3MF5BMl5BanBnXkFtZTYwODMxOTM3._V1_SX300.jpg'},
    {title:'Saw V',genre:'thriller',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzc2ZWQ4YTYtZDY0Zi00YzkxLTgxNTMtMTE3MDE3NzQyNjc2XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'},{title:'Saw VI',genre:'thriller',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU0NDA3MTM4M15BMl5BanBnXkFtZTcwOTY4Njg3Mg@@._V1_SX300.jpg'},{title:'Saw: The Final Chapter',genre:'thriller',rating:10,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI0NTEwNTgwNF5BMl5BanBnXkFtZTcwMDM5MTU5Mw@@._V1_SX300.jpg'},{title:'Batman & Robin',genre:'superhero',rating:30,year:'1997',imageSrc:'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg'},{title:'Batman',genre:'superhero',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg'},
    {title:'Batman Returns',genre:'superhero',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg'},{title:'Batman Forever',genre:'superhero',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Spider-Man',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'},{title:'Spider-Man 2',genre:'superhero',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Spider-Man 3',genre:'superhero',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'Remember the Titans',genre:'drama',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Amazing Spider-Man',genre:'superhero',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg'},{title:'The Amazing Spider-Man 2',genre:'superhero',rating:54,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg'},{title:'Jimmy Neutron: Boy Genius',genre:'comedy',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzczYzM4MmMtMTEyYi00ZGRmLWE2OTMtZmNhYTdiYjQ4NDUxXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg'},{title:'Dazed and Confused',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_SX300.jpg'},
    {title:'The Matrix Reloaded',genre:'scifi',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'The Matrix Revolutions',genre:'scifi',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'300',genre:'action',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWMxYTZlOTUtZDExMi00YzZmLTkwYTMtZmM2MmRjZmQ3OGY4XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_SX300.jpg'},{title:'Borat',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_SX300.jpg'},{title:'Dodgeball',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTIwMzE2MjM4MV5BMl5BanBnXkFtZTYwNjA1OTY3._V1_SX300.jpg'},
    {title:'Napoleon Dynamite',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjYwNTA3MDIyMl5BMl5BanBnXkFtZTYwMjIxNjA3._V1_SX300.jpg'},{title:'Juno',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTIwMDgwODc5Nl5BMl5BanBnXkFtZTYwMjQzMDM4._V1_SX300.jpg'},{title:'Talladega Nights: The Ballad of Ricky Bobby',genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzAzOTk1OTIyM15BMl5BanBnXkFtZTcwNDIzNTQzMQ@@._V1_SX300.jpg'},{title:'Troy',genre:'action',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg'},{title:'The Day After Tomorrow',genre:'action',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM3NDU4NDA2Ml5BMl5BanBnXkFtZTYwNzcxNjY2._V1_SX300.jpg'},
    {title:'Sherlock Holmes',genre:'crime',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg'},{title:'Sherlock Holmes: A Game of Shadows',genre:'crime',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg'},{title:'National Treasure',genre:'action',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_SX300.jpg'},{title:'National Treasure: Book of Secrets',genre:'action',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU2NTM3NjU1N15BMl5BanBnXkFtZTcwODg1MDU1MQ@@._V1_SX300.jpg'},{title:'The League of Extraordinary Gentlemen',genre:'action',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTFlOTdkMjEtNGVmMS00YTA3LThlNjQtMjAzZmFjZDAzNjllL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Hellboy',genre:'superhero',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTc1ZWY0ZTEtZTVmNi00MTg0LTg4NmQtZTI4OWNiMmQ0MWZkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Hellboy II: The Golden Army',genre:'superhero',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg'},{title:'Ghost Rider',genre:'superhero',rating:24,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzIyNDE5ODI1OV5BMl5BanBnXkFtZTcwNTIyNDE0MQ@@._V1_SX300.jpg'},{title:'Fantastic Four',genre:'superhero',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWU1ZjFjMTctYjA5ZC00YTBkLTkzZjUtZWEyMjgxY2MxYWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Fantastic 4: Rise of the Silver Surfer',genre:'superhero',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BODA4YTc5N2QtNzQyYS00ZDUzLWI3M2UtZWI2OWVhOGZlN2MxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Fantastic Four',genre:'superhero',rating:12,year:'2015',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk0OTMyMDA0OF5BMl5BanBnXkFtZTgwMzY5NTkzNTE@._V1_SX300.jpg'},{title:'Savages',genre:'action',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk0ODIyNDAyMF5BMl5BanBnXkFtZTcwMTQ5Nzg3Nw@@._V1_SX300.jpg'},{title:'Burn After Reading',genre:'comedy',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzYwMjZhOGEtMGZlZS00Mjg1LTlkMDktYzJiZDU4MzAxZDRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Next',genre:'action',rating:28,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3MjgyNjE1Nl5BMl5BanBnXkFtZTcwNTY1NDU0MQ@@._V1_SX300.jpg'},{title:'Boiler Room',genre:'drama',rating:61,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWQ2NDY3NjQtMTY3NS00M2VhLThlOTQtOGE4NzczY2RlYzg3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Push',genre:'superhero',rating:29,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM2NjE5NTYzMl5BMl5BanBnXkFtZTcwNzc3OTMyMg@@._V1_SX300.jpg'},{title:'Tropic Thunder',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_SX300.jpg'},{title:'Transformers',genre:'action',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Transformers: Revenge of the Fallen',genre:'action',rating:46,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg'},{title:'Transformers: Dark of the Moon',genre:'action',rating:33,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg'},
    {title:'The Butterfly Effect',genre:'scifi',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Final Destination',genre:'thriller',rating:42,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTI0NGM2OGYtNzVmMi00NGQ2LTk2MDAtN2RmYjIzMGRkZGYxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Final Destination 2',genre:'thriller',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjExMTMyODAzN15BMl5BanBnXkFtZTYwNjc5NDQ3._V1_SX300.jpg'},{title:'Final Destination 3',genre:'thriller',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDEyYTRjNTgtYmI4Yy00MTFmLWEzYTUtOGNjZGZmNzEyMjZmXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_SX300.jpg'},{title:'The Final Destination',genre:'thriller',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQyMzQ5NjI2MF5BMl5BanBnXkFtZTcwNDA5MjM2Mg@@._V1_SX300.jpg'},
    {title:'Final Destination 5',genre:'thriller',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgyOTExNDc1M15BMl5BanBnXkFtZTcwMDA0MTA4NQ@@._V1_SX300.jpg'},{title:'Forrest Gump',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Armageddon',genre:'scifi',rating:41,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Air Force One',genre:'action',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTk5NWE2ZjAtZmRmOS00ZGYzLWI5ZmUtMDcwODI0YWY0MTRlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg'},{title:'Liar Liar',genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Bruce Almighty',genre:'comedy',rating:51,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzMyZDhiZDUtYWUyMi00ZDQxLWE4NDQtMWFlMjI1YjVjMjZiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'The Goonies',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BODRlMjRkZGEtZWM2Zi00ZjYxLWE0MWUtMmM1YWM2NzZlOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Sandlot',genre:'comedy',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BODllYjM1ODItYjBmOC00MzkwLWJmM2YtMjMyZDU3MGJhNjc4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'We Bought a Zoo',genre:'drama',rating:37,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ0MTE3OTUwMl5BMl5BanBnXkFtZTcwODg5NjgwNw@@._V1_SX300.jpg'},{title:'Drag Me to Hell',genre:'thriller',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_SX300.jpg'},
    {title:'21',genre:'drama',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg'},{title:'Superbad',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_SX300.jpg'},{title:'Accepted',genre:'comedy',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkzNzY5OTc3Nl5BMl5BanBnXkFtZTcwNjE4NDQzMQ@@._V1_SX300.jpg'},{title:'Drumline',genre:'drama',rating:61,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzhhY2Y3NDktM2JiYi00YmY0LWEzOGQtMDc4Yzk3ZWIxOTVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Killing Room',genre:'thriller',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmU0NWQxMjQtNzRmYy00MTEwLTllNTYtMmM0NTc2YTQzMzcxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Saved!',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ1ODM1ODU1N15BMl5BanBnXkFtZTcwMjI5MzA3NA@@._V1_SX300.jpg'},{title:'Premium Rush',genre:'action',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzkxNjAwMDkwOF5BMl5BanBnXkFtZTcwMTQ1NDkwOA@@._V1_SX300.jpg'},{title:'Wanted',genre:'action',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX300.jpg'},{title:'Click',genre:'comedy',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA1MTUxNDY4NzReQTJeQWpwZ15BbWU2MDE3ODAxNw@@._V1_SX300.jpg'},{title:'Pompeii',genre:'action',rating:23,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjJkMzhjZWItNzVjMS00N2Y0LWE5YWMtY2Q5NGIzOWZmOTEzXkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_SX300.jpg'},
    {title:'Coach Carter',genre:'drama',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Fired Up!',genre:'comedy',rating:28,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE3MDMxMTQ0M15BMl5BanBnXkFtZTcwNTA0MDAyMg@@._V1_SX300.jpg'},{title:'Varsity Blues',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGVlYjRmYTUtNTRiYS00ODNmLThlNDQtNzc3OWJmYTlkMzM0L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Not Another Teen Movie',genre:'comedy',rating:17,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTRhNWJmNTUtM2VhYi00NzdkLTgyYTUtMWMzMWI3MzFmNzk5XkEyXkFqcGdeQXVyNjgzMjI4ODE@._V1_SX300.jpg'},{title:'Bad News Bears',genre:'comedy',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzMzZDU1MTEtMDMzYy00MDhkLTg5MGMtYjFkNzYyMTc3YmU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Rookie of the Year',genre:'comedy',rating:42,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGJhODAwNDQtNGY0My00ZDA4LTgwOTMtMTA5NzdhZTQ0YmIwXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'},{title:'Dune',genre:'scifi',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'},{title:'Dinner for Schmucks',genre:'comedy',rating:42,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTk5MTYzNTIyMl5BMl5BanBnXkFtZTcwOTM3MTQ2Mw@@._V1_SX300.jpg'},{title:'Jumper',genre:'action',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEwOTkyOTI3M15BMl5BanBnXkFtZTcwNTQxMjU1MQ@@._V1_SX300.jpg'},{title:'The Hangover',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Hangover Part II',genre:'comedy',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_SX300.jpg'},{title:'The Hangover Part III',genre:'comedy',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA0NjE1MzMzODheQTJeQWpwZ15BbWU3MDY4MTQ3Mzk@._V1_SX300.jpg'},{title:'Grown Ups',genre:'comedy',rating:27,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_SX300.jpg'},{title:'Grown Ups 2',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTZkZDhjZTEtZjA5MC00MDU2LTk3NDItNzA2YzQ4Y2Q5NjZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:"Harry Potter and the Sorcerer's Stone",genre:'fantasy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'},
    {title:'Harry Potter and the Chamber of Secrets',genre:'fantasy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg'},{title:'Harry Potter and the Prisoner of Azkaban',genre:'fantasy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg'},{title:'Harry Potter and the Goblet of Fire',genre:'fantasy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg'},{title:'Harry Potter and the Order of the Phoenix',genre:'fantasy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg'},{title:'Harry Potter and the Half-Blood Prince',genre:'fantasy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg'},
    {title:'Harry Potter and the Deathly Hallows: Part 1',genre:'fantasy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg'},{title:'Harry Potter and the Deathly Hallows: Part 2',genre:'fantasy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},{title:'The Bourne Identity',genre:'action',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'The Bourne Supremacy',genre:'action',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTIyMDFmMmItMWQzYy00MjBiLTg2M2UtM2JiNDRhOWE4NjBhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'The Bourne Ultimatum',genre:'action',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
    {title:'The Bourne Legacy',genre:'action',rating:47,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc4Njk3MDM1Nl5BMl5BanBnXkFtZTcwODgyOTMxOA@@._V1_SX300.jpg'},{title:'Blaze',genre:'comedy',rating:64,year:'1989',imageSrc:'https://m.media-amazon.com/images/M/MV5BN2UzODlhNjEtYjEwYS00N2Q0LTlhMWUtZWI4YzZhMWNhYTRiL2ltYWdlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg'},{title:'The One',genre:'scifi',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzY4YmUzMDAtMDYyZS00MTBmLWEzZDAtOGY3MDE2YjJkMGUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Rollerball',genre:'scifi',rating:29,year:'2002',imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3OTk4NDE1OV5BMl5BanBnXkFtZTcwODAyOTY2NA@@._V1_SX300.jpg'},{title:'Men in Black II',genre:'scifi',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_SX300.jpg'},
    {title:'Men in Black 3',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg'},{title:'John Carter',genre:'scifi',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDEwZmIzNjYtNjUwNS00MzgzLWJiOGYtZWMxZGQ5NDcxZjUwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'S.W.A.T.',genre:'action',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmIxYTVmMDEtNWU5NS00MWJhLWJjNmQtNjkxNWI3NmY4MzJlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'12 Rounds',genre:'action',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU1MzM1ODkxM15BMl5BanBnXkFtZTcwNDY1MTA0Mg@@._V1_SX300.jpg'},{title:'Prince of Persia: The Sands of Time',genre:'fantasy',rating:33,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_SX300.jpg'},
    {title:'Charlie Bartlett',genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUyNTgyNDI2NF5BMl5BanBnXkFtZTcwOTA2NTg1MQ@@._V1_SX300.jpg'},{title:'Due Date',genre:'comedy',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU5MTgxODM3Nl5BMl5BanBnXkFtZTcwMjMxNDEwNA@@._V1_SX300.jpg'},{title:'2012',genre:'action',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_SX300.jpg'},{title:'I Am Number Four',genre:'scifi',rating:18,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI0NDI1MTMyM15BMl5BanBnXkFtZTcwMDMzMTcyNA@@._V1_SX300.jpg'},{title:'Romeo + Juliet',genre:'drama',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGU4YmI1ZGQtZjExYi00M2E0LTgyYTAtNzQ5ZmVlMTk4NzUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {title:'Rush Hour',genre:'action',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Rush Hour 2',genre:'action',rating:53,imageSrc:'https://m.media-amazon.com/images/M/MV5BODhlNGJjMWQtZGMyYS00MzJhLWJhZGMtY2NlNDI5Nzg5NTU2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'Rush Hour 3',genre:'action',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA0Nzg5NjQ0MDBeQTJeQWpwZ15BbWU3MDE4Mzg5NDE@._V1_SX300.jpg'},{title:"Dude, Where's My Car?",genre:'comedy',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzRmN2NjNzktOWE1My00NjVlLWFhNjYtZmFkMzM5YTA2ZTFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:"Wayne's World",genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDAyNDY3MjUtYmJjYS00Zjc5LTlhM2MtNzgzYjNlOWVkZjkzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:"Wayne's World 2",genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTdhODcyMGMtMzg3NC00MTViLWJiZjktZWIyY2NhNWZhYzUxXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'},{title:'Last Action Hero',genre:'action',rating:46,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'Battle: Los Angeles',genre:'action',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDg2NzQwOGMtMGRkNC00YjAwLTg4NjgtZWQwYzljZmM1YzA4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'The Great Gatsby',genre:'drama',rating:47,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg'},{title:'The Rocker',genre:'comedy',rating:41,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyMTgzMTQ0MF5BMl5BanBnXkFtZTcwNTE3OTU3MQ@@._V1_SX300.jpg'},
    {title:'The Crucible',genre:'drama',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2ZhOTQ5NGUtNDJiYy00ZTM5LWI5MDItNDI3OGZhYzlhZDRhXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'},{title:'Inherit the Wind',genre:'drama',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGQ5ODNkNWYtYTgxZS00YjJkLThhODAtYzUwNGNiYjRmNjdkXkEyXkFqcGdeQXVyMTg2NTc4MzA@._V1_SX300.jpg'},{title:'Space Jam',genre:'comedy',rating:57,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg'},{title:'Trainwreck',genre:'comedy',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ4MjgwNTMyOV5BMl5BanBnXkFtZTgwMTc1MjI0NDE@._V1_SX300.jpg'},{title:'21 Jump Street',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {title:'22 Jump Street',genre:'comedy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_SX300.jpg'},{title:'Ted',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_SX300.jpg'},{title:'Ted 2',genre:'comedy',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEwMDg3MDk1NF5BMl5BanBnXkFtZTgwNjYyODA1NTE@._V1_SX300.jpg'},{title:'9',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY2ODE1MTgxMV5BMl5BanBnXkFtZTcwNTM1NTM2Mg@@._V1_SX300.jpg'},{title:'Man of Steel',genre:'superhero',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg'},
    {title:'South Park: Bigger, Longer, Uncut',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGE0ZWI0YzAtY2NkZi00YjkyLWIzYWEtNTJmMzJjODllNjdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Sky High',genre:'superhero',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjA2NmY1OTQtMjE4Mi00NGRkLWFmODUtM2Q3ZTRlYjZhNWYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Horrible Bosses',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzYxNDI5Njc5NF5BMl5BanBnXkFtZTcwMDUxODE1NQ@@._V1_SX300.jpg'},{title:'Horrible Bosses 2',genre:'comedy',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzFjYWVhYzYtMDZjNi00ZTc5LTk1MWQtNTBlZTA1MDFhMzY3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg'},{title:'The Change-Up',genre:'comedy',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk3NTM4NDg3OF5BMl5BanBnXkFtZTcwNDk3MzEwNQ@@._V1_SX300.jpg'},
    {title:'Hancock',genre:'superhero',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ@@._V1_SX300.jpg'},{title:'American Pie',genre:'comedy',rating:57,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg'},{title:'American Pie 2',genre:'comedy',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTEyYjhiMjYtNjU3YS00NmQ4LTlhNTEtYTczNWY3MGJmNzE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'American Wedding',genre:'comedy',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAwNTIzNDk1MDVeQTJeQWpwZ15BbWU3MDMwNzAwMDE@._V1_SX300.jpg'},{title:'American Reunion',genre:'comedy',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY4MTEyMzU1N15BMl5BanBnXkFtZTcwNDQ0NTc1Nw@@._V1_SX300.jpg'},
    {title:'The Hobbit: An Unexpected Journey',genre:'fantasy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg'},{title:'The Hobbit: The Desolation of Smaug',genre:'fantasy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg'},{title:'The Hobbit: The Battle of the Five Armies',genre:'fantasy',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_SX300.jpg'},{title:'Election',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjViYWQ4NjAtZmUzNy00Nzg5LWJkMzctMTgwOTRhNjdjYWI3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Balls of Fury',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3MDQ1Mzc4N15BMl5BanBnXkFtZTcwODI0NTc0MQ@@._V1_SX300.jpg'},
    {title:'American Sniper',genre:'action',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg'},{title:'13 Hours',genre:'action',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjY0OWVjMGQtNTIzZi00OGU5LWI4N2EtMGU0YzQ4OWM4ZmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Lone Survivor',genre:'action',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_SX300.jpg'},{title:'Kingsman: The Secret Service',genre:'action',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkxMjgwMDM4Ml5BMl5BanBnXkFtZTgwMTk3NTIwNDE@._V1_SX300.jpg'},{title:'Green Lantern',genre:'superhero',rating:23,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMyMTg3OTM5Ml5BMl5BanBnXkFtZTcwNzczMjEyNQ@@._V1_SX300.jpg'},
    {title:'Terminator Genisys',genre:'scifi',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg'},{title:'GI Joe: The Rise of Cobra',genre:'action',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQzMTU1NzQwNl5BMl5BanBnXkFtZTcwNDg4NzMzMw@@._V1_SX300.jpg'},{title:'GI Joe: Retaliation',genre:'action',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzk5ODM0OTQ0N15BMl5BanBnXkFtZTcwODg2ODE4OA@@._V1_SX300.jpg'},{title:'The Purge',genre:'thriller',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_SX300.jpg'},{title:'The Purge: Anarchy',genre:'thriller',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE2ODMxMTk1Nl5BMl5BanBnXkFtZTgwMDEzNjEzMTE@._V1_SX300.jpg'},
    {title:'The Purge: Election Year',genre:'thriller',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI3MDI0MTA1N15BMl5BanBnXkFtZTgwOTk4NjU5ODE@._V1_SX300.jpg'},{title:'The First Purge',genre:'thriller',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmVjMWJhMTYtMzUxMC00ODdhLTk3YzMtZDFhNGUyOGFhYTY0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg'},{title:'Abraham Lincoln: Vampire Hunter',genre:'action',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjY2Mzc0MDA4NV5BMl5BanBnXkFtZTcwOTg5OTcxNw@@._V1_SX300.jpg'},{title:'Les Misérables',genre:'drama',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg'},{title:'The Eagle',genre:'action',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY1MjYwNTQ4Ml5BMl5BanBnXkFtZTcwMjYwNzAxNA@@._V1_SX300.jpg'},
    {title:'Clash of the Titans',genre:'action',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYxNjg4MzU5OV5BMl5BanBnXkFtZTcwOTA3NTUwMw@@._V1_SX300.jpg'},{title:'Percy Jackson & the Olympians: The Lightning Thief',genre:'fantasy',rating:35,year:'2010',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ5NDlmZWUtMjIyMC00NzQ3LTg3OWYtMzRkY2FiNzQ0Njc4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg'},{title:'Percy Jackson & the Olympians: The Sea of Monsters',genre:'fantasy',rating:32,year:'2013',imageSrc:'https://m.media-amazon.com/images/M/MV5BYmE4MThmY2UtNDYxOC00YmFkLTg1NGEtMTQ3YTFmZjdhZmRiXkEyXkFqcGdeQXVyNjA3MDQ1NzY@._V1_SX300.jpg'},{title:'Star Trek Beyond',genre:'scifi',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDRiOGE5ZTctOWIxOS00MWQwLThlMDYtNWIwMDQwNzBjZDY1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Date Night',genre:'comedy',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BODgwMjM2ODE4M15BMl5BanBnXkFtZTcwMTU2MDcyMw@@._V1_SX300.jpg'},
    {title:'The Monuments Men',genre:'drama',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMxMjk4NTM1M15BMl5BanBnXkFtZTgwNjg0MjQ3MDE@._V1_SX300.jpg'},{title:'Bridge of Spies',genre:'drama',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg'},{title:'Red Tails',genre:'action',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDQ5MTg2NzI4OF5BMl5BanBnXkFtZTcwMDM2NzQzNg@@._V1_SX300.jpg'},{title:'Knight and Day',genre:'action',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM0Mzg0MzI3Ml5BMl5BanBnXkFtZTcwNjIyNzk1Mw@@._V1_SX300.jpg'},{title:'Red',genre:'action',rating:61,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg'},
    {title:'The Expendables',genre:'action',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_SX300.jpg'},{title:'127 Hours',genre:'drama',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE0OTc5Mw@@._V1_SX300.jpg'},{title:'Contagion',genre:'drama',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MDk5MDc3OV5BMl5BanBnXkFtZTcwNzAyNTg0Ng@@._V1_SX300.jpg'},{title:'Warm Bodies',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTc5ZjFhMDItYmViMi00YjI5LTgzNzctZjcxMDYzMWU2NTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Escape Plan',genre:'action',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzllMmUxN2UtNmM3YS00NGU1LThhYjUtYmY3YTc0OTVlMzJiXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg'},
    {title:'Pitch Perfect',genre:'comedy',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_SX300.jpg'},{title:'Blades of Glory',genre:'comedy',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MDMyMTYxMl5BMl5BanBnXkFtZTcwMjk0NzI0MQ@@._V1_SX300.jpg'},{title:'The Benchwarmers',genre:'comedy',rating:33,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcxMzg3NDQwNl5BMl5BanBnXkFtZTcwMjk1ODQzMQ@@._V1_SX300.jpg'},{title:'Tower Heist',genre:'comedy',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY1NDQxMTcwOV5BMl5BanBnXkFtZTcwNzMzNTExNg@@._V1_SX300.jpg'},{title:'Zero Dark Thirty',genre:'action',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg'},
    {title:'This Means War',genre:'comedy',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg'},{title:'Admission',genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTE2OTkwNzg5Ml5BMl5BanBnXkFtZTcwOTY0NzQ3OA@@._V1_SX300.jpg'},{title:'Good Luck Chuck',genre:'comedy',rating:4,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU1NzM1MTE1OV5BMl5BanBnXkFtZTYwNDQyMjU3._V1_SX300.jpg'},{title:'Fury',genre:'action',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg'},{title:'R.I.P.D.',genre:'scifi',rating:13,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM5OTYxNzE5N15BMl5BanBnXkFtZTcwMDU1MTQ4OQ@@._V1_SX300.jpg'},
    {title:'The Longest Yard',genre:'comedy',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc1NTQyNDk2NV5BMl5BanBnXkFtZTcwOTE2OTQzMw@@._V1_SX300.jpg'},{title:'Charlie St. Cloud',genre:'drama',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI4MjkyNDM2NV5BMl5BanBnXkFtZTcwOTExNDc0Mw@@._V1_SX300.jpg'},{title:'Neighbors',genre:'comedy',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTQ0OTkzODgyNF5BMl5BanBnXkFtZTgwOTA3OTE4MDE@._V1_SX300.jpg'},{title:'Neighbors 2',genre:'comedy',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_SX300.jpg'},{title:'Kick-Ass',genre:'superhero',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_SX300.jpg'},
    {title:'Kick-Ass 2',genre:'superhero',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ4OTQxNzc0N15BMl5BanBnXkFtZTcwOTQxOTU5OQ@@._V1_SX300.jpg'},{title:'The Men Who Stare At Goats',genre:'comedy',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIwOTQwNzg1MV5BMl5BanBnXkFtZTcwODc4MDU4Mg@@._V1_SX300.jpg'},{title:'Snow White and the Huntsman',genre:'fantasy',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGQ5MWNjZGQtOWM2ZC00MjEyLWEwODAtN2JmN2U0OWQ0YzI3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Elf',genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Cool Runnings',genre:'comedy',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMxMTQ3MzMwMV5BMl5BanBnXkFtZTgwNTYxNzYxMTE@._V1_SX300.jpg'},
    {title:'Knocked Up',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzgzYjMzMWItNDFiYi00ZjhkLWIyMzYtZGRlY2FmNzkwNjRhL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'This is 40',genre:'comedy',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQxMDQ1NjA4N15BMl5BanBnXkFtZTcwNTE5MjQ3OA@@._V1_SX300.jpg'},{title:'The Lost World: Jurassic Park',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'},{title:'Jurassic Park III',genre:'scifi',rating:52,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDMyZGJjOGItYjJkZC00MDVlLWE0Y2YtZGIwMDExYWE3MGQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'},{title:'Jurassic World',genre:'scifi',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {title:'The Hunger Games',genre:'fantasy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg'},{title:'The Hunger Games: Catching Fire',genre:'fantasy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX300.jpg'},{title:'The Hunger Games: Mockingjay - Part 1',genre:'fantasy',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_SX300.jpg'},{title:'The Hunger Games: Mockingjay - Part 2',genre:'fantasy',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_SX300.jpg'},{title:'Pirates of the Caribbean: The Curse of the Black Pearl',genre:'fantasy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {title:"Pirates of the Caribbean: Dead Man's Chest",genre:'fantasy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg'},{title:"Pirates of the Caribbean: At World's End",genre:'fantasy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg'},{title:'Pirates of the Caribbean: On Stranger Tides',genre:'fantasy',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg'},{title:'Spy Kids',genre:'action',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2JhODU1NmQtNjllYS00ZmQwLWEwZjYtMTE5NjA1M2YyMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Spy Kids 2: Island of Lost Dreams',genre:'action',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWM2N2JjYzYtYWIyNS00NDc3LWFkNDctMmYwOWQyZTcxYjZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Spy Kids 3-D: Game Over',genre:'action',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI4MTQyNTUzMF5BMl5BanBnXkFtZTcwNzE2MDAwMQ@@._V1_SX300.jpg'},{title:'Die Hard 2',genre:'action',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Big Fish',genre:'fantasy',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Van Wilder',genre:'comedy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM4YjQxYzAtNzAyNy00Zjk1LTk4ZTMtNTUwNTBjMWY1M2IwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Sucker Punch',genre:'action',rating:27,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDEwNGRlNjQtZjI4OC00ZmMxLWEyYmQtNGI1NDk4YmUyYTNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg'},
    {title:'Fright Night',genre:'thriller',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU2MDc0NDY0M15BMl5BanBnXkFtZTcwOTgzMTYyNQ@@._V1_SX300.jpg'},{title:'Like Mike',genre:'comedy',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDU4ZDdjN2EtZWE1MS00OGQ2LWEzNGEtMDhlOGE5YTg3NDlmXkEyXkFqcGdeQXVyMTQ4NDY5OTc@._V1_SX300.jpg'},{title:'Like Mike 2: Streetball',genre:'comedy',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgzNjMxOTMxNF5BMl5BanBnXkFtZTgwODkyNjAwNzE@._V1_SX300.jpg'},{title:'Anger Management',genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDg1YTNiODItZGYyOC00NGIwLWI3MjYtMTY3NDQ0ZDIwYjBiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Rebound',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgzMTU0ODM4MV5BMl5BanBnXkFtZTYwODY2ODM3._V1_SX300.jpg'},
    {title:'Shrek',genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Shrek 2',genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Shrek the Third',genre:'comedy',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg'},{title:'Toy Story',genre:'comedy',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg'},{title:'Toy Story 3',genre:'comedy',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg'},
    {title:'Finding Nemo',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Speed Racer',genre:'action',rating:42,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWU4Y2RhYzMtYzIxZC00NmRlLTk0OTctNDg1NTg5Yjk4YjQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Crazy, Stupid, Love',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg'},{title:'Foxcatcher',genre:'drama',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2MjQxNjYxOV5BMl5BanBnXkFtZTgwMzIwODUxMzE@._V1_SX300.jpg'},
    {title:'Get Smart',genre:'comedy',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY0NzQ4MDU0NV5BMl5BanBnXkFtZTcwMzA2NzQ2MQ@@._V1_SX300.jpg'},{title:'The Pink Panther',genre:'comedy',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGI2MjVlNzEtZDg1ZS00MGU1LWFhNTQtNzMwZDViOWRkNzhkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'8 Mile',genre:'drama',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWI3MDIzZmYtN2Y3MC00YTljLWFiYmYtNWIzMjg1ZWQ1ODlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Little Miss Sunshine',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SX300.jpg'},{title:'Almost Famous',genre:'drama',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
    {title:'Pineapple Express',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY1MTE4NzAwM15BMl5BanBnXkFtZTcwNzg3Mjg2MQ@@._V1_SX300.jpg'},{title:'Role Models',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3MTk4NzQ0NV5BMl5BanBnXkFtZTcwNjM0OTc5MQ@@._V1_SX300.jpg'},{title:'Zoolander',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_SX300.jpg'},{title:"You Don't Mess With the Zohan",genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_SX300.jpg'},{title:'Semi-Pro',genre:'comedy',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc1MjQ4NTc3M15BMl5BanBnXkFtZTcwMTc3NTg1MQ@@._V1_SX300.jpg'},
    {title:'The Invention of Lying',genre:'comedy',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU2OTQzOTc1Nl5BMl5BanBnXkFtZTcwNDM5MDE4Mg@@._V1_SX300.jpg'},{title:'Couples Retreat',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQxMjI1Nzc0M15BMl5BanBnXkFtZTcwMTc0Mzg2Mg@@._V1_SX300.jpg'},{title:'The Ringer',genre:'comedy',rating:47,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUzNDQzMTk5OF5BMl5BanBnXkFtZTcwNDY0MjEzMQ@@._V1_SX300.jpg'},{title:'Funny People',genre:'comedy',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWU0ZDllZWEtNWI4ZC00YjIzLTk3YjMtZmE0MmFiNzg4MmRlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Friends With Benefits',genre:'comedy',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_SX300.jpg'},
    {title:"The Hitchhiker's Guide to the Galaxy",genre:'scifi',rating:52,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmU5MGU4MjctNjA2OC00N2FhLWFhNWQtMzQyMGI2ZmQ0Y2YyL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Robin Hood',genre:'action',rating:45,year:'2010',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_SX300.jpg'},{title:'First Knight',genre:'action',rating:37,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQ1MDU2ZWUtMmYzOS00ZWExLTk4M2QtNzE5MTFkZTNmZTJhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Never Back Down',genre:'action',rating:28,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_SX300.jpg'},{title:'Law Abiding Citizen',genre:'action',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTQ1NmZlNDktZTg0NS00ZjNhLTk5M2QtNzExNjUzY2MwMjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {title:'The Beach',genre:'drama',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTljZTUzYWUtOTI4YS00NmZlLWE5MmQtZjFlZDZhNjg4MjQxXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg'},{title:'Love + Basketball',genre:'drama',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU4NjY4NTI5MF5BMl5BanBnXkFtZTYwNjQ4OTc3._V1_SX300.jpg'},{title:'Friday',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'},{title:'Airplane',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjA3YjdhMWEtYjc2Ni00YzVlLWI0MTUtMGZmNTJjNmU0Yzk2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Host',genre:'scifi',rating:10,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMwNDg1MTAzNV5BMl5BanBnXkFtZTcwNTk5ODI3OA@@._V1_SX300.jpg'},
    {title:'Best in Show',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ5OTc0NDU1MF5BMl5BanBnXkFtZTYwNzk1OTI3._V1_SX300.jpg'},{title:'Holes',genre:'comedy',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_SX300.jpg'},{title:'Eurotrip',genre:'comedy',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTIxNjcxMDUxN15BMl5BanBnXkFtZTYwNjAxNTM3._V1_SX300.jpg'},{title:'The Girl Next Door',genre:'comedy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ0ODIyMzE1N15BMl5BanBnXkFtZTcwODEwODczMw@@._V1_SX300.jpg'},{title:'How to Lose a Guy in 10 Days',genre:'comedy',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_SX300.jpg'},
    {title:'Ghosts of Girlfriends Past',genre:'comedy',rating:23,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA0Njk2NTIyMTVeQTJeQWpwZ15BbWU3MDU0MzUyMzI@._V1_SX300.jpg'},{title:'August Rush',genre:'drama',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDIwNjE3NjU2NV5BMl5BanBnXkFtZTcwNTQ2NjQzMw@@._V1_SX300.jpg'},{title:'Ghost Town',genre:'comedy',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQyODQ4MzYxN15BMl5BanBnXkFtZTcwOTQ1MDczMw@@._V1_SX300.jpg'},{title:'17 Again',genre:'comedy',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA2NTI1Mzg3N15BMl5BanBnXkFtZTcwMjYwNjAzMg@@._V1_SX300.jpg'},{title:'The Ugly Truth',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM2MTM2OTUwNl5BMl5BanBnXkFtZTcwNTgwNTE0Mg@@._V1_SX300.jpg'},
    {title:'The Break-Up',genre:'comedy',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTM1YjVhNTMtZTEyZi00ODk3LWI4NDItZWUyZTA1ODM3Zjk4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'What Happens in Vegas',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTIxNzMwOTU3OF5BMl5BanBnXkFtZTcwMzk0NTM2MQ@@._V1_SX300.jpg'},{title:"That's My Boy",genre:'comedy',rating:19,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM3NDMyNzgzMV5BMl5BanBnXkFtZTcwMjIyMTA1Nw@@._V1_SX300.jpg'},{title:"Let's Be Cops",genre:'comedy',rating:21,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI3MDY2ODQwNF5BMl5BanBnXkFtZTgwNjUzNjE4MTE@._V1_SX300.jpg'},{title:'The Warriors',genre:'action',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTU2MWRiMTMtYzAzZi00NGYzLTlkMDEtNWQ3MzZlNTJlNzZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'},
    {title:'Mission: Impossible',genre:'action',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg'},{title:'Red Dawn',genre:'action',rating:24,year:'2012',imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI0MDAwMzA1M15BMl5BanBnXkFtZTcwNzIxMjY3OA@@._V1_SX300.jpg'},{title:'The A-Team',genre:'action',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc4ODc4NTQ1N15BMl5BanBnXkFtZTcwNDUxODUyMw@@._V1_SX300.jpg'},{title:'The Karate Kid Part II',genre:'drama',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2E3YjliMWEtYzlmOC00NmU5LWE4NGItNmIyZmNkZjkwNTA0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Karate Kid',genre:'drama',rating:37,year:'2010',imageSrc:'https://m.media-amazon.com/images/M/MV5BYjQ1NzRhYjYtMWY3My00ODA0LTk5ZDctYjQ4YjE0M2RhMGNiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg'},
    {title:'Gangster Squad',genre:'crime',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcwMjAyMTUzMl5BMl5BanBnXkFtZTcwODgxNzk1OA@@._V1_SX300.jpg'},{title:'The Bounty Hunter',genre:'comedy',rating:18,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUwNjY4MjY0MV5BMl5BanBnXkFtZTcwNTA2OTYwMw@@._V1_SX300.jpg'},{title:'Dragonball Evolution',genre:'fantasy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYzNDM0ODQxMF5BMl5BanBnXkFtZTcwOTMyMzMzMg@@._V1_SX300.jpg'},{title:'The Adjustment Bureau',genre:'action',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzc0ZDcwZTYtOWUzZi00NDE4LWI4NjgtMWVjZTUyYTA2ZTNhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:"The Sorcerer's Apprentice",genre:'fantasy',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2EwMzg3YWUtMTQyYS00ZDY3LTgzNTctOWI5NzY3MmZkOTk2XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg'},
    {title:'The Lone Ranger',genre:'action',rating:47,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjFiMTc2MTAtZDA0My00OGRmLTk5M2ItNTlmYTUwZmU2YmRiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'That Awkward Moment',genre:'comedy',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjExODEyMjMwNV5BMl5BanBnXkFtZTgwMTAyODM1MDE@._V1_SX300.jpg'},{title:'We Are Marshall',genre:'drama',rating:51,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwNDczNTg5MF5BMl5BanBnXkFtZTcwNDMwMzEzMw@@._V1_SX300.jpg'},{title:'Notorious',genre:'drama',rating:59,year:'2009',imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3ODUwOTg2NF5BMl5BanBnXkFtZTcwNjgwOTUwMg@@._V1_SX300.jpg'},{title:'Swing Vote',genre:'comedy',rating:19,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAwMTQyNzkwNV5BMl5BanBnXkFtZTcwNTgyMzE3MQ@@._V1_SX300.jpg'},
    {title:'Gridiron Gang',genre:'drama',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzk4NTAwNTAzN15BMl5BanBnXkFtZTcwNjczODYzMQ@@._V1_SX300.jpg'},{title:'Forever Strong',genre:'drama',rating:27,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmU5NGNlNDMtYWRiYy00Y2Y1LWE2OWItZjhjYjIyNjZiNTc2XkEyXkFqcGdeQXVyMjY2NDc0OTQ@._V1_SX300.jpg'},{title:'Piranha',genre:'thriller',rating:36,year:'2010',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU3NDg2NTY4Nl5BMl5BanBnXkFtZTcwMTM0OTE3Mw@@._V1_SX300.jpg'},{title:'Piranha 3DD',genre:'thriller',rating:9,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAzMzY4NTk0M15BMl5BanBnXkFtZTcwMDA4ODU3Nw@@._V1_SX300.jpg'},{title:'Draft Day',genre:'drama',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAyOTMxMjA3Nl5BMl5BanBnXkFtZTgwMTMwNjQ4MDE@._V1_SX300.jpg'},
    {title:'A League of Their Own',genre:'comedy',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjQ1NTQyYjktZDc5My00NDA1LWI1NmItY2ViNjQ0NDk4NmRjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Easy A',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE1MzU1Mjg1OF5BMl5BanBnXkFtZTcwNDc3NDQ2Mw@@._V1_SX300.jpg'},{title:'Get Him to the Greek',genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIyMzQ0MjExNV5BMl5BanBnXkFtZTcwMzkyMzgxMw@@._V1_SX300.jpg'},{title:'Don Jon',genre:'drama',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2ZhY2IzMWQtMGU4MC00ODg2LThkNWMtNWMzYmM2OTc5ZDMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:"National Lampoon's Animal House",genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2M2ZDA4MTYtOGRjMi00OTg5LWI1ZTUtMjQxZTc2NWZjNDFkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
    {title:'Shallow Hal',genre:'comedy',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcwMzY2NDE0NF5BMl5BanBnXkFtZTYwNjg2Njc2._V1_SX300.jpg'},{title:'A Thousand Words',genre:'comedy',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAzODAwODkwMjBeQTJeQWpwZ15BbWU3MDI4MDE3NDc@._V1_SX300.jpg'},{title:'Spirited Away',genre:'fantasy',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Bucket List',genre:'comedy',rating:29,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY2NTUyMjIyNF5BMl5BanBnXkFtZTYwNzYwMDM4._V1_SX300.jpg'},{title:'Austin Powers: International Man of Mystery',genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWUwMmEwY2QtMGZmZC00ZDVjLTg1NDgtMmI0MmZmYmM4NGIxXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg'},
    {title:'Divergent',genre:'scifi',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg'},{title:'Insurgent',genre:'scifi',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgxOTYxMTg3OF5BMl5BanBnXkFtZTgwMDgyMzA2NDE@._V1_SX300.jpg'},{title:'Allegiant',genre:'scifi',rating:12,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjk2OTc5YzQtMjAwMS00YWY4LTk1ZWItOTgyMmRkMGU4ZmY1XkEyXkFqcGdeQXVyMzQ1MzUwMTE@._V1_SX300.jpg'},{title:'Twilight',genre:'fantasy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg'},{title:'The Twilight Saga: New Moon',genre:'fantasy',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI3MjE3NDIxNF5BMl5BanBnXkFtZTcwODM3NTY5Mg@@._V1_SX300.jpg'},
    {title:'The Twilight Saga: Eclipse',genre:'fantasy',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_SX300.jpg'},{title:'The Twilight Saga: Breaking Dawn - Part 1',genre:'fantasy',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BODgxNDE0OTAzOF5BMl5BanBnXkFtZTcwNzcwODE2Ng@@._V1_SX300.jpg'},{title:'The Twilight Saga: Breaking Dawn - Part 2',genre:'fantasy',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_SX300.jpg'},{title:'Yes Man',genre:'comedy',rating:42,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzBmZTMzYmItNzhhMC00M2FkLWIxMGEtMjIxMjAwNmQ2ZmM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'The Internship',genre:'comedy',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM1MzczMDgwOV5BMl5BanBnXkFtZTcwMDM4NjM2OQ@@._V1_SX300.jpg'},
    {title:'The Watch',genre:'comedy',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjU5MzI1NTk1MV5BMl5BanBnXkFtZTcwMzk5NzY5Nw@@._V1_SX300.jpg'},{title:'Wedding Crashers',genre:'comedy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmJkNzViYjYtZWZlNy00OGE4LWI2MzUtYTcwNjY3Y2MyODIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'Now You See Me',genre:'crime',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg'},{title:'Entourage',genre:'comedy',rating:39,year:'2015',imageSrc:'https://m.media-amazon.com/images/M/MV5BMGY5ZmE4ZWItYzU0YS00ZDczLThiMzctMzQyYjJkNGYzNGQ2XkEyXkFqcGdeQXVyMzI2MTMxNTM@._V1_SX300.jpg'},{title:'Meet the Parents',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGNlMGZiMmUtZjU0NC00MWU4LWI0YTgtYzdlNGVhZGU4NWZlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'Hot Tub Time Machine',genre:'comedy',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwMjExODA4Ml5BMl5BanBnXkFtZTcwNTYwMDYxMw@@._V1_SX300.jpg'},{title:'The Vow',genre:'drama',rating:25,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_SX300.jpg'},{title:'Despicable Me',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg'},{title:'Despicable Me 2',genre:'comedy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg'},{title:"She's Out of My League",genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkwMTY5ODA1MF5BMl5BanBnXkFtZTcwODYyNzAxMw@@._V1_SX300.jpg'},
    {title:'30 Minutes or Less',genre:'comedy',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM5NjM0ODY1NF5BMl5BanBnXkFtZTcwMjk5NjI0Ng@@._V1_SX300.jpg'},{title:"What's Your Number",genre:'comedy',rating:23,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIzNTc2MTgwNV5BMl5BanBnXkFtZTcwMzYzMzgxNQ@@._V1_SX300.jpg'},{title:'Bad Teacher',genre:'comedy',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ5NDI4MDM0Nl5BMl5BanBnXkFtZTcwNDYwODU2NA@@._V1_SX300.jpg'},{title:'Hall Pass',genre:'comedy',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc4MzIxNTYwNl5BMl5BanBnXkFtZTcwNzE4MjE0NA@@._V1_SX300.jpg'},{title:'Harold + Kumar Go to White Castle',genre:'comedy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDc2M2I5MDQtNzliMS00ZmFjLWJmNzEtMTQwYTkxOWI4YzJlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {title:'Harold + Kumar Escape from Guantanamo Bay',genre:'comedy',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ3NTg3OTk0OV5BMl5BanBnXkFtZTcwODAwMzU1MQ@@._V1_SX300.jpg'},{title:'A Very Harold + Kumar Christmas',genre:'comedy',rating:47,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzA1NTQzMjAyOV5BMl5BanBnXkFtZTcwNDcyMjY2Ng@@._V1_SX300.jpg'},{title:'Your Highness',genre:'comedy',rating:28,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY2MDgwODIyMV5BMl5BanBnXkFtZTcwODc1NDQ0NA@@._V1_SX300.jpg'},{title:'The Green Hornet',genre:'action',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcwOTMwMDYyMl5BMl5BanBnXkFtZTcwMzAxMjMyNA@@._V1_SX300.jpg'},{title:'The Tournament',genre:'action',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg0NTU2OTE2OF5BMl5BanBnXkFtZTcwMDQ0NjQ2MQ@@._V1_SX300.jpg'},
    {title:"We're The Millers",genre:'comedy',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_SX300.jpg'},{title:'The Night Before',genre:'comedy',rating:46,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkyNDY1ODQwNV5BMl5BanBnXkFtZTgwNzA2MjUwNzE@._V1_SX300.jpg'},{title:'The Wedding Ringer',genre:'comedy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk3MjQyNTUxNl5BMl5BanBnXkFtZTgwNjM3Mjk1MzE@._V1_SX300.jpg'},{title:'White House Down',genre:'action',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Identity Thief',genre:'comedy',rating:19,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3NzM5MTk2Nl5BMl5BanBnXkFtZTcwMDQ4MjQ3OA@@._V1_SX300.jpg'},
    {title:'I Now Pronounce You Chuck + Larry',genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM4NDQ3NDQ3Nl5BMl5BanBnXkFtZTcwMjE4NjY0MQ@@._V1_SX300.jpg'},{title:'Dope',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3MjYyNTk0Nl5BMl5BanBnXkFtZTgwODc1NzQ1NTE@._V1_SX300.jpg'},{title:'Just Go With It',genre:'comedy',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_SX300.jpg'},{title:'Caddyshack',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2I1NWE2NzctNzNkYS00Nzg5LWEwZTQtN2I3Nzk3MTQwMDY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Goon',genre:'comedy',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcxOTQwMTQ3MF5BMl5BanBnXkFtZTcwMDcyOTQwNw@@._V1_SX300.jpg'},
    {title:'Wet Hot American Summer',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjdjYjlhNTctNDY0Yi00ZTM4LWE1MWItYWUzNmYwYWU0OTI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Old School',genre:'comedy',rating:54,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzI4NDIzMDgtNGNkZi00MTI2LWJhYzgtYzM5NThhMTQ0OGIzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'I Love You, Man',genre:'comedy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg'},{title:'Spaceballs',genre:'comedy',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjVjOGQ0OTctNDhkZC00ZGNiLWI2ZGEtYjZlMWZjOTlkNDlhXkEyXkFqcGdeQXVyNjg1MjEwOTM@._V1_SX300.jpg'},{title:'Sausage Party',genre:'comedy',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@._V1_SX300.jpg'},
    {title:'Valkyrie',genre:'action',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg'},{title:'Kangaroo Jack',genre:'comedy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk1Njg5MjAyOV5BMl5BanBnXkFtZTYwNDAxMDg5._V1_SX300.jpg'},{title:'Hanna',genre:'action',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjljNzE0OTItM2Q1MS00MTUyLTg4YjgtMzUzZDRkMzkyN2NiXkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_SX300.jpg'},{title:'John Wick',genre:'action',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg'},{title:'The Mummy',genre:'fantasy',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Raiders of the Lost Ark',genre:'action',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg'},{title:'Sudden Death',genre:'action',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2NjYWE5NjMtODlmZC00MjJhLWFkZTktYTJlZTI4YjVkMGNmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg'},{title:'The Lion King',genre:'comedy',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg'},{title:'Cast Away',genre:'drama',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg'},{title:'Fantastic Beasts and Where to Find Them',genre:'fantasy',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SX300.jpg'},
    {title:'Jack the Giant Slayer',genre:'fantasy',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE1NDMxMjI0OV5BMl5BanBnXkFtZTcwMjQyMDExOQ@@._V1_SX300.jpg'},{title:'Oz the Great and Powerful',genre:'fantasy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMyMzQ1ODM1MF5BMl5BanBnXkFtZTcwMjE2MTQxOQ@@._V1_SX300.jpg'},{title:'Beauty and the Beast',genre:'fantasy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Willy Wonka + the Chocolate Factory',genre:'fantasy',rating:72,year:'1971',imageSrc:'https://m.media-amazon.com/images/M/MV5BZTllNDU0ZTItYTYxMC00OTI4LThlNDAtZjNiNzdhMWZiYjNmXkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_SX300.jpg'},{title:'Sinister',genre:'thriller',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_SX300.jpg'},
    {title:'Robots',genre:'comedy',rating:57,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmJhNTQwY2MtYTU0Yy00NDVhLThiZTktNmMxZTk5Nzk3NzE2XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg'},{title:'Stormbreaker',genre:'action',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAwODY1NzAzNF5BMl5BanBnXkFtZTYwODUxNDc3._V1_SX300.jpg'},{title:'Sex Drive',genre:'comedy',rating:31,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE0MTcyMzg5M15BMl5BanBnXkFtZTcwMDUyOTA4MQ@@._V1_SX300.jpg'},{title:'Rugrats in Paris',genre:'comedy',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2E0ZjhkM2YtZjNjMy00YjhiLWJlZDEtNDEwZThkM2VmMDU5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Aladdin',genre:'comedy',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'},
    {title:'John Tucker Must Die',genre:'comedy',rating:29,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI3MDkwODQ3OV5BMl5BanBnXkFtZTcwNTE4NDQzMQ@@._V1_SX300.jpg'},{title:'College',genre:'comedy',rating:3,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc4Mjc1NzIxOF5BMl5BanBnXkFtZTcwMjEzMjc3MQ@@._V1_SX300.jpg'},{title:'The Smurfs',genre:'comedy',rating:19,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDUyMmFiYTctZDcyYS00OGY4LTk1ZmYtZjBmODBlZTc1NjU4XkEyXkFqcGdeQXVyNTk1MTAyODc@._V1_SX300.jpg'},{title:'BASEketball',genre:'comedy',rating:29,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmZjZDg2ZjItYTVkNC00YWRmLThmZTMtNTYxNTI5MWM4NjU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'A Christmas Story',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWMyNjE0MzEtMzVjNy00NjIxLTg0ZjMtMWJhNGI1YmVjYTczL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'},
    {title:'42',genre:'drama',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwMDU4MDI3MV5BMl5BanBnXkFtZTcwMjU1NDgyOQ@@._V1_SX300.jpg'},{title:'Ice Age',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmYxZWY2NzgtYzJjZC00MDFmLTgxZTctMjRiYjdjY2FhODg3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg'},{title:'Big Hero 6',genre:'scifi',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg'},{title:'Eagle Eye',genre:'action',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5MTMzMDMzNl5BMl5BanBnXkFtZTcwMzUwNDUzMw@@._V1_SX300.jpg'},{title:'Vantage Point',genre:'action',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3MjQ5OTY4M15BMl5BanBnXkFtZTcwNjk1MDU1MQ@@._V1_SX300.jpg'},{title:'Eragon',genre:'fantasy',rating:20,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzMyMGI1N2UtNzc5YS00OGNkLTg1OTktMTNkMmY2Zjk1NTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'Friday the 13th',genre:'thriller',rating:26,year:'2009',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ5ODI5NTMzN15BMl5BanBnXkFtZTcwNzY4MTYxMg@@._V1_SX300.jpg'},{title:'The Lego Batman Movie',genre:'comedy',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg'},{title:'Police Academy',genre:'comedy',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjNiMWVhNjAtMzgyYS00NzRhLWJmNGUtNzdiOGFhMmY5NDUwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Revenge of the Nerds',genre:'comedy',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BODU1NzM4NTA4Nl5BMl5BanBnXkFtZTgwMTkxMzcxMTE@._V1_SX300.jpg'},{title:'Isle of Dogs',genre:'comedy',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyOTUwNjAxM15BMl5BanBnXkFtZTgwODcyMzE0NDM@._V1_SX300.jpg'},
    {title:'Casablanca',genre:'drama',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'},{title:'Mad Max 2: The Road Warrior',genre:'scifi',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2VlNjNhZWQtMTY2OC00Y2E1LWJkNGUtMDU4M2ViNzliMGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Wonder Woman 1984',genre:'superhero',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg'},{title:'Lawless',genre:'crime',rating:58,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxNjUyNjUwN15BMl5BanBnXkFtZTcwMDgwOTIyOA@@._V1_SX300.jpg'},{title:'Mad Max: Beyond Thunderdome',genre:'scifi',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmI4YWEyNTItZTFiMS00YzY4LWE2ZjYtNGRlNmZhNjRmOWVkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'},
    {title:'Revenge of the Nerds II',genre:'comedy',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BYThmOGViMjQtYjYwMS00ZmI5LWEwNjMtNmQ5YzhmYWY5NTAyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Revenge of the Nerds III',genre:'comedy',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BODEyZTE3NTctYzJmMi00Y2UyLTlmNWEtMzAxYzFmMDk2ZjQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Revenge of the Nerds IV',genre:'comedy',rating:14,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTcxODFjN2YtMDllZC00ZDg2LTk0MWQtOTMxMTc5NWY5MmRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Karate Kid Part III',genre:'drama',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BODk0NzA4MTMtNGQ3Zi00OTdlLThiZmQtOTI0YWEyNDFiMTg2XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg'},
    {title:'Anchorman 2: The Legend Continues',genre:'comedy',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE5ODk0NjQzNV5BMl5BanBnXkFtZTgwODk4MDA1MDE@._V1_SX300.jpg'},{title:'Brüno',genre:'comedy',rating:35,year:'2009',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUwNDIwNDE5MV5BMl5BanBnXkFtZTcwMDA2MzA1Mg@@._V1_SX300.jpg'},{title:'Road Trip: Beer Pong',genre:'comedy',rating:14,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI4MTU5OTg4NF5BMl5BanBnXkFtZTcwNjc0NTU2Mg@@._V1_SX300.jpg'},{title:'Meet the Fockers',genre:'comedy',rating:41,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWZjODQxMWMtZmIzYS00YjMwLWFiZTctYmFiZmJiNjljYWVmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Little Fockers',genre:'comedy',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkwNjE3NjQwOV5BMl5BanBnXkFtZTcwNzAyNTMwNA@@._V1_SX300.jpg'},
    {title:'Meet the Spartans',genre:'comedy',rating:5,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxMDE3NDQwMF5BMl5BanBnXkFtZTcwMjA0MzU1MQ@@._V1_SX300.jpg'},{title:'Epic Movie',genre:'comedy',rating:11,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg'},{title:'The Pacifier',genre:'comedy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTE5MTcxOTQxNl5BMl5BanBnXkFtZTYwMzk3Nzg2._V1_SX300.jpg'},{title:'Bucky Larson: Born to be a Star',genre:'comedy',rating:4,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIzMjY4MTk2M15BMl5BanBnXkFtZTcwNzQ3ODg3NQ@@._V1_SX300.jpg'},{title:'The Incredible Hulk',genre:'superhero',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg'},
    {title:'The Transporter',genre:'action',rating:58,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk2NDc2MDAxN15BMl5BanBnXkFtZTYwNDc1NDY2._V1_SX300.jpg'},{title:'The Mechanic',genre:'action',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEyMjk1NjI1M15BMl5BanBnXkFtZTcwODcyNjAxNA@@._V1_SX300.jpg'},{title:'eXistenZ',genre:'scifi',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmU1MTJkYWItMzM5Ny00NDgxLTgxOGEtNTkzNDdkZjkwNGI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'Kicking + Screaming',genre:'comedy',rating:40,year:'2005',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTA5Njk1MjEzMzZeQTJeQWpwZ15BbWU3MDY3NjY4MjE@._V1_SX300.jpg'},{title:'Mr. 3000',genre:'comedy',rating:47,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg5NTk2MTQ0NV5BMl5BanBnXkFtZTcwNjMyNTUyMQ@@._V1_SX300.jpg'},
    {title:'The Sandlot 2',genre:'comedy',rating:38,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI5MjY1NjE4MV5BMl5BanBnXkFtZTcwOTcwMjgyMQ@@._V1_SX300.jpg'},{title:'Soul',genre:'comedy',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg'},{title:'Borat Subsequent Moviefilm',genre:'comedy',rating:61,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmY3OTdkOWEtNjc2ZC00OTZmLWI5OWItMjdjYjRkNTExNDNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg'},{title:'Our Idiot Brother',genre:'comedy',rating:51,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU3NjM3Mzg0Ml5BMl5BanBnXkFtZTcwOTk4MDI3NQ@@._V1_SX300.jpg'},{title:'Are You Here',genre:'comedy',rating:22,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjY3NzM2NDg0MV5BMl5BanBnXkFtZTgwOTE2MjU5MTE@._V1_SX300.jpg'},
    {title:'Freejack',genre:'scifi',rating:22,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWM2NjVmOWMtNDVmOS00ZWUwLWEyNTctZGQyMzJiMWVhNDQxXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'},{title:'Wanderlust',genre:'comedy',rating:30,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5NjIyOTY1Nl5BMl5BanBnXkFtZTcwMDY3NjQ0Nw@@._V1_SX300.jpg'},{title:'Parasite',genre:'drama',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'},{title:'Get Hard',genre:'comedy',rating:22,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc3OTc1NjM0M15BMl5BanBnXkFtZTgwNjAyMzE1MzE@._V1_SX300.jpg'},{title:'Think Like a Man',genre:'comedy',rating:44,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjExNTc4NDg3OV5BMl5BanBnXkFtZTcwNTMzNDAxNw@@._V1_SX300.jpg'},{title:'Clockstoppers',genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ1Njc5MjgwNF5BMl5BanBnXkFtZTYwNTE3MTQ5._V1_SX300.jpg'},
    {title:'Red Riding Hood',genre:'fantasy',rating:21,year:'2011',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg'},{title:"Logan's Run",genre:'scifi',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjFiY2IyMmItNmUwZi00ZGYxLThiZGItMWZiZjE0NGVhNWNmXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg'},{title:'L.A. Confidential',genre:'crime',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Lottery Ticket',genre:'comedy',rating:34,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM0ODA2NjcxM15BMl5BanBnXkFtZTcwNTA3NTI0Mw@@._V1_SX300.jpg'},{title:'Zack and Miri Make a Porno',genre:'comedy',rating:51,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2I1N2Y0ODEtNzZmZS00NzBjLWFkZjEtMTVkOTY1Y2UzZGE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'The Sitter',genre:'comedy',rating:26,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDU1ZWJmMmUtM2Q5Ny00MjdhLWE0OTMtMWJkMjg1OTc2YTgxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'I Care A Lot',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWU2ZTRhNDMtMWYxMC00ZTVkLThjZmItZGY4MGU0YmZlMjJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Hunt for the Wilderpeople',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SX300.jpg'},{title:'Godzilla vs. Kong',genre:'scifi',rating:49,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg'},{title:'A Million Ways to Die in the West',genre:'comedy',rating:45,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_SX300.jpg'},
    {title:'Kindergarten Cop',genre:'comedy',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMyMTIyOTc0N15BMl5BanBnXkFtZTgwODY1NTk4NjE@._V1_SX300.jpg'},{title:'Last Vegas',genre:'comedy',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2ODg2MTIyNF5BMl5BanBnXkFtZTgwMzU2NjgwMDE@._V1_SX300.jpg'},{title:'Big Daddy',genre:'comedy',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjAzNzQ4YzEtZWFlOS00YWVkLWE2NDctZDBiZTUxYjgwOTYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Little Rascals',genre:'comedy',rating:32,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWE1MzdmNmMtNWQwZS00MTVkLTk3MDMtYzVkOWZlOTczMDIwXkEyXkFqcGdeQXVyNjg4NzYzMzA@._V1_SX300.jpg'},{title:'Escape From New York',genre:'scifi',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUzMTY0Nzg0MV5BMl5BanBnXkFtZTgwMDU3MzQxMDE@._V1_SX300.jpg'},
    {title:'Man On a Ledge',genre:'action',rating:36,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc5MTE4MzY2N15BMl5BanBnXkFtZTcwNjMwNDc3Ng@@._V1_SX300.jpg'},{title:'Palm Springs',genre:'comedy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjk0MTgzMmQtZmY2My00NmE5LWExNGUtYjZkNTA3ZDkyMTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Demon Slayer Mugen Train',genre:'action',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg'},{title:'False Positive',year:'2021',genre:'thriller',rating:41,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2M2N2Q5Y2QtYmI5OS00OWU3LTlkNDgtNWY4YTAwNDFjZmUyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Neon Genesis Evangelion: The End of Evangelion',genre:'scifi',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjJhMThkNTQtNjkxNy00MDdjLTg4MWQtMTI2MmQ3MDVmODUzXkEyXkFqcGdeQXVyMTAwOTA3NzY3._V1_SX300.jpg'},
    {title:'Space Jam: A New Legacy',genre:'comedy',rating:35,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTAzN2ZlZTEtOTA5ZS00MGFjLTliYWMtYTQzYTFlYTIwZDVmXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg'}];

    //JSON object containing Eagles stats leaders lists (not kept up-to-date)
    $scope.eaglesStats = {record:{wins:4,losses:11,ties:1},
    passing:[{first_name:'Carson',last_name:'Wentz',cmp:117,att:195,cmp_perc:60.0,yrds:1188,td:6,int:9,rate:68.5},
    {first_name:'Jalen',last_name:'Hurts',cmp:1,att:1,cmp_perc:100.0,yrds:18,td:0,int:0,rate:118.8}],
    rushing:[{first_name:'Miles',last_name:'Sanders',att:61,yrds:316,td:3},
    {first_name:'Carson',last_name:'Wentz',att:23,yrds:122,td:3},
    {first_name:'Boston',last_name:'Scott',att:19,yrds:63,td:0},
    {first_name:'Corey',last_name:'Clement',att:11,yrds:30,td:0},
    {first_name:'Jalen',last_name:'Hurts',att:5,yrds:26,td:0},
    {first_name:'Jason',last_name:'Huntley',att:1,yrds:1,td:0},
    {first_name:'Greg',last_name:'Ward',att:1,yrds:-6,td:0},
    {first_name:'Adrian',last_name:'Killins',att:1,yrds:-12,td:0}],
    receiving:[{first_name:'Gred',last_name:'Ward',rec:22,yrds:172,td:2},
    {first_name:'Zach',last_name:'Ertz',rec:20,yrds:145,td:1},
    {first_name:'Dallas',last_name:'Goedert',rec:13,yrds:138,td:1},
    {first_name:'Desean',last_name:'Jackson',rec:10,yrds:121,td:0},
    {first_name:'Jalen',last_name:'Reagor',rec:5,yrds:96,td:0},
    {first_name:'Miles',last_name:'Sanders',rec:11,yrds:97,td:0},
    {first_name:'Travis',last_name:'Fulgham',rec:12,yrds:209,td:2},
    {first_name:'Richard',last_name:'Rodgers',rec:6,yrds:68,td:0},
    {first_name:'Boston',last_name:'Scott',rec:6,yrds:43,td:0},
    {first_name:'John',last_name:'Hightower',rec:7,yrds:57,td:0},
    {first_name:'Deontay',last_name:'Burnett',rec:2,yrds:19,td:0},
    {first_name:'Corey',last_name:'Clement',rec:2,yrds:2,td:0},
    {first_name:'J.J.',last_name:'Arcega-Whiteside',rec:1,yrds:37,td:0},
    {first_name:'Adrian',last_name:'Killins',rec:1,yrds:2,td:0}]};

    $scope.eaglesQBStats = [{first_name:"Carson",last_name:"Wentz",
    stats:[
        {year:2016,td:16,int:14,rating:79.3,gs:16,yrds:3782,cmp_perc:62.4,g:16,cmp:379,att:607,ypg:236.4},
        {year:2017,td:33,int:7,rating:101.9,gs:13,yrds:3296,cmp_perc:60.2,g:13,cmp:265,att:440,ypg:253.5},
        {year:2018,td:21,int:7,rating:102.2,gs:11,yrds:3074,cmp_perc:69.6,g:11,cmp:279,att:401,ypg:279.5},
        {year:2019,td:27,int:7,rating:93.1,gs:16,yrds:4039,cmp_perc:63.9,g:16,cmp:388,att:607,ypg:252.4},
        {year:2020,td:16,int:15,rating:72.8,gs:12,yrds:2620,cmp_perc:57.4,g:12,cmp:251,att:437,ypg:218.3},
        {year:"Regular Season Total",td:113,int:50,rating:89.2,gs:68,yrds:16811,cmp_perc:62.7,g:68,cmp:1562,att:2492,ypg:247.2}],
    playoff_stats:{td:0,int:0,rating:39.6,gs:1,yrds:3,cmp_perc:25.0,g:1,cmp:1,att:4,ypg:1}},
    {first_name:"Nick",last_name:"Foles",
    stats:[
        {year:2012,td:6,int:5,rating:79.1,gs:6,yrds:1699,cmp_perc:60.8,g:7,cmp:161,att:265,ypg:242.7},
        {year:2013,td:27,int:2,rating:119.2,gs:10,yrds:2891,cmp_perc:64.0,g:13,cmp:203,att:317,ypg:222.4},
        {year:2014,td:13,int:10,rating:81.4,gs:8,yrds:2163,cmp_perc:59.8,g:8,cmp:186,att:311,ypg:270.4},
        {year:2017,td:5,int:2,rating:79.5,gs:3,yrds:537,cmp_perc:56.4,g:7,cmp:57,att:101,ypg:76.7},
        {year:2018,td:7,int:4,rating:96.0,gs:5,yrds:1413,cmp_perc:72.3,g:5,cmp:141,att:195,ypg:282.6},
        {year:"Regular Season Total",td:58,int:23,rating:93.2,gs:32,yrds:8703,cmp_perc:62.9,g:40,cmp:748,att:1189,ypg:217.6}
    ],
    playoff_stats:{td:11,int:5,rating:98.8,gs:6,yrds:1633,cmp_perc:68.1,g:6,cmp:143,att:210,ypg:272.2}},
    {first_name:"Donovan",last_name:"McNabb",
    stats:[
        {year:1999,td:8,int:7,rating:60.1,gs:6,yrds:948,cmp_perc:49.1,g:12,cmp:106,att:216,ypg:79.0},
        {year:2000,td:21,int:13,rating:77.8,gs:16,yrds:3365,cmp_perc:58.0,g:16,cmp:330,att:569,ypg:210.3},
        {year:2001,td:25,int:12,rating:84.3,gs:16,yrds:3233,cmp_perc:57.8,g:16,cmp:285,att:493,ypg:202.1},
        {year:2002,td:17,int:6,rating:86.0,gs:10,yrds:2289,cmp_perc:58.4,g:10,cmp:211,att:361,ypg:228.9},
        {year:2003,td:16,int:11,rating:79.6,gs:16,yrds:3216,cmp_perc:57.5,g:16,cmp:275,att:478,ypg:201.0},
        {year:2004,td:31,int:8,rating:104.7,gs:15,yrds:3875,cmp_perc:64.0,g:15,cmp:300,att:469,ypg:258.3},
        {year:2005,td:16,int:9,rating:85.0,gs:9,yrds:2507,cmp_perc:59.1,g:9,cmp:211,att:375,ypg:278.6},
        {year:2006,td:18,int:60,rating:95.5,gs:10,yrds:2647,cmp_perc:57.0,g:10,cmp:180,att:316,ypg:264.7},
        {year:2007,td:19,int:7,rating:89.9,gs:14,yrds:3324,cmp_perc:61.5,g:14,cmp:291,att:473,ypg:237.4},
        {year:2008,td:23,int:11,rating:86.4,gs:16,yrds:3916,cmp_perc:60.4,g:16,cmp:345,att:571,ypg:244.8},
        {year:2009,td:22,int:10,rating:92.9,gs:14,yrds:3553,cmp_perc:60.3,g:14,cmp:267,att:443,ypg:253.8},
        {year:"Regular Season Total",td:216,int:100,rating:86.5,gs:142,yrds:32873,cmp_perc:59.0,g:148,cmp:2801,att:4746,ypg:222.1}
    ],
    playoff_stats:{td:24,int:17,rating:80.0,gs:16,yrds:3752,cmp_perc:59.1,g:16,cmp:341,att:577,ypg:234.5}},
    {first_name:"Michael",last_name:"Vick",
    stats:[
        {year:2009,td:1,int:0,rating:93.7,gs:1,yrds:86,cmp_perc:46.2,g:12,cmp:6,att:13,ypg:7.2},
        {year:2010,td:21,int:6,rating:100.2,gs:12,yrds:3018,cmp_perc:62.6,g:12,cmp:233,att:372,ypg:251.5},
        {year:2011,td:18,int:14,rating:84.9,gs:13,yrds:3303,cmp_perc:59.8,g:13,cmp:253,att:423,ypg:254.1},
        {year:2012,td:12,int:10,rating:78.1,gs:10,yrds:2362,cmp_perc:58.1,g:10,cmp:204,att:351,ypg:236.2},
        {year:2013,td:5,int:3,rating:86.5,gs:6,yrds:1215,cmp_perc:54.6,g:7,cmp:77,att:141,ypg:173.6},
        {year:"Regular Season Total",td:57,int:33,rating:87.7,gs:42,yrds:9984,cmp_perc:59.5,g:54,cmp:773,att:1300,ypg:184.9}
    ],
    playoff_stats:{td:2,int:1,rating:79.9,gs:1,yrds:368,cmp_perc:55.3,g:2,cmp:21,att:38,ypg:184.0}}];

    $scope.eaglesQBNames = [{last_name:"Wentz",first_name:"Carson"},{last_name:"Foles",first_name:"Nick"},{last_name:"Vick",first_name:"Michael"},{last_name:"McNabb",first_name:"Donovan"},
    {last_name:"Hurts",first_name:"Jalen"}];

    $scope.eaglesQBComparison = [
        {last_name:"Wentz",first_name:"Carson",year:2016,td:16,int:14,rating:79.3,gs:16,yrds:3782,cmp_perc:62.4,g:16,cmp:379,att:607,ypg:236.4},
        {last_name:"Wentz",first_name:"Carson",year:2017,td:33,int:7,rating:101.9,gs:13,yrds:3296,cmp_perc:60.2,g:13,cmp:265,att:440,ypg:253.5},
        {last_name:"Wentz",first_name:"Carson",year:2018,td:21,int:7,rating:102.2,gs:11,yrds:3074,cmp_perc:69.6,g:11,cmp:279,att:401,ypg:279.5},
        {last_name:"Wentz",first_name:"Carson",year:2019,td:27,int:7,rating:93.1,gs:16,yrds:4039,cmp_perc:63.9,g:16,cmp:388,att:607,ypg:252.4},
        {last_name:"Wentz",first_name:"Carson",year:2020,td:16,int:15,rating:72.8,gs:12,yrds:2620,cmp_perc:57.4,g:12,cmp:251,att:437,ypg:218.3},
        {last_name:"Wentz",first_name:"Carson",year:"Regular Season Total",td:113,int:50,rating:89.2,gs:68,yrds:16811,cmp_perc:62.7,g:68,cmp:1562,att:2492,ypg:247.2},
        {last_name:"Foles",first_name:"Nick",year:2012,td:6,int:5,rating:79.1,gs:6,yrds:1699,cmp_perc:60.8,g:7,cmp:161,att:265,ypg:242.7},
        {last_name:"Foles",first_name:"Nick",year:2013,td:27,int:2,rating:119.2,gs:10,yrds:2891,cmp_perc:64.0,g:13,cmp:203,att:317,ypg:222.4},
        {last_name:"Foles",first_name:"Nick",year:2014,td:13,int:10,rating:81.4,gs:8,yrds:2163,cmp_perc:59.8,g:8,cmp:186,att:311,ypg:270.4},
        {last_name:"Foles",first_name:"Nick",year:2017,td:5,int:2,rating:79.5,gs:3,yrds:537,cmp_perc:56.4,g:7,cmp:57,att:101,ypg:76.7},
        {last_name:"Foles",first_name:"Nick",year:2018,td:7,int:4,rating:96.0,gs:5,yrds:1413,cmp_perc:72.3,g:5,cmp:141,att:195,ypg:282.6},
        {last_name:"Foles",first_name:"Nick",year:"Regular Season Total",td:58,int:23,rating:93.2,gs:32,yrds:8703,cmp_perc:62.9,g:40,cmp:748,att:1189,ypg:217.6},
        {last_name:"McNabb",first_name:"Donovan",year:1999,td:8,int:7,rating:60.1,gs:6,yrds:948,cmp_perc:49.1,g:12,cmp:106,att:216,ypg:79.0},
        {last_name:"McNabb",first_name:"Donovan",year:2000,td:21,int:13,rating:77.8,gs:16,yrds:3365,cmp_perc:58.0,g:16,cmp:330,att:569,ypg:210.3},
        {last_name:"McNabb",first_name:"Donovan",year:2001,td:25,int:12,rating:84.3,gs:16,yrds:3233,cmp_perc:57.8,g:16,cmp:285,att:493,ypg:202.1},
        {last_name:"McNabb",first_name:"Donovan",year:2002,td:17,int:6,rating:86.0,gs:10,yrds:2289,cmp_perc:58.4,g:10,cmp:211,att:361,ypg:228.9},
        {last_name:"McNabb",first_name:"Donovan",year:2003,td:16,int:11,rating:79.6,gs:16,yrds:3216,cmp_perc:57.5,g:16,cmp:275,att:478,ypg:201.0},
        {last_name:"McNabb",first_name:"Donovan",year:2004,td:31,int:8,rating:104.7,gs:15,yrds:3875,cmp_perc:64.0,g:15,cmp:300,att:469,ypg:258.3},
        {last_name:"McNabb",first_name:"Donovan",year:2005,td:16,int:9,rating:85.0,gs:9,yrds:2507,cmp_perc:59.1,g:9,cmp:211,att:375,ypg:278.6},
        {last_name:"McNabb",first_name:"Donovan",year:2006,td:18,int:60,rating:95.5,gs:10,yrds:2647,cmp_perc:57.0,g:10,cmp:180,att:316,ypg:264.7},
        {last_name:"McNabb",first_name:"Donovan",year:2007,td:19,int:7,rating:89.9,gs:14,yrds:3324,cmp_perc:61.5,g:14,cmp:291,att:473,ypg:237.4},
        {last_name:"McNabb",first_name:"Donovan",year:2008,td:23,int:11,rating:86.4,gs:16,yrds:3916,cmp_perc:60.4,g:16,cmp:345,att:571,ypg:244.8},
        {last_name:"McNabb",first_name:"Donovan",year:2009,td:22,int:10,rating:92.9,gs:14,yrds:3553,cmp_perc:60.3,g:14,cmp:267,att:443,ypg:253.8},
        {last_name:"McNabb",first_name:"Donovan",year:"Regular Season Total",td:216,int:100,rating:86.5,gs:142,yrds:32873,cmp_perc:59.0,g:148,cmp:2801,att:4746,ypg:222.1},
        {last_name:"Vick",first_name:"Michael",year:2009,td:1,int:0,rating:93.7,gs:1,yrds:86,cmp_perc:46.2,g:12,cmp:6,att:13,ypg:7.2},
        {last_name:"Vick",first_name:"Michael",year:2010,td:21,int:6,rating:100.2,gs:12,yrds:3018,cmp_perc:62.6,g:12,cmp:233,att:372,ypg:251.5},
        {last_name:"Vick",first_name:"Michael",year:2011,td:18,int:14,rating:84.9,gs:13,yrds:3303,cmp_perc:59.8,g:13,cmp:253,att:423,ypg:254.1},
        {last_name:"Vick",first_name:"Michael",year:2012,td:12,int:10,rating:78.1,gs:10,yrds:2362,cmp_perc:58.1,g:10,cmp:204,att:351,ypg:236.2},
        {last_name:"Vick",first_name:"Michael",year:2013,td:5,int:3,rating:86.5,gs:6,yrds:1215,cmp_perc:54.6,g:7,cmp:77,att:141,ypg:173.6},
        {last_name:"Vick",first_name:"Michael",year:"Regular Season Total",td:57,int:33,rating:87.7,gs:42,yrds:9984,cmp_perc:59.5,g:54,cmp:773,att:1300,ypg:184.9},
        {last_name:"Hurts",first_name:"Jalen",year:2020,td:6,int:4,rating:77.6,gs:4,yrds:1061,cmp_perc:52.0,g:15,cmp:77,att:148,ypg:70.7}];

    //JSON array containing all tv show names, genres, ratings, and image links
    $scope.tvShowList = [{title:'Veep',genre:'comedy',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE2NDM0OTEwMl5BMl5BanBnXkFtZTgwNzgwNDI0ODE@._V1_SX300.jpg'},{title:'The Sopranos',genre:'crime',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'The End of the F***ing World',genre:'comedy',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2ZhNmQ2MjQtMmQzMi00YjE5LTlkMWMtMjk5YzIxMjk2NDc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Westworld',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg'},{title:"It's Always Sunny in Philadelphia",genre:'comedy',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTExNGZkMWMtMmIwZC00YjA3LTgwM2ItZjQ2YmZkMzQ1YWZkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},
    {title:'The Wire',genre:'crime',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Mad Men',genre:'drama',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg'},{title:'Black Mirror',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Mindhunter',genre:'crime',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},{title:'Nathan for You',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@._V1_SX300.jpg'},
    {title:'Sherlock',genre:'crime',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg'},{title:'Stranger Things',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_SX300.jpg'},{title:'Breaking Bad',genre:'crime',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Firefly',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_SX300.jpg'},{title:'Narcos',genre:'crime',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'},
    {title:'The Last Dance',genre:'documentary',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Attack on Titan',genre:'animated',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_SX300.jpg'},{title:'Avatar: The Last Airbender',genre:'animated',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg'},{title:'30 Rock',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ4NDQ4OTUzOV5BMl5BanBnXkFtZTcwMjMzMTUyNw@@._V1_SX300.jpg'},{title:'Game of Thrones',genre:'fantasy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg'},
    {title:'Lost',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Parks and Recreation',genre:'comedy',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5MjUxNDgwNF5BMl5BanBnXkFtZTgwMDI5NjMwNDE@._V1_SX300.jpg'},{title:'Fullmetal Alchemist Brotherhood',genre:'animated',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Peaky Blinders',genre:'drama',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX300.jpg'},{title:'You',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDJjOTg4OWYtYWIyOS00MjQ3LTg5ZDktYzU2N2RkNmYzNjZlXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},
    {title:'Band of Brothers',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SX300.jpg'},{title:"Schitt's Creek",genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Arrested Development',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg'},{title:'Community',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_SX300.jpg'},{title:'Orange is the New Black',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'The Office',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Sex Education',genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg'},{title:'Better Call Saul',genre:'drama',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Heroes',genre:'scifi',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI3ODU0OTQ1MV5BMl5BanBnXkFtZTgwNzI0MTQ2MzE@._V1_SX300.jpg'},{title:'The Mandalorian',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWI0OTJlYTItNzMwZi00YzRiLWJhMjItMWRlMDNhZjNiMzJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'Love, Death, & Robots',genre:'scifi',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc1MjIyNDI3Nl5BMl5BanBnXkFtZTgwMjQ1OTI0NzM@._V1_SX300.jpg'},{title:'Curb Your Enthusiasm',genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjYyMmJjYWUtZjBjMS00MWQzLTk0OWYtYzU1MmE3NzFhZjJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The Kominsky Method',genre:'comedy',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDg1NDNiNTUtOWQyMi00ZmFhLTg0YTEtNzgyYjBiMjhhOWE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The Boys',genre:'action',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg'},{title:'The Walking Dead',genre:'action',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'Supernatural',genre:'fantasy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWZlYjYzYTctNTliMy00YzMzLWI2NDEtYWZhZjRlZTM2MGQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Travelers',genre:'scifi',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUzOTQwOTg1MF5BMl5BanBnXkFtZTgwNzE4NzQ3NjM@._V1_SX300.jpg'},{title:'New Girl',genre:'comedy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_SX300.jpg'},{title:'Silicon Valley',genre:'comedy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTcwNzU2MGEtMzUzNC00MzMwLWJhZGItNDY3NDllYjU5YzAyXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Big Mouth',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzRlYzczMTQtNjdjZi00NzU3LTliZWEtMDRlNzhiZTVmYmNjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'The Legend of Korra',genre:'animated',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTRmM2E5OWYtYmYzMi00MDRiLTg2ZTYtZGQyZTNhZDMxYTgzXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg'},{title:'Shameless',genre:'comedy',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzFmODNkNDMtOTgzMy00NzQ1LWEwNDItNzU1MmYyYThhYzUwXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg'},{title:'Grimm',genre:'fantasy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_SX300.jpg'},{title:'Californication',genre:'comedy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAyMDM2ODExNF5BMl5BanBnXkFtZTgwNTI2MjkzMTE@._V1_SX300.jpg'},{title:'Daredevil',genre:'action',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_SX300.jpg'},
    {title:'One Punch Man',genre:'animated',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg'},{title:'House of Cards',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg'},{title:'Trailer Park Boys',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA0NTAwMTc1MF5BMl5BanBnXkFtZTgwODk2NjY0ODE@._V1_SX300.jpg'},{title:'Brooklyn Nine-Nine',genre:'comedy',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg'},
    {title:'Dexter',genre:'drama',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_SX300.jpg'},{title:"Bob's Burgers",genre:'animated',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGJiNmM1NDctNWUxYS00YzE4LWJjNTgtYTJhYzE0NjFmMTMwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Rick and Morty',genre:'animated',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg'},{title:'Atlanta',genre:'comedy',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzk5NDE5NDY1Ml5BMl5BanBnXkFtZTgwNTk0MTc3NDM@._V1_SX300.jpg'},{title:'Master of None',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk3ODYxNjQ3OV5BMl5BanBnXkFtZTgwNzA1MDQ5MTI@._V1_SX300.jpg'},
    {title:'Everything Sucks!',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2IwOTRkYjctYmNhYS00NThlLThkZGEtZDQ1Y2IwZDlmZTBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Sense8',genre:'scifi',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA4MTEyMzcwMl5BMl5BanBnXkFtZTgwMTIwODczNTM@._V1_SX300.jpg'},{title:'Altered Carbon',genre:'scifi',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjIxMWMzMzctYmZkYy00OTkzLWFlMWUtMjc3ZDFmYzQ3YmVkXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SX300.jpg'},{title:'Barry',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmY1NTk5N2QtYWQyOS00NjhiLWFhZmYtYWZmZGFlMjEzY2E2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Luke Cage',genre:'action',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxOTM3NjEwMV5BMl5BanBnXkFtZTgwNTkyOTY4NTM@._V1_SX300.jpg'},
    {title:'Maniac',genre:'scifi',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDMwOTgyNzYtNWI2Zi00MDcwLWEyNmUtMGQ5YzA3ZTljMTA2XkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SX300.jpg'},{title:'Death Note',genre:'animated',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg'},{title:'Living With Yourself',genre:'comdey',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjIyYWVkY2UtZDkxOC00NTE4LWFhZWUtZGYwMmJjNDA3YmVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The OA',genre:'scifi',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5OTkwNDkzOF5BMl5BanBnXkFtZTgwMDEyNzI1NzM@._V1_SX300.jpg'},{title:'Russian Doll',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmViMjdhZmQtODIyZi00Mzc4LWFhNTItOTk4NGM1NGU0ZDZjXkEyXkFqcGdeQXVyNjc2NTQzMjU@._V1_SX300.jpg'},
    {title:'The Good Place',genre:'comedy',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg'},{title:'Entourage',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDg3ZDc2MDQtNzQwZi00YzFjLTgyOTMtMDMzZTc5N2VlNTg2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Kantaro: The Sweet Tooth Salaryman',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWU3NGNiMDAtOGM3ZS00ZmQ0LWE5OTEtZDNhOWM0ZmQyZjQ0XkEyXkFqcGdeQXVyMjU1ODUyNzE@._V1_SX300.jpg'},{title:'Unbreakable Kimmy Schmidt',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgyNTQyNjUwN15BMl5BanBnXkFtZTgwNjMwNjUzNzM@._V1_SX300.jpg'},{title:'Blue Mountain State',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjQxOTI0MjcxM15BMl5BanBnXkFtZTcwOTY1MDk5NA@@._V1_SX300.jpg'},
    {title:'Burn Notice',genre:'action',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTczMzg4NjU1Ml5BMl5BanBnXkFtZTcwODc4NzY5Nw@@._V1_SX300.jpg'},{title:'Spartacus',genre:'action',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTEwZTM3MzUtMzk3Yy00YWI4LWI1ZTktOTc1MmRjZWM5ZDhmXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg'},{title:'The Punisher',genre:'action',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTExODIwOTUxNzFeQTJeQWpwZ15BbWU4MDE5MDA0MTcz._V1_SX300.jpg'},{title:'Bones',genre:'drama',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3ODMxMzM5NF5BMl5BanBnXkFtZTgwMDM1NjU0OTE@._V1_SX300.jpg'},{title:'Fate/Zero',genre:'animated',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDNiZjIzMzYtMDg1Zi00ZjM3LWFlZjUtZmNhMTQ1MDU3ODU0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg'},
    {title:'Fate/Stay Night: Unlimited Blade Works',genre:'animated',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg'},{title:'Tiger King',genre:'documentary',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Mobile Suit Gundam: Iron Blooded Orphans',genre:'animated',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTVlZGI0ODQtOWY5MS00YmRjLWExMjctNGY5ODk1YmMzZjFjXkEyXkFqcGdeQXVyMTU3OTE4NjU@._V1_SX300.jpg'},{title:'Cobra Kai',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTI3NjcxNjctNzZhZS00NjQwLTg4NDEtMmQzOGJiYTUwNWFjXkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_SX300.jpg'},{title:'Scrubs',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BODE1MGVjZjMtODc5My00ODBjLTg0NWItMDllNTNlM2Y3ZGYyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},
    {title:'Revolution',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTQ0YTIxZmUtMTVmZC00MzgxLThmYTItMDdlZjg5YmU2NzM0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},{title:'The Tomorrow People',genre:'scifi',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEyMDA4NjY0Nl5BMl5BanBnXkFtZTgwMDgzNDIxMDE@._V1_SX300.jpg'},{title:'Eastbound & Down',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAwNDU2NTM4Nl5BMl5BanBnXkFtZTcwMzg0NTc4Mw@@._V1_SX300.jpg'},{title:'Summer Heights High',genre:'comedy',rating:53,imageSrc:'https://m.media-amazon.com/images/M/MV5BODAxZGI4N2MtOTVhNi00MzhmLWIxYzItMzNkY2E0ZjQwY2VhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Archer',genre:'animated',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3NTMwMzY2OF5BMl5BanBnXkFtZTgwMDcxMjQ0NDE@._V1_SX300.jpg'},
    {title:'Modern Family',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_SX300.jpg'},{title:'Chernobyl',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Dragon Ball Super',genre:'animated',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg'},{title:'Space Force',genre:'comedy',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWYwMzE2MGItOTYwYy00YmQyLWE0NGQtZWViMTU4ZTk4ZjQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Fate/Apocrypha',genre:'animated',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmQwYTMzY2QtZTliMS00MGY0LTk0ODMtOWRlYjMyYzk0MjYxXkEyXkFqcGdeQXVyNzA2MTUzMzM@._V1_SX300.jpg'},
    {title:'Watchmen',genre:'action',rating:96,year:'2019',imageSrc:'https://m.media-amazon.com/images/M/MV5BYjhhZDE3NjgtMjkzNC00NzI3LWJhOTItMWQ5ZjljODA5NWNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'The Cape',genre:'action',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWNiZmU0MDItMDNiOS00MzNiLWI4NTAtNzQ1Y2QwMTRjYzZkXkEyXkFqcGdeQXVyNjQ0OTk1ODg@._V1_SX300.jpg'},{title:'The Simpsons',genre:'animated',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Family Guy',genre:'animated',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SX300.jpg'},{title:'American Dad',genre:'animated',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDRkOWIyOTUtMjg5YS00OTJjLTgwNGYtMjgxMTA0NWQ2NGI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {title:'Two and a Half Men',genre:'comedy',rating:67,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'The Big Bang Theory',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg'},{title:'Sword Art Online',genre:'animated',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Ballers',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzM5NDRkNzItN2FkZC00ZjQyLTlmYzctYmNiNTA4YzIxYTg2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'The Magicians',genre:'fantasy',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTU3ZWRmNDktMDQ0My00OGQzLTkzMzktOTVjZjUzMzVmNjNmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'Borderline',genre:'comedy',rating:75,year:'2016',imageSrc:'https://m.media-amazon.com/images/M/MV5BYTFlYjY0YTktMTc0YS00MzdhLWFhNWMtNjc5YmIzNGI4MjRhXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SX300.jpg'},{title:'Come Fly With Me',genre:'comedy',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYyOTAxODE1OF5BMl5BanBnXkFtZTcwMzY4NjQzNw@@._V1_SX300.jpg'},{title:'Wet Hot American Summer: First Day of Camp',rating:70,genre:'comedy',imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc5MDM1Njg2Nl5BMl5BanBnXkFtZTgwODE1MjUxNjE@._V1_SX300.jpg'},{title:'Friends',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Kill La Kill',genre:'animated',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzgyZjUyZTMtYzlkNC00NWEwLTg1YTQtNzI4MWJlOWM1YjU5XkEyXkFqcGdeQXVyNjgxNzAxNTc@._V1_SX300.jpg'},
    {title:'Dave',genre:'comedy',rating:79,year:'2020',imageSrc:'https://m.media-amazon.com/images/M/MV5BOTMyMjEyYjUtMjVlYS00MjlkLWFlNzAtN2YyMzM5MTQ3OWM3XkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg'},{title:'Naruto',genre:'animated',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Bojack Horseman',genre:'animated',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'WandaVision',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The Twilight Zone',genre:'scifi',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Demon Slayer: Kimetsu no Yaiba',genre:'animated',year:'2019',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg'},{title:'Naruto: Shippuden',genre:'animated',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg'},{title:"The Queen's Gambit",genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_SX300.jpg'},{title:'The Falcon and the Winter Soldier',genre:'scifi',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_SX300.jpg'},
    {title:'Jujutsu Kaisen',genre:'animated',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_SX300.jpg'},{title:'Twin Peaks',genre:'crime',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_SX300.jpg'},{title:'Invincible',genre:'animated',year:'2021',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'My Hero Academia',genre:'animated',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Twin Peaks',year:'2017',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5MTkzNTY5Ml5BMl5BanBnXkFtZTgwNjU4MzY1MTI@._V1_SX300.jpg'},
    {title:'The Kings',year:'2021',genre:'documentary',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzJhNTViMzgtOGE4Ni00YmViLWIyZGQtNDY5NDFkNTJkODVhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg'},{title:'Neon Genesis Evangelion',genre:'animated',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjY1Y2ZmNDctZWQ3Yy00MTE3LTk2M2QtMjQ0MDA5ODVjMDEyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'}];

    //alert("Total Movies: " + $scope.moviesList.length);
    //alert("Total TV Shows: " + $scope.tvShowList.length);

    //variables that track which tab is selected
    $scope.home = true;
    $scope.movies = false;
    $scope.tvShows = false;
    $scope.sports = false;
    $scope.dnd = false;
    $scope.travel = false;
    $scope.tools = false;

    //loadContent takes in a tab name and displays that tab content
    //while hiding all other content, and changes the styling of the selected tab
    $scope.loadContent = function(tabName) {
        /*document.getElementById('homeTab').style.background = "";
        document.getElementById('moviesTab').style.background = "";
        document.getElementById('showsTab').style.background = "";
        document.getElementById('sportsTab').style.background = "";
        document.getElementById('dndTab').style.background = "";
        document.getElementById(tabName + 'Tab').style.background = "#495469";*/
        document.getElementById('homeTab').style.textDecoration = "";
        document.getElementById('moviesTab').style.textDecoration = "";
        document.getElementById('showsTab').style.textDecoration = "";
        document.getElementById('sportsTab').style.textDecoration = "";
        document.getElementById('dndTab').style.textDecoration = "";
        document.getElementById('travelTab').style.textDecoration = "";
        document.getElementById('toolsTab').style.textDecoration = "";
        document.getElementById(tabName + 'Tab').style.textDecoration = "underline";
        document.getElementById(tabName + 'Tab').style.textUnderlineOffset = "10px";
        if (tabName == 'home') {
            $scope.home = true;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = false;
            $scope.dnd = false;
            $scope.travel = false;
            $scope.tools = false;
        }
        else if (tabName == 'movies') {
            $scope.home = false;
            $scope.movies = true;
            $scope.tvShows = false;
            $scope.sports = false;
            $scope.dnd = false;
            $scope.travel = false;
            $scope.tools = false;
        }
        else if (tabName == 'sports') {
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = true;
            $scope.dnd = false;
            $scope.travel = false;
            $scope.tools = false;
        }
        else if (tabName == 'shows'){
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = true;
            $scope.sports = false;
            $scope.dnd = false;
            $scope.travel = false;
            $scope.tools = false;
        }
        else if (tabName == 'dnd') {
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = false;
            $scope.dnd = true;
            $scope.travel = false;
            $scope.tools = false;
        }
        else if (tabName == 'travel') {
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = false;
            $scope.dnd = false;
            $scope.travel = true;
            $scope.tools = false;
        }
        else if (tabName == 'tools') {
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = false;
            $scope.dnd = false;
            $scope.travel = false;
            $scope.tools = true;
        }
    }

    //variable that holds list of movie genres
    $scope.movieGenreList = [{genre:'all',display:'All'},{genre:'scifi',display:'Science Fiction'},{genre:'drama',display:'Drama'},
    {genre:'thriller',display:'Thriller'},{genre:'crime',display:'Crime'},{genre:'unique',display:'Very Unique'},{genre:'superhero',display:'Superhero'},
    {genre:'fantasy',display:'Fantasy'},{genre:'action',display:'Action'},{genre:'comedy',display:'Comedy'}];

    //variable that tracks the minimum rating to filter movies
    $scope.minRating = 0;

    //variable that tracks which movie genre tab is selected
    $scope.movieGenre = "all";
    $scope.genreDisplay = "All Movies";

    $scope.moviePageKey = "";

    //variable that tracks if a genre has been selected
    //$scope.genreFilter = false;

    //movieFilter is used to determine which movies to show in the ng-repeat
    $scope.movieFilter = function(movie) {
        if ($scope.movieGenre == 'all') {
            return ((movie.rating >= $scope.minRating) &&
            (movie.title.toLowerCase().replace(/ /g,'').includes($scope.moviePageKey.toLowerCase().replace(/ /g,''))));
        }
        return (((movie.genre == $scope.movieGenre) && (movie.rating >= $scope.minRating)) &&
        (movie.title.toLowerCase().replace(/ /g,'').includes($scope.moviePageKey.toLowerCase().replace(/ /g,''))));
    }

    //selectGenre sets the movieGenre variable, displaying that genre content, 
    //and changes the styling of the selected tab
    $scope.selectGenre = function(genre, display) {
        /*if (genre == 'all') {
            $scope.genreFilter = false;
        }
        else{
            $scope.genreFilter = true;
        }*/
        $scope.movieGenre = genre;
        $scope.genreDisplay = display + " Movies";
    }

    //variable that tracks whether or not the movie popup is showing
    $scope.showPopup = false;

    //testMovieAPI takes in a movie title, calls the movie info API
    //for that title, and sets the popup variables
    $scope.testMovieAPI = function(movie) {
        if (typeof movie.year == 'undefined') {
            movie.year = '';
        }
        $http({
            method: 'GET',
            url: "https://www.omdbapi.com/?t=" + movie.title + '&y=' + movie.year + "&apikey=8f59097f"
        }).then(function success(response) {
            var rating = $scope.moviesList.find(
                /*item  => (item.title == movie.title)*/
                function(item) {
                    return (item.title == movie.title && item.year == movie.year);
                }
            ).rating;
            $scope.jimmyMovieRating = rating + "%";
            document.getElementById("moviePoster").src = response.data.Poster;
            alert(response.data.Poster);
            $scope.movieTitle = response.data.Title;
            $scope.movieRating = response.data.Rated;
            $scope.movieRuntime = response.data.Runtime;
            if (typeof response.data.Ratings[1] !== 'undefined') {
                $scope.movieRTScore = "Rotten Tomatoes: " + response.data.Ratings[1].Value;
            }
            else {
                $scope.movieRTScore = "N/A";
            }
            $scope.movieIMDBScore = "IMDB: " + response.data.imdbRating;
            $scope.movieMetaScore = "Metacritic: " + response.data.Metascore + "%";
            $scope.moviePlot = response.data.Plot;
            $scope.showPopup = true;
        },
        function error(response){
            alert("error!");
        });
    }

    //randomMovie selects a random movie from the moviesList array and calls the testMovieAPI
    //function to get the movie info and populate the popup
    $scope.randomMovie = function() {
        var filteredList = $scope.moviesList.filter($scope.movieFilter);
        //var movie = $scope.moviesList[Math.floor(Math.random() * $scope.moviesList.length)];
        var movie = filteredList[Math.floor(Math.random() * filteredList.length)];
        $scope.testMovieAPI(movie);
    }

    //varaible that tracks whether or not the tv show popup is showing
    $scope.showTVPopup = false;
    
    //variable that holds list of tv genres
    $scope.tvGenreList = [{genre:'all',display:'All'},{genre:'scifi',display:'Science Fiction'},{genre:'drama',display:'Drama'},
    {genre:'crime',display:'Crime'},{genre:'fantasy',display:'Fantasy'},{genre:'action',display:'Action'},{genre:'animated',display:'Animated'},
    {genre:'comedy',display:'Comedy'}];
    
    //variable that tracks the minimum rating to filter movies
    $scope.minTVRating = 0;

    //variable that tracks which tv genre tab is selected
    $scope.tvGenre = "all";
    $scope.tvGenreDisplay = "All Shows";

    $scope.tvPageKey = "";

    //array that holds episode rankings for tv shows
    $scope.tvEpisodeRankings = [
    {title:"Black Mirror",
    rankings:[{rank:1,episode:"USS Callister"},{rank:2,episode:"San Junipero"},{rank:3,episode:"The Entire History of You"},{rank:4,episode:"White Christmas"},{rank:5,episode:"Hang the DJ"},
    {rank:6,episode:"Shut Up and Dance"},{rank:7,episode:"Nosedive"},{rank:8,episode:"Crocodile"},{rank:9,episode:"Be Right Back"},{rank:10,episode:"White Bear"},{rank:11,episode:"Metalhead"},{rank:12,episode:"Hated in the Nation"},
    {rank:13,episode:"Arkangel"},{rank:14,episode:"Black Museum"},{rank:15,episode:"The National Anthem"},{rank:16,episode:"Playtest"},{rank:17,episode:"Men Against Fire"},{rank:18,episode:"Fifteen Million Merits"},{rank:19,episode:"Rachel, Jack and Ashley Too"},
    {rank:20,episode:"Smithereens"},{rank:21,episode:"The Waldo Moment"},{rank:22,episode:"Striking Vipers"}]},

    {title:"Love, Death, & Robots",
    rankings:[{rank:1,episode:"Zima Blue"},{rank:2,episode:"Blindspot"},{rank:3,episode:"Good Hunting"},{rank:4,episode:"Sonnie's Edge"},{rank:5,episode:"Sucker of Souls"},{rank:6,episode:"When the Yogurt Took Over"},
    {rank:7,episode:"Suits"},{rank:8,episode:"Lucky 13"},{rank:9,episode:"Helping Hand"},{rank:10,episode:"Three Robots"},{rank:11,episode:"The Witness"},{rank:12,episode:"Beyond the Aquila Rift"},
    {rank:13,episode:"Alternative Histories"},{rank:14,episode:"The Secret War"},{rank:15,episode:"Fish Night"},{rank:16,episode:"Ice Age"},{rank:17,episode:"The Dump"},{rank:18,episode:"Shape-Shifters"}]}];
    
    //array that holds rankings of currently selected tv shows
    $scope.episodeRankList = $scope.tvEpisodeRankings[0].rankings;

    //variable that tracks whether the "Episode Rankings" button has been clicked
    $scope.showEpisodeRankings = false;

    //variable that trackes whether the selected show has rankings for episodes
    $scope.episodesRanked = false;

    //tvFilter is used to determine which movies to show in the ng-repeat
    $scope.tvFilter = function(show) {
        if ($scope.tvGenre == 'all') {
            return ((show.rating >= $scope.minTVRating) &&
            (show.title.toLowerCase().replace(/ /g,'').includes($scope.tvPageKey.toLowerCase().replace(/ /g,''))));
        }
        return (((show.genre == $scope.tvGenre) && (show.rating >= $scope.minTVRating)) &&
        (show.title.toLowerCase().replace(/ /g,'').includes($scope.tvPageKey.toLowerCase().replace(/ /g,''))));
    }

    //getShowInfo takes in a tv show title, calls the movie info API
    //for that title, and sets the popup variables
    $scope.getShowInfo = function(show) {
        if (typeof show.year == 'undefined') {
            show.year = '';
        }
        $http({
            method: 'GET',
            url: "https://www.omdbapi.com/?t=" + show.title + '&y=' + show.year + "&apikey=8f59097f"
        }).then(function success(response) {
            document.getElementById("tvPoster").src = response.data.Poster;
            alert(response.data.Poster);
            $scope.tvTitle = response.data.Title;
            $scope.tvDate = response.data.Year;
            $scope.tvRating = response.data.Rated;
            $scope.tvSeasons = response.data.totalSeasons + " Seasons";
            $scope.tvRuntime = response.data.Runtime;
            $scope.tvIMDBScore = "IMDB: " + response.data.imdbRating;
            $scope.tvPlot = response.data.Plot;
            $scope.showTVPopup = true;
            if ($scope.tvEpisodeRankings.find(
                function(item) {
                    return (item.title == show.title);
                }
            ) == undefined) {
                $scope.episodeRankList = [{rank:0,episode:"Episodes not ranked for this show"}];
                $scope.episodesRanked = false;
            }
            else{
                $scope.episodeRankList = $scope.tvEpisodeRankings.find(
                    function(item) {
                        return (item.title == show.title);
                    }
                ).rankings;
                $scope.episodesRanked = true;
            }
        },
        function error(response){
            alert("error!");
        });
    }

    $scope.getEpisodeRankings = function() {
        $scope.showEpisodeRankings = true;
    }

    $scope.hideEpisodeRankings = function() {
        $scope.showEpisodeRankings = false;
    }

    //hidePopup sets the showPopup variable to false
    $scope.hidePopup = function() {
        $scope.showPopup = false;
    }

    //variable that tracks whether the movie filter popup is showing
    $scope.showMovieFilter = false;

    //toggleMovieFilter toggles the showMovieFilter variable to display/hide the filter popup
    $scope.toggleMovieFilter = function() {
        $scope.showMovieFilter = !($scope.showMovieFilter);
    }

    //selectTVGenre sets the tvGenre variable, displaying that genre content, 
    //and changes the styling of the selected tab
    $scope.selectTVGenre = function(genre, display) {
        $scope.tvGenre = genre;
        $scope.tvGenreDisplay = display + " Shows";
    }

    //toggleTVFilter toggles the showTVFilter variable to display/hide the filter popup
    $scope.toggleTVFilter = function() {
        $scope.showTVFilter = !($scope.showTVFilter);
    }

    //hideTVPopup sets the showTVPopup variable to false
    $scope.hideTVPopup = function() {
        $scope.showTVPopup = false;
        $scope.showEpisodeRankings = false;
    }

    //variable that determines which team tab has been clicked
    $scope.selectedTeam = "eagles";

    //loadEaglesData displays the Eagles page contents
    $scope.loadEaglesData = function() {
        $scope.selectedTeam = "eagles";
    }

    //variable that tracks the stat by which to order the Phillies stat table 
    $scope.eaglesQBTableVar = "+year";

    //setQBTableVar sets the variable that controls how the Eagles QB comparison table
    //is being sorted
    $scope.setQBTableVar = function(tableVar) {
        if ($scope.eaglesQBTableVar == ("-" + tableVar)) {
            $scope.eaglesQBTableVar = "+" + tableVar;
        }
        else {
            $scope.eaglesQBTableVar = "-" + tableVar;
        }
    }

    //array to hold list of QBs to display in comparison table
    $scope.displayQBList = ["Wentz","Foles","Vick","McNabb","Hurts"];

    //filter out QBs whose names are not in the display list (unchecked in dropdown)
    $scope.qbFilter = function(qb) {
        return $scope.displayQBList.includes(qb.last_name);
    }

    //add or remove QB last name from display list when checkbox is clicked
    $scope.filterQB = function(last_name) {
        if ($scope.displayQBList.includes(last_name)) {
            $scope.displayQBList = $scope.displayQBList.filter(function(item){
                return item != last_name;
            })
        }
        else {
            $scope.displayQBList.push(last_name);
        }
    }

    //variable that holds Sixers' record
    $scope.sixersRecord = "43-30";

    //loadSixersData displays the Sixers page contents
    $scope.loadSixersData = function() {
        $scope.selectedTeam = "sixers";
        $scope.initializeSixersDates();
        $scope.loadSixersGames();
        //having problems with asynchronously loading players
        //$scope.loadSixersPlayers();
    }

    //variables to store array of Sixers games and date range
    $scope.sixersGames = [];
    $scope.sixersStartDate = "";
    $scope.sixersEndDate = "";

    //initialize start date for game schedule to today
    $scope.initializeSixersDates = function() {
        var today = new Date();
        var dd1 = String(today.getDate()).padStart(2,"0");
        var mm = String((today.getMonth() + 1)).padStart(2,"0");
        var yyyy = today.getFullYear();
        document.getElementById("sixersStartDate").value = yyyy+"-"+mm+"-"+dd1;
    }

    //loadSixersGames gets the startDate and endDate values from the date inputs and passes
    //those values to the loadSixersGamesByDate function
    $scope.loadSixersGames = function() {
        var startDate = document.getElementById("sixersStartDate").value;
        var endDate = document.getElementById("sixersEndDate").value;
        $scope.loadSixersGamesByDate(startDate, endDate);
    }

    //loadSixersGamesByDate calls the NBA API to get all Sixers games between the startDate
    //and the endDate
    $scope.loadSixersGamesByDate = function(startDate, endDate) {
        if ((startDate != "") && (endDate != "")) {
            $http({
                method: 'GET',
                url: "https://www.balldontlie.io/api/v1/games?team_ids[]=23&start_date=" + startDate + "&end_date=" + endDate + "&per_page=200" 
            }).then(function success(response) {
                $scope.sixersGames = response.data.data;
            },
            function error(response){
                alert("error!");
            });
        }
        else if ((startDate != "") && (endDate == "")) {
            $http({
                method: 'GET',
                url: "https://www.balldontlie.io/api/v1/games?team_ids[]=23&start_date=" + startDate + "&per_page=200" 
            }).then(function success(response) {
                $scope.sixersGames = response.data.data;
            },
            function error(response){
                alert("error!");
            });
        }
        else if ((startDate == "") && (endDate != "")){
            $http({
                method: 'GET',
                url: "https://www.balldontlie.io/api/v1/games?team_ids[]=23&end_date=" + endDate + "&per_page=200" 
            }).then(function success(response) {
                $scope.sixersGames = response.data.data;
            },
            function error(response){
                alert("error!");
            });
        }
        else{
            alert("Please define a range of dates");
        }
    }

    //variable to store array of Sixers players
    $scope.sixersPlayers = [];

    //loadSixersPlayers calls the NBA API to get all players and filters the results
    //to store all sixers players in the sixersPlayers array
    $scope.loadSixersPlayers = function() {
        var page = 0;
        var pageCount = 1;
        while (page < pageCount) {
            page = page + 1;
            try {
                $http({
                    method: 'GET',
                    url: "https://www.balldontlie.io/api/v1/players?page=" + page 
                }).then(function success(response) {
                    $scope.sixersPlayers = response.data.data;
                    alert($scope.sixersPlayers.length);
                    $scope.sixersPlayers.filter(function(item) {
                        return item.team.city == "Philadelphia";
                    });
                    //pageCount = response.meta.total_pages;
                },
                function error(response){
                    alert("error!");
                });
            }
            catch{
                alert("error!");
            }
        }
        alert($scope.sixersPlayers[0].last_name);
    }

    //variable that holds Flyers' record
    $scope.flyersRecord = "41-21";
    
    //loadFlyersData displays the Flyers page contents
    $scope.loadFlyersData = function() {
        $scope.selectedTeam = "flyers";
    }

    //loadPhilliesData calls all functions that make API calls to retrieve
    //mlb data
    $scope.loadPhilliesData = function() {
        $scope.selectedTeam = "phillies";
        $scope.initPhilliesSeasonList();
        $scope.testMLBAPI();
        $scope.testMLBTransactionAPI();
    }

    //empty array to later store all Phillies hitting leaders for ng-repeat
    $scope.philliesLeaders = [];

    //variable that tracks the stat by which to order the Phillies stat table 
    $scope.statTableVar = "-h";

    //setTableVar sets the variable that controls how the Phillies stat table
    //is being sorted
    $scope.setTableVar = function(tableVar) {
        if ($scope.statTableVar == ("-" + tableVar)) {
            $scope.statTableVar = "+" + tableVar;
        }
        else {
            $scope.statTableVar = "-" + tableVar;
        }
    }

    $scope.philliesSeason = 2021;
    $scope.philliesSeasonList = [];
    $scope.initPhilliesSeasonList = function() {
        for(var i = 1900; i < 2022; i++){
            $scope.philliesSeasonList.push(i);
        }
    }

    //testMLBAPI gets the hitting leaders for a certain season and filters
    //that array to contain only Phillies players
    $scope.testMLBAPI = function() {
        $http({
            method: 'GET',
            url: "https://mlb-data.p.rapidapi.com/json/named.leader_hitting_repeater.bam?sort_column=h&season=" + $scope.philliesSeason,
            headers: {
                "rapidapi-key": "d111e2f0d6msh1f805bf26cac48bp13c744jsn26bf5382001c"
            }
        }).then(function success(response) {
            var playerList = response.data.leader_hitting_repeater.leader_hitting_mux.queryResults.row;
            var philliesList = playerList.filter(function(item) {
                return item.team_brief == "Phillies";
            });
            $scope.philliesLeaders = philliesList;
            for (var i = 0; i < $scope.philliesLeaders.length; i++) {
                $scope.philliesLeaders[i].h = parseFloat($scope.philliesLeaders[i].h);
                $scope.philliesLeaders[i].ab = parseFloat($scope.philliesLeaders[i].ab);
                $scope.philliesLeaders[i].hr = parseFloat($scope.philliesLeaders[i].hr);
                $scope.philliesLeaders[i].rbi = parseFloat($scope.philliesLeaders[i].rbi);
                $scope.philliesLeaders[i].obp = parseFloat($scope.philliesLeaders[i].obp);
                $scope.philliesLeaders[i].slg = parseFloat($scope.philliesLeaders[i].slg);
                $scope.philliesLeaders[i].so = parseFloat($scope.philliesLeaders[i].so);
                $scope.philliesLeaders[i].bb = parseFloat($scope.philliesLeaders[i].bb);
            }
        },
        function error(response){
            alert("error!");
        });
    }

    //empty array to later store all Phillies transactions for ng-repeat
    $scope.philliesTransactions = [];

    //testMLBTransactionAPI gets all mlb transactions for a certain date range and filters
    //that array to contain only Phillies transactions
    $scope.testMLBTransactionAPI = function () {
        var dateObj = new Date();
        var month = String("0" + (dateObj.getMonth() + 1)).slice(-2);
        var monthPrev = String("0" + dateObj.getMonth()).slice(-2);
        var day = String("0" + dateObj.getDate()).slice(-2);
        var year = String(dateObj.getFullYear());
        var currDate = year+month+day;
        var prevDate = year+monthPrev+day;
        $http({
            method: 'GET',
            //url: "https://mlb-data.p.rapidapi.com/json/named.transaction_all.bam?start_date=20200401&end_date=2020105&sport_id=1",
            url: "https://mlb-data.p.rapidapi.com/json/named.transaction_all.bam?start_date=" + prevDate + "&end_date=" + currDate + "&sport_id=1",
            headers: {
                "rapidapi-key": "d111e2f0d6msh1f805bf26cac48bp13c744jsn26bf5382001c"
            }
        }).then(function success(response) {
            var transactionList = response.data.transaction_all.queryResults.row;
            var philliesList = transactionList.filter(function(item) {
                return item.team == "Philadelphia Phillies";
            });
            $scope.philliesTransactions = philliesList;
            for (var i = 0; i < $scope.philliesTransactions.length; i++) {
                $scope.philliesTransactions[i].trans_date = $scope.philliesTransactions[i].trans_date.slice(0,-9)
            }
        },
        function error(response){
            alert("error!");
        });
    }
    
    //array that holds every dnd type (api endpoint)
    $scope.dndTypeArray = ['Spells','Monsters',
    'Sections','Conditions','Races','Classes','Magicitems','Weapons'];

    //variable that holds the currenty 'type' of dnd page
    $scope.dndPage = "";

    //variable that holds the search key for the dnd results
    $scope.dndPageKey = "";

    //variable that holds the list of results from the dnd api
    $scope.dndList = [];

    //variable that holds the selected dnd page
    $scope.selectedDnd = "reference";

    //clearDndList sets the $scope.dndList to an empty array
    $scope.clearDndList = function() {
        $scope.dndList = [];
    }

    //selectDndPage changes the dnd page that is shown based on the dropdown tab
    //that is clicked
    $scope.selectDndPage = function(pageName) {
        $scope.selectedDnd = pageName;
    }

    //getAllDndResults puts all of the results from an endpoint of the dnd api
    //into a list
    $scope.getAllDndResults = function(page) {
        $http({
            method: 'GET',
            url: "https://api.open5e.com/" + $scope.dndPage.toLowerCase() + "/?page=" + page
        }).then(function success(response) {
            $scope.dndList.push(...response.data.results);
            if (response.data.next != null) {
                $scope.getAllDndResults((page + 1));
            }
        },
        function error(response){
            alert("Gone through all pages");
        });
    }

    //dndListFilter is used to determine which dnd results to show in the ng-repeat
    //based on the value of the search bar
    $scope.dndListFilter = function(item) {
        return (item.name.toLowerCase().replace(/ /g,'').includes($scope.dndPageKey.toLowerCase().replace(/ /g,'')));
    }

    $scope.showDndPopup = false;

    $scope.toggleDndPopup = function() {
        $scope.showDndPopup = (!$scope.showDndPopup);
    }

    //array that holds all dnd campaign information
    $scope.dndCampaigns = [{title:"Princes of the Apocalypes",character:"Thokk",date:"9/7/19 - 5/24/20",desc:"Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms.",imageSrc:"princes.jpg"},
    {title:"Tomb of Annihilation",character:"Chant Moonridge",date:"9/3/20 - ",desc:"The talk of the streets and taverns has all been about the so-called death curse: a wasting disease afflicting everyone who's ever been raised from the dead. Victims grow thinner and weaker each day, slowly but steadily sliding toward the death they once denied. When they finally succumb, they can't be raised, and neither can anyone else, regardless of whether they've ever received that miracle in the past. Temples and scholars of divine magic are at a loss to explain a curse that has affected the entire region, and possibly the entire world. The cause is a necromantic artifact called the Soulmonger, which is located somewhere in Chult, a mysterious peninsula far to the south, ringed with mountains and choked with rainforests.",imageSrc:"tomb.jpg"},
    {title:"Descent into Avernus",character:"Quave Zauvirr",date:"11/15/20 - ",desc:"Welcome to Baldur's Gate, a city of ambition and corruption. You've just started your adventuring career, but already find yourself embroiled in a plot that sprawls from the shadows of Baldur's Gate to the front lines of the planes-spanning Blood War! Do you have what it takes to turn infernal war machines and nefarious contracts against the archdevil Zariel and her diabolical hordes? And can you ever hope to find your way home safely when pitted against the infinite evils of the Nine Hells?",imageSrc:"descent.jpg"}];

    //selectCampaign updates the variables displayed on the campaigns page to display
    //the information for the selected campaign
    $scope.selectCampaign = function(campaign) {
        $scope.selectedCampaignTitle = campaign.title;
        $scope.selectedCampaignCharacter = campaign.character;
        $scope.selectedCampaignDate = campaign.date;
        $scope.selectedCampaignDesc = campaign.desc;
        document.getElementById("campaignPicture").src = campaign.imageSrc;
    }

    //initialize to display infor for first campaign in array (Princes of the Apocalypes)
    $scope.selectCampaign($scope.dndCampaigns[0]);

    //change to characters page and call function to load info for whichever
    //character's name was clicked
    $scope.gotoDndCharacter = function(name) {
        $scope.selectedDnd = "characters";
        $scope.selectCharacter($scope.dndCharacters.find(
            function(character) {
                return (character.name == name);
            }
        ));
    }

    //array that holds all dnd character information
    $scope.dndCharacters = [{name:"Thokk",race:"Half-Orc",class:"Barbarian",subclass:"Storm Herald",background:"Criminal",alignment:"Chaotic Neutral",
    personality:"I don't pay attention to the risks in a situation. Never tell me the odds",ideals:"Freedom - chains are meant to be broken, as are those who would forge them.",bond:"I will become the greatest thief that ever lived.",flaws:"When I see something valuable, I won't think twice about anything but how to steal it.",
    desc:"Thokk is the greatest thief the world has ever known! Once just a lowly barbarian, he now lives as lord of Feathergail Spire (renamed to Dwayne 'The Thokk' Johnson). After finishing a tumultuous year, which started with the goal of stealing some valuable books (which Thokk succeeded in doing, as he always does) and ended with the killing of Imix the Eternal Flame, Thokk returned to Feathergail Spire to propose to Savra Belabranta and create his own thieves guild. Thokk now lives comfortably with his wife and his best friend, an ancient Lich, and he has become a legend for his part in preventing the apocalypse. His deeds included, but were not limited to, becoming a werewolf and wreaking havoc on a cultist lair; slaying the leader of the Cult of the Howling Hatred, Aerisi Kalinoth, to become the wielder of Windvane; killing knights of elemental fire, air, and water; and saving his companions Garrut, Veit Fireforge, and, reluctantly Wellby Tosscobble.", imageSrc:"thokk.jpg"},
    {name:"Quave Zauvirr",race:"Drow",class:"Ranger",subclass:"Gloom Stalker",background:"Noble",alignment:"Lawful Neutral",
    personality:"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",ideals:"Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",bond:"I will face any challenge to win the approval of my family.",flaws:"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
    desc:"Quave grew up as the youngest child in a very toxic family environment. He is a loner, without any friends outside of the family. His father mysteriously disappeared when Quave was young. As a child, Quave would frequently escape his bad home situation by disappearing to the Underdark to hunt. He became a hunter to feel some sort of power and to gain skills necessary to become useful to the family. Quave has only experienced any sort of respect when performing tasks for the family and knows no other form of affection, so he has committed to serving the family to earn the respect of the Matron Mother.",imageSrc:"quave.jpg"},
    {name:"Chant Moonridge",race:"Tiefling",class:"Fatebender",subclass:"Mascot",background:"Athlete",alignment:"Chaotic Good",
    personality:"I love to trade friendly banter and gibes.",ideals:"Winning. I will do whatever it takes to win, even if that means cheating",bond:"I strive to inspire my spectators by having fun while winning.",flaws:"I am overly confident because everything always seems to work out for me.",
    desc:"Chant was a talented athlete as a child, but not spectacular. He dreamed of winning competitions and inspiring the cheering crowds. His favorite sport was always goatball (like rugby but with fewer rules and a ball made from goatskin). There are not many famous tiefling athletes, as most beings do not trust or like tieflings, but there was one very famous and adored tiefling athlete named Thydos Brightwater, one of the best goatball players in the land. When Chant was young, he begged Thydos to train him and even waited outside of his house for days. Eventually Thydos agreed to train Chant and revealed that he was actually a fatebender. While Thydos was still an impressive athlete, his fatebending abilities gave him an unstoppable competitive edge. Thydos trained with Chant for years, and Chant became both a much more gifted athlete and a fatebender. Years later Thydos decided to retire and introduced his teammates to his protege, who joined the team to take Thydos's place. With Chant's combination of athletic prowess and the ability to twist fate, he quickly became one of the greatest goatball players in the land, known for his playful banter with opposing teams and his ability to charm the crowd. Thydos eventually died and was resurrected, so Chant offered assistance to rid the world of the curse that prevents resurrection.",imageSrc:"chant.jpg"},
    {name:"Dario Steele",race:"Human",class:"Fighter",subclass:"Gunslinger",background:"Detective",alignment:"Neutral",
    personality:"I am very stern with and distrustful of all people involved in whatever case I'm investigating.",ideals:"Justice - I want my own idea of the law to triumph.",bond:"I can't turn down a case.",flaws:"I refuse to accept supernatural explanations to my cases.",
    desc:"Dario Steele has always been somewhat of an outsider. As a youth, he never seemed to get along with anyone else his age and spent most of his time with his father, Dane. Dane was a private detective who investigated violent crimes for anyone who could pay, but he was murdered during one of his investigations right in front of Dario. Dario saw the killer's face, and was even able to identify him to local authorities. But the man claimed he had also witnessed the murder, and it was a lich that killed Dane. He claimed that Dario was just a boy and was confused by what he had witnessed. Based on the marks on Dane's body, the authorities had to agree, and the real murderer was let go. Ever since, Dario has had not only a hunger for revenge, but also a strong disbelief in anything supernatural. He took up his father's private detective practice and has solved a variety of supernatural-seeming murders which turned out to just be clever humans, but not clever enough. One day, he was investigating the slums of the city, as there had been a string of murders, similar to his father's, when he came across Cadogan Kane. Kane also seemed like an outsider, and for the first time since his father died, Dario found someone who he didn't mind spending time with. The two formed a partnership, solving violent murders for pay while pursuing the lich-imitating murderer.",imageSrc:"dario.jpg"},
    {name:"Theren Astorio",race:"Half-Elf",class:"Paladin",subclass:"Oath of Devotion",background:"Acolyte",alignment:"Lawful Good",
    personality:"Nothing can shake my undying faith.",ideals:"Faith - I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)",bond:"I will do anything to protect the temple where I served.",flaws:"I am inflexible in my thinking.",
    desc:"Theren is a servant of Bhamut, the god of life, order, and war. Bhamut teaches that one should smite evil and show compassion to the righteous, and this is the teaching by which Theren lives his life. Theren was abandoned by his elf father at birth and raised by his human mother, whose last name he bears. Theren's mother was killed by goblin bandits when he was a child, and as a result, Theren was adopted and raised by the church of Bhamut. He was taught to be strong and to enforce the laws of his religion, and from a young age his combat capabilities were recognized. Theren became a knight of the church, and his mission became to smite evil and spread order. He recognizes no empire or government, only the law of Bhamut.",imageSrc:"theren.png"}];

    //selectCharacter updates the variables displayed on the characters page to display
    //the information for the selected character
    $scope.selectCharacter = function(character) {
        $scope.selectedCharacterName = character.name;
        $scope.selectedCharacterRace = character.race;
        $scope.selectedCharacterClass = character.subclass + " - " + character.class;
        $scope.selectedCharacterBackground = character.background;
        $scope.selectedCharacterAlignment = character.alignment;
        $scope.selectedCharacterPersonality = character.personality;
        $scope.selectedCharacterIdeals = character.ideals;
        $scope.selectedCharacterBond = character.bond;
        $scope.selectedCharacterFlaws = character.flaws;
        $scope.selectedCharacterDesc = character.desc;
        document.getElementById("characterPicture").src = character.imageSrc;
    }

    //initialize selected character Thokk
    $scope.selectCharacter($scope.dndCharacters[0]);

    //array to hold translation table for text to morse code
    $scope.morseCodeTable = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",
    h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",
    q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:"-..-",x:"-..-",y:"-.--",
    z:"--..",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",
    9:"----.",0:"-----",".":".-.-.-",",":"--..--","?":"..--.."," ":"/"};

    //translateMorseCode loops through the characters in the english text box and
    //converts each one to morse code using the translation table
    $scope.translateMorseCode = function() {
        //alert($scope.morseCodeEnglish);
        var english = $scope.morseCodeEnglish.toLowerCase();
        var translated = "";
        for (var i = 0; i < english.length; i++) {
            translated += $scope.morseCodeTable[english[i]] + " ";
        }
        document.getElementById("morseCodeTranslated").innerHTML = translated;
    }
    
    $scope.cities = [{name:"Wilmington, DE", lonlat:[-75.55,39.74]},{name:"Cambridge, MA", lonlat:[-71.11,42.37]},
    {name:"Nashville, TN", lonlat:[-86.78, 36.16]}];

    //initMap creates the map and all of the points
    $scope.initMap = function() {
        var map = new ol.Map({
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([-71.11, 42.37]),
              zoom: 4
            })
          });
        /*for (var i = 0; i < $scope.cities.length; i++) {
            var layer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [
                        new ol.Feature({
                            geometry: new ol.geom.Point(ol.proj.fromLonLat($scope.cities[i].lonlat))
                        })
                    ]
                })
            })
        }*/
        var layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        //Cambridge, MA (college and post-grad)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-71.11, 42.37]))
                    }),
                    new ol.Feature({
                        //Wilmington, DE (born and raised)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-75.55, 39.74]))
                    }),
                    new ol.Feature({
                        //Nashville, TN (Vanderbilt University Medical Center for ISC work)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-86.78, 36.16]))
                    }),
                    new ol.Feature({
                        //Maui, HI (McCaffrey's house 2005 and 2015)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-156.33, 20.80]))
                    }),
                    new ol.Feature({
                        //Costa Rica (WFS Service trip)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-83.75, 9.75]))
                    }),
                    new ol.Feature({
                        //Domincan Republic (WFS service trip)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-70.16, 18.74]))
                    }),
                    new ol.Feature({
                        //Montreal, CA (Rugby trip and vacation with Rachel)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.57, 45.50]))
                    }),
                    new ol.Feature({
                        //Aruba (Senior year college spring break)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-69.97, 12.52]))
                    }),
                    new ol.Feature({
                        //St. Louis, MO (Mercy Health for ISC work)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-90.20, 38.63]))
                    }),
                    new ol.Feature({
                        //San Francisco, CA (McCaffrey's house)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-122.42, 37.77]))
                    }),
                    new ol.Feature({
                        //San Diego, CA (Rady's Childrens Hospital for ISC Work)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-117.16, 32.72]))
                    }),
                    new ol.Feature({
                        //Seattle, WA (Rachel's house)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-122.33, 47.61]))
                    }),
                    new ol.Feature({
                        //Sandpoint, ID (Rachel's skiing condo)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-116.62, 48.39]))
                    }),
                    new ol.Feature({
                        //Houston, TX (Carol and Caitlin's old house)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-95.37, 29.76]))
                    }),
                    new ol.Feature({
                        //Denver, CO (NSCRO national championship)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-104.99, 39.74]))
                    }),
                    new ol.Feature({
                        //Minneapolis, MN (Super Bowl LII and Brian's Vikings game)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-93.27, 44.98]))
                    }),
                    new ol.Feature({
                        //Outer Banks, NC (Senior week after high school)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-75.47, 35.56]))
                    }),
                    new ol.Feature({
                        //Cleveland, OH (Cam's house)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-81.69, 41.50]))
                    }),
                    new ol.Feature({
                        //New York, NY (Sam's apartment, college spring break freshman and sophomore year, and more)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-74.01, 40.71]))
                    }),
                    new ol.Feature({
                        //Clemson, SC (Visiting Sam in college)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-82.84, 34.68]))
                    }),
                    new ol.Feature({
                        //Charleston, SC (Jake's house)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-79.93, 32.78]))
                    }),
                    new ol.Feature({
                        //Fairfield, CT (Rugby games and Jake's old house)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.26, 41.14]))
                    }),
                    new ol.Feature({
                        //Orono, ME (Rugby playoffs freshman year)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-68.67, 44.88]))
                    }),
                    new ol.Feature({
                        //South Kingstown, RI (University of Rhode Island rugby game)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-71.52, 41.45]))
                    }),
                    new ol.Feature({
                        //Washington DC (JC in congress, Cam and Gil's apartments for NYE 2019/2020)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-77.04, 38.91]))
                    }),
                    new ol.Feature({
                        //Baltimore, MD (ESPN Zone and aquarium)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-76.61, 39.29]))
                    }),
                    new ol.Feature({
                        //Puerto Rico (8th grade WFS service trip)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-66.59, 18.22]))
                    }),
                    new ol.Feature({
                        //Bakersfield, VT (Air B&B with Zach, Mal, and Sinclair)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-72.80, 44.78]))
                    }),
                    new ol.Feature({
                        //West Dover, VT (Mount Snow with Jake, Scott, Morgan, Merch, Tim, etc.)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-72.92, 42.96]))
                    }),
                    new ol.Feature({
                        //Ocean City, NJ (Pink House)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-74.57, 39.28]))
                    }),
                    new ol.Feature({
                        //Pittburgh, PA (Carnegie Mellon)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-80.00, 40.44]))
                    }),
                    new ol.Feature({
                        //Sioux Falls, SD (ISC Work Trip)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-96.73, 43.55]))
                    }),
                    new ol.Feature({
                        //Philadelphia, PA (Philly sports and many times)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-75.17, 39.95]))
                    }),
                    new ol.Feature({
                        //Chapel Hill, NC (Sam college visits)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-79.06, 35.91]))
                    }),
                    new ol.Feature({
                        //Wilmington, NC (First ISC Work Trip)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-77.89, 34.21]))
                    }),
                    new ol.Feature({
                        //Stamford, CT (Rosen household)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.54, 41.05]))
                    }),
                    new ol.Feature({
                        //Cape Cod, MA (Rugby friends trip after graduation)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-70.30, 41.67]))
                    }),
                    new ol.Feature({
                        //Columbus, OH (OSU with Cam, Sam, Dana, and Dan)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-83.00, 39.96]))
                    }),
                    new ol.Feature({
                        //Dover, DE (Governor's Mansion)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-75.52, 39.16]))
                    }),
                    new ol.Feature({
                        //Atlantic City, NJ (Night at the Casino)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-74.42, 39.36]))
                    }),
                    new ol.Feature({
                        //Syracuse, NY (Rugby game vs Ithaca)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-76.15, 43.05]))
                    }),
                    new ol.Feature({
                        //New Haven, CT (Yale Art Museum with Isaac)
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([-72.93, 41.31]))
                    }),
                ]
            })
        });
        map.addLayer(layer);
    }

    //initialize map when page is first opened
    //$scope.initMap();


    //array holds all professional skills
    $scope.profSkills = ["Object-Oriented Programming","Full-Stack Application Development","Web Programming","Technical Writing","Technical Sales",
    "Healthcare Protocols","Public Speaking"];

    //array holds all programming languages and technology proficiencies 
    $scope.progLanguages = ["JavaScript","C++","HTML","CSS","Java","C","ObjectScript","SQL","JSON","XML","Angular","InterSystems Products","Command Line Interface"];

    //array of professional experience objects
    $scope.profExperience = [{title:"Sales Engineer",company:"InterSystems Corporation",date:"July 2019 - Present",desc:["I work with clinical software development and healthcare organizations in the U.S. to expand use and understanding of InterSystems' technologies in the areas of clinical data aggregation and exchange, analytics, artificial intelligence, and machine learning.",
    "I provide guidance, mentoring, and support to many InterSystems' healthcare clients including Vanderbilt University Medical Center, Rhodes Group, and Atlantic Health.",
    "My primary responsibilities include: Recommending technical application, integration, database, and deployment architectures; Designing, building, and presenting Proofs of Concept (PoCs) to prospects and partners; Building and delivering targeted technical sales presentations and demonstrations; Coordinating with InterSystems' Account Representatives and all other departments to ensure a close, long-term relationship with our clients.",
    "All of my responsibilities relate to helping our clients solve their business, clinical, and analytics challenges."]},
    {title:"Sales Engineering Intern",company:"InterSystems Corporation",date:"May 2017 - August 2018",desc:["I designed and built Angular web applications which utilized InterSystems Natural Language Processing to enhance the experience of a clinician viewing a patient's medical records.",
    "I presented and demonstrated the applications I built to an audience of InterSystems employees at the conclusion of each internship."]}];

    //array of project objects
    $scope.projectList = [{title:"Intelligent Chart Review",company:"InterSystems",desc:"I designed and built an Angular web application that utilizes InterSystems Natural Language Processing to analyze and report on both the structured and unstructured data within a patient's medical record.",imageSrc:"icr.png"},
    {title:"Autonomously Docking Rover",company:"Terrafugia",desc:"Terrafugia required a way to perform the docking process between rover and the flying vehicle for the TF-2 in an automatic, repeatable, and efficient manner without GPS. With a team of two electrical engineering students and two computer science students (including myself), we built a rover with a robust sensor package and implemented a program to maneuver the rover autonomously to its docking station.",imageSrc:"tf2.jpg"}];

    //resumeScroll scrolls the window to whatever is clicked in the navigation
    $scope.resumeScroll = function(targetDiv) {
        document.getElementById(targetDiv).scrollIntoView();
    }

    //on scroll call the homeScroll function
    window.addEventListener('scroll', function() {
        $scope.homeScroll();
    }, false);

    //homeScroll changes which navigation circle is filled in depending on where the page
    //is scrolled to
    $scope.homeScroll = function() {
        if (window.scrollY < 600) {
            document.getElementById("aboutCircle").style.background = "#000000";
            document.getElementById("profExpCircle").style.background = "";
            document.getElementById("skillsCircle").style.background = "";
            document.getElementById("projectsCircle").style.background = "";
        }
        else if (window.scrollY > 600 && window.scrollY < 1400) {
            document.getElementById("aboutCircle").style.background = "";
            document.getElementById("profExpCircle").style.background = "#000000";
            document.getElementById("skillsCircle").style.background = "";
            document.getElementById("projectsCircle").style.background = "";
        }
        else if (window.scrollY > 1400 && window.scrollY < 2100) {
            document.getElementById("aboutCircle").style.background = "";
            document.getElementById("profExpCircle").style.background = "";
            document.getElementById("skillsCircle").style.background = "#000000";
            document.getElementById("projectsCircle").style.background = "";
        }
        else if (window.scrollY > 2100) {
            document.getElementById("aboutCircle").style.background = "";
            document.getElementById("profExpCircle").style.background = "";
            document.getElementById("skillsCircle").style.background = "";
            document.getElementById("projectsCircle").style.background = "#000000";
        }
    }

    var url = window.location.href;
    $scope.loadURLPage = function() {
        if(url.search('home') > 0) {
            $scope.loadContent("home");
        }
        else if(url.search('movies') > 0) {
            $scope.loadContent("movies");
        }
        else if(url.search('shows') > 0) {
            $scope.loadContent("shows");
        }
        else if(url.search('sports') > 0) {
            $scope.loadContent("sports");
        }
        else if(url.search('dnd') > 0) {
            $scope.loadContent("dnd");
        }
        else if(url.search('travel') > 0) {
            $scope.loadContent("travel");
        }
        else if(url.search('tools') > 0) {
            $scope.loadContent("tools");
        }
    }

    $scope.loadURLPage();
});
/*create directive - must use camel case when defining and use dashes
with all lowercase in the html*/
app.directive("testDirective", function() {
    return {
        template : "<p>Test directive constructor<p>"
    };
});