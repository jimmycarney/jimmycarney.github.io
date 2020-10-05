/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";*/
    //$scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}];

    $scope.moviesList=[{title:'The Departed',genre:'crime',rating:99,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'},{title:'Ex Machina',genre:'scifi',rating:99,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg'},{title:'The Social Network',genre:'drama',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Fight Club',genre:'thriller',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Good Will Hunting',genre:'drama',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Dead Poets Society',genre:'drama',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Terminator 2',genre:'scifi',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'The Empire Strikes Back',genre:'scifi',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Return of the King',genre:'fantasy',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Nightcrawler',genre:'thriller',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Goodfellas',genre:'crime',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Shape of Water',genre:'unique',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg'},{title:'Moon',genre:'scifi',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_SX300.jpg'},{title:'The Godfather Part II',genre:'crime',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Blade Runner',genre:'scifi',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Memento',genre:'thriller',rating:95,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Birdman or (the Unexpected Virtue of Ignorance)',genre:'drama',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg'},{title:'Spotlight',genre:'drama',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg'},{title:'Hell or High Water',genre:'crime',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_SX300.jpg'},
    {title:'The Silence of the Lambs',genre:'thriller',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Rocky',genre:'drama',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg'},{title:'A Clockwork Orange',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg'},{title:'Children of Men',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ5NTI2NTI4NF5BMl5BanBnXkFtZTcwNjk2NDA2OQ@@._V1_SX300.jpg'},
    {title:'Arrival',genre:'scifi',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg'},{title:'Moonlight',genre:'drama',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg'},{title:'The Shining',genre:'thriller',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'The Godfather',genre:'crime',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Dark Knight',genre:'superhero',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'},{title:'The Prestige',genre:'thriller',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg'},{title:'The Terminator',genre:'scifi',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Her',genre:'scifi',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg'},{title:'Alien',genre:'scifi',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpghttps://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_SX300.jpg'},
    {title:'Spider-Man: Into the Spider-Verse',genre:'superhero',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg'},{title:'Die Hard',genre:'action',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Interstellar',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Up in the Air',genre:'drama',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_SX300.jpg'},{title:'Snowpiercer',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_SX300.jpg'},
    {title:'The Farewell',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg'},{title:'12 Monkeys',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Black Panther',genre:'superhero',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg'},{title:'Lady Bird',genre:'drama',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Scarface',genre:'crime',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'The Martian',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg'},{title:'Blade Runner: 2049',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'},{title:'Mad Max: Fury Road',genre:'scifi',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Nice Guys',genre:'crime',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},{title:'Argo',genre:'drama',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {title:'WALL-E',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg'},{title:'Get Out',genre:'thriller',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg'},{title:'There Will Be Blood',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg'},{title:'BlacKkKlansman',genre:'drama',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg'},{title:'Gladiator',genre:'action',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'Perks of Being a Wallflower',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZThjMmQ5YjktMTUyMC00MjljLWJmMTAtOWIzNDIzY2VhNzQ0XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg'},{title:'Ready Player One',genre:'scifi',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg'},{title:'Se7en',genre:'thriller',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Inception',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'},
    {title:'The Town',genre:'crime',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTcyNzcxODg3Nl5BMl5BanBnXkFtZTcwMTUyNjQ3Mw@@._V1_SX300.jpg'},{title:'The Shawshank Redemption',genre:'drama',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Starship Troopers',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWExNzg3MmMtYjc3MS00MzFlLWJiOWQtNWYxZTgxNjhlZTQ2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Hurt Locker',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Peanut Butter Falcon',genre:'drama',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWVmZGQ0MGYtMDI1Yy00MDkxLWJiYjQtMmZjZmQ0NDFmMDRhXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg'},{title:'The Sixth Sense',genre:'thriller',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg'},{title:'Taxi Driver',genre:'drama',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Matrix',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {title:'Casino Royale',genre:'action',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Jurassic Park',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg'},{title:'Mission: Impossible - Fallout',genre:'action',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg'},{title:'Minority Report',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {title:'Us',genre:'thriller',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg'},{title:'Moneyball',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg'},{title:'Pulp Fiction',genre:'unique',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Source Code',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_SX300.jpg'},
    {title:'Knives Out',genre:'crime',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg'},{title:'Sorry to Bother You',genre:'unique',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjgwMmI4YzUtZGI2Mi00M2MwLWIyMmMtZWYzMWZmNzAyNmYwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Thor: Ragnarok',genre:'superhero',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg'},{title:'Being John Malkovich',genre:'unique',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmUxY2MyOTQtYjRlMi00ZWEwLTkzODctZDMxNDcyNTFhYjNjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
    {title:'District 9',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:'Captain America: Civil War',genre:'superhero',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'},{title:'Avengers: Infinity War',genre:'superhero',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'},{title:'Ford v Ferrari',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg'},
    {title:'Once Upon a Time...In Hollywood',genre:'drama',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},{title:'Inglorious Bastards',genre:'action',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzRmZmJiODktMTVlMC00YzQ4LTkyYmMtYTAwODdmOTFlODNmL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg'},{title:'Django Unchained',genre:'action',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg'},{title:'Dallas Buyers Club',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg'},
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
    {title:'The Truman Show',genre:'drama',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},{title:'The Gift',genre:'thriller',rating:77,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQzMjM2NjM1Nl5BMl5BanBnXkFtZTgwMDM1MjQyNTE@._V1_SX300.jpg'},{title:'Requiem for a Dream',genre:'drama',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Under the Skin',genre:'scifi',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTU1MDEwMDg4Nl5BMl5BanBnXkFtZTgwOTk3NTcxMTE@._V1_SX300.jpg'},{title:'Braveheart',genre:'action',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'The Fifth Element',genre:'scifi',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg'},{title:'Independence Day',genre:'scifi',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'War of the Worlds',genre:'scifi',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg'},{title:'Men in Black',genre:'scifi',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Anchorman: The Legend of Ron Burgundy',genre:'comedy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_SX300.jpg'},
    {title:'Step Brothers',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Hateful Eight',genre:'action',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg'},{title:'Office Space',genre:'comedy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_SX300.jpg'},{title:'2001: A Space Odyssey',genre:'scifi',rating:94,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}];

    //variables that track which tab is selected
    $scope.home = true;
    $scope.movies = false;
    $scope.sports = false;

    //loadContent takes in a tab name and displays that tab content
    //while hiding all other content, and changes the styling of the selected tab
    $scope.loadContent = function(tabName) {
        document.getElementById('homeTab').style.background = "";
        document.getElementById('moviesTab').style.background = "";
        document.getElementById('sportsTab').style.background = "";
        document.getElementById(tabName + 'Tab').style.background = "#495469";
        if (tabName == 'home') {
            $scope.home = true;
            $scope.movies = false;
            $scope.sports = false;
        }
        else if (tabName == 'movies') {
            $scope.home = false;
            $scope.movies = true;
            $scope.sports = false;
        }
        else{
            $scope.home = false;
            $scope.movies = false;
            $scope.sports = true;
        }
    }

    //variable that tracks which movie genre tab is selected
    $scope.movieGenre = "all";

    //variable that tracks if a genre has been selected
    $scope.genreFilter = false;

    //selectGenre sets the movieGenre variable, displaying that genre content, 
    //and changes the styling of the selected tab
    $scope.selectGenre = function(genre) {
        if (genre == 'all') {
            $scope.genreFilter = false;
        }
        else{
            $scope.genreFilter = true;
        }
        $scope.movieGenre = genre;
        document.getElementById('allTab').style.background = "";
        document.getElementById('scifiTab').style.background = "";
        document.getElementById('dramaTab').style.background = "";
        document.getElementById('thrillerTab').style.background = "";
        document.getElementById('crimeTab').style.background = "";
        document.getElementById('uniqueTab').style.background = "";
        document.getElementById('superheroTab').style.background = "";
        document.getElementById(genre + 'Tab').style.background = "#495469";
    }

    //variable that tracks whether or not the movie popup is showing
    $scope.showPopup = false;

    //testMovieAPI takes in a movie title, calls the movie info API
    //for that title, and sets the popup variables
    $scope.testMovieAPI = function(title) {
        $http({
            method: 'GET',
            url: "https://www.omdbapi.com/?t=" + title + "&apikey=8f59097f"
        }).then(function success(response) {
            document.getElementById("moviePoster").src = response.data.Poster;
            //alert(response.data.Poster);
            $scope.movieTitle = response.data.Title;
            $scope.movieRating = response.data.Rated;
            $scope.movieRuntime = response.data.Runtime;
            $scope.movieRTScore = "Rotten Tomatoes: " + response.data.Ratings[1].Value;
            $scope.movieIMDBScore = "IMDB: " + response.data.imdbRating;
            $scope.movieMetaScore = "Metacritic: " + response.data.Metascore + "%";
            $scope.moviePlot = response.data.Plot;
            $scope.showPopup = true;
        },
        function error(response){
            alert("error!");
        });
    }


    //Below function was not working as intended, decided to manually add image links
    //to moviesList

    //loadMoviePosters calls the movie API for each movive in the moviesList array
    //and sets the imageSrc field to the Poster link returned
    /*$scope.loadMoviePosters = function(){
        for(var i = 0; i < $scope.moviesList.length; i++) {
            var movie = $scope.moviesList[i];
            $http({
                method: 'GET',
                url: "https://www.omdbapi.com/?t=" + movie.title + "&apikey=8f59097f"
            }).then(function success(response) {
                if (response.data.Poster != "N/A") {
                    movie.imageSrc = response.data.Poster;
                }
                else {
                    movie.imageSrc = '';
                }
                $scope.moviesList[i] = movie;
            },
            function error(response) {
                //do nothing
            })
        }
    }
    
    //initially load all image links into the movieLists JSON array
    //$scope.loadMoviePosters();*/

    //hidePopup sets the showPopup variable to false
    $scope.hidePopup = function() {
        $scope.showPopup = false;
    }

    $scope.selectedTeam = "eagles";

    $scope.loadEaglesData = function() {
        $scope.selectedTeam = "eagles";
    }

    $scope.loadSixersData = function() {
        $scope.selectedTeam = "sixers";
    }

    $scope.loadFlyersData = function() {
        $scope.selectedTeam = "flyers";
    }

    //loadPhilliesData calls all functions that make API calls to retrieve
    //mlb data
    $scope.loadPhilliesData = function() {
        $scope.selectedTeam = "phillies";
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

    //testMLBAPI gets the hitting leaders for a certain season and filters
    //that array to contain only Phillies players
    $scope.testMLBAPI = function() {
        $http({
            method: 'GET',
            url: "https://mlb-data.p.rapidapi.com/json/named.leader_hitting_repeater.bam?sort_column=h&season=2020",
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
        $http({
            method: 'GET',
            url: "https://mlb-data.p.rapidapi.com/json/named.transaction_all.bam?start_date=20200401&end_date=20201001&sport_id=1",
            headers: {
                "rapidapi-key": "d111e2f0d6msh1f805bf26cac48bp13c744jsn26bf5382001c"
            }
        }).then(function success(response) {
            var transactionList = response.data.transaction_all.queryResults.row;
            var philliesList = transactionList.filter(function(item) {
                return item.team == "Philadelphia Phillies";
            });
            $scope.philliesTransactions = philliesList;
        },
        function error(response){
            alert("error!");
        });
    }

});
/*create directive - must use camel case when defining and use dashes
with all lowercase in the html*/
app.directive("testDirective", function() {
    return {
        template : "<p>Test directive constructor<p>"
    };
});