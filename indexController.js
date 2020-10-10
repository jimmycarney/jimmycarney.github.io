/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";*/
    //$scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}];

    //JSON object containing all movie names, genres, ratings, and image links
    $scope.moviesList=[{title:'The Departed',genre:'crime',rating:99,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'},{title:'Ex Machina',genre:'scifi',rating:99,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg'},{title:'The Social Network',genre:'drama',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Fight Club',genre:'thriller',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {title:'Good Will Hunting',genre:'drama',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Dead Poets Society',genre:'drama',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Terminator 2',genre:'scifi',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Star Wars: Episode V - The Empire Strikes Back',genre:'scifi',rating:96,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Return of the King',genre:'fantasy',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
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
    {title:'Step Brothers',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'The Hateful Eight',genre:'action',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg'},{title:'Office Space',genre:'comedy',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_SX300.jpg'},{title:'2001: A Space Odyssey',genre:'scifi',rating:94,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    //below movies not from original list
    {title:'Captain America: The Winter Soldier',genre:'superhero',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg'},{title:'Captain America: The First Avenger',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg'},{title:'Doctor Strange',genre:'superhero',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'},{title:'Avengers: Endgame',genre:'superhero',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'},{title:'Avengers: Age of Ultron',genre:'superhero',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'},
    {title:'The Avengers',genre:'superhero',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Thor',genre:'superhero',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'},{title:'Thor: The Dark World',genre:'superhero',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg'},{title:'Iron Man 2',genre:'superhero',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg'},{title:'Iron Man 3',genre:'superhero',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg'},
    {title:'WarGames',genre:'scifi',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_SX300.jpg'},{title:'World War Z',genre:'scifi',rating:66,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Serenity',genre:'scifi',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWE2MDAwZjEtODEyOS00ZjYyLTgzNDUtYmNiY2VmNWRiMTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},{title:"The World's End",genre:'scifi',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_SX300.jpg'},{title:'Avatar',genre:'scifi',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'},
    {title:'Watchmen',genre:'scifi',rating:65,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Robocop',genre:'scifi',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'Bird Box',genre:'scifi',rating:62,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SX300.jpg'},{title:'The Running Man',genre:'scifi',rating:64,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWU4NzA2OWYtNGQ0MS00YWNkLTg4M2YtZjlkZmY1YmJjMDE4XkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg'},{title:'Prometheus',genre:'scifi',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SX300.jpg'},
    {title:"Ender's Game",genre:'scifi',rating:59,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg'},{title:'Real Steel',genre:'scifi',rating:57,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg'},{title:'I, Robot',genre:'scifi',rating:52,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg'},{title:'In Time',genre:'scifi',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg@@._V1_SX300.jpg'},{title:'Gamer',genre:'scifi',rating:46,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_SX300.jpg'},
    {title:'Death Race',genre:'scifi',rating:44,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTA4ODc4YTQtM2YyZS00YTgzLTgyMTAtMTg4Y2Q1YWFmZDYzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg'},{title:'Tron',genre:'scifi',rating:51,imageSrc:'https://m.media-amazon.com/images/M/MV5BMzZhNjYyZDYtZmE4MC00M2RlLTlhOGItZDVkYTVlZTYxOWZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Oblivion',genre:'scifi',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg'},{title:'Elysium',genre:'scifi',rating:41,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDc2NjU0MTcwNV5BMl5BanBnXkFtZTcwMjg4MDg2OQ@@._V1_SX300.jpg'},{title:'The Last Starfighter',genre:'scifi',rating:52,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjIzMWIzMmUtM2E0MC00OTExLWIzYzEtNWIzNzg3M2VjZmQ5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {title:'Tron: Legacy',genre:'scifi',rating:40,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_SX300.jpg'},{title:'The Maze Runner',genre:'scifi',rating:39,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg'},{title:'Pacific Rim',genre:'scifi',rating:48,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg'},{title:'Battlefield Earth',genre:'scifi',rating:23,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg0Njk2OTM3OF5BMl5BanBnXkFtZTYwNTAyMzc3._V1_SX300.jpg'},{title:'Cowboys + Aliens',genre:'scifi',rating:22,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM1MzkyNzQ3OV5BMl5BanBnXkFtZTcwMDk1NTg2NQ@@._V1_SX300.jpg'},
    {title:'Lucy',genre:'scifi',rating:15,imageSrc:'https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_SX300.jpg'},{title:'Battleship',genre:'scifi',rating:13,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI5NTM5MDA2N15BMl5BanBnXkFtZTcwNjkwMzQxNw@@._V1_SX300.jpg'},{title:'After Earth',genre:'scifi',rating:11,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY3MzQyMjkwMl5BMl5BanBnXkFtZTcwMDk2OTE0OQ@@._V1_SX300.jpg'},{title:'The Giver',genre:'scifi',rating:10,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY1MTIxMjg2Ml5BMl5BanBnXkFtZTgwMjUyNzgwMjE@._V1_SX300.jpg'},{title:'Jupiter Ascending',genre:'scifi',rating:8,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQyNzk2MjA2NF5BMl5BanBnXkFtZTgwMjEwNzk3MjE@._V1_SX300.jpg'},
    {title:'Star Wars: Episode VIII - The Last Jedi',genre:'scifi',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'},{title:'Star Wars: Episode IV - A New Hope',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Star Wars: Episode VI - Return of the Jedi',genre:'scifi',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Star Wars: Episode VII - The Force Awakens',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'},{title:'Star Wars: Episode III - Revenge of the Sith',genre:'scifi',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'},
    {title:'Star Wars: Episode I - The Phantom Menace',genre:'scifi',rating:50,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Star Wars: Episode II - Attack of the Clones',genre:'scifi',rating:63,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'},{title:'Star Wars: Episode IX - The Rise of Skywalker',genre:'scifi',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg'},{title:'Rogue One: A Star Wars Story',genre:'scifi',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'},{title:'Solo: A Star Wars Story',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg'},
    {title:'Spider-Man: Homecoming',genre:'superhero',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg'},{title:'Spider-Man: Far From Home',genre:'superhero',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg'},{title:'Ant-Man',genre:'superhero',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg'},{title:'Ant-Man and the Wasp',genre:'superhero',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Guardians of the Galaxy',genre:'superhero',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg'},
    {title:'Guardians of the Galaxy Vol. 2',genre:'superhero',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'},{title:'Captain Marvel',genre:'superhero',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg'},{title:'X-Men: First Class',genre:'superhero',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg'},{title:'X-Men: Days of Future Past',genre:'superhero',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'X-Men Origins: Wolverine',genre:'superhero',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'X-Men Apocalypse',genre:'superhero',rating:53,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg'},{title:'X-Men: Dark Phoenix',genre:'superhero',rating:42,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg'},{title:'X-Men',genre:'superhero',rating:72,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},{title:'X2: X-Men United',genre:'superhero',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg'},{title:'X-Men: The Last Stand',genre:'superhero',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {title:'The Wolverine',genre:'superhero',rating:54,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_SX300.jpg'},{title:'Deadpool',genre:'superhero',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'Deadpool 2',genre:'superhero',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Two Towers',genre:'fantasy',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},{title:'The Lord of the Rings: The Fellowship of the Ring',genre:'fantasy',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'}];

    //JSON object containing Eagles stats leaders lists
    $scope.eaglesStats = {record:{wins:1,losses:2,ties:1},passing:[{first_name:'Carson',last_name:'Wentz',cmp:97,att:160,cmp_perc:60.6,yrds:930,td:4,int:7,rate:66.9}],
    rushing:[{first_name:'Miles',last_name:'Sanders',att:51,yrds:236,td:1},
    {first_name:'Carson',last_name:'Wentz',att:19,yrds:111,td:3},
    {first_name:'Boston',last_name:'Scott',att:18,yrds:60,td:0},
    {first_name:'Corey',last_name:'Clement',att:11,yrds:30,td:0},
    {first_name:'Jalen',last_name:'Hurts',att:5,yrds:26,td:0},
    {first_name:'Jason',last_name:'Huntley',att:1,yrds:1,td:0},
    {first_name:'Greg',last_name:'Ward',att:1,yrds:-6,td:0},
    {first_name:'Adrian',last_name:'Killins',att:1,yrds:-12,td:0}],
    receiving:[{first_name:'Gred',last_name:'Ward',rec:18,yrds:146,td:1},
    {first_name:'Zach',last_name:'Ertz',rec:19,yrds:139,td:1},
    {first_name:'Dallas',last_name:'Goedert',rec:13,yrds:138,td:1},
    {first_name:'Desean',last_name:'Jackson',rec:10,yrds:121,td:0},
    {first_name:'Jalen',last_name:'Reagor',rec:5,yrds:96,td:0},
    {first_name:'Miles',last_name:'Sanders',rec:9,yrds:78,td:0},
    {first_name:'Travis',last_name:'Fulgham',rec:2,yrds:57,td:1},
    {first_name:'Richard',last_name:'Rodgers',rec:5,yrds:50,td:0},
    {first_name:'Boston',last_name:'Scott',rec:5,yrds:43,td:0},
    {first_name:'John',last_name:'Hightower',rec:5,yrds:39,td:0},
    {first_name:'Deontay',last_name:'Burnett',rec:2,yrds:19,td:0},
    {first_name:'Corey',last_name:'Clement',rec:4,yrds:2,td:0},
    {first_name:'Adrian',last_name:'Killins',rec:1,yrds:2,td:0}]};

    $scope.tvShowList = [{title:'Veep',genre:'comedy',rating:97,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjE2NDM0OTEwMl5BMl5BanBnXkFtZTgwNzgwNDI0ODE@._V1_SX300.jpg'},{title:'The Sopranos',genre:'crime',rating:98,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'The End of the F***ing World',genre:'comedy',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BN2ZhNmQ2MjQtMmQzMi00YjE5LTlkMWMtMjk5YzIxMjk2NDc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Westworld',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg'},{title:"It's Always Sunny in Philadelphia",genre:'comedy',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTExNGZkMWMtMmIwZC00YjA3LTgwM2ItZjQ2YmZkMzQ1YWZkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},
    {title:'The Wire',genre:'crime',rating:94,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Mad Men',genre:'drama',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg'},{title:'Black Mirror',genre:'scifi',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Mindhunter',genre:'crime',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},{title:'Nathan for You',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@._V1_SX300.jpg'},
    {title:'Sherlock',genre:'crime',rating:92,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg'},{title:'Stranger Things',genre:'scifi',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_SX300.jpg'},{title:'Breaking Bad',genre:'crime',rating:90,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},{title:'Firefly',genre:'scifi',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_SX300.jpg'},{title:'Narcos',genre:'crime',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'},
    {title:'The Last Dance',genre:'documentary',rating:93,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Attack on Titan',genre:'animated',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_SX300.jpg'},{title:'Avatar: The Last Airbender',genre:'animated',rating:91,imageSrc:'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg'},{title:'30 Rock',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTQ4NDQ4OTUzOV5BMl5BanBnXkFtZTcwMjMzMTUyNw@@._V1_SX300.jpg'},{title:'Game of Thrones',genre:'fantasy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg'},
    {title:'Lost',genre:'scifi',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Parks and Recreation',genre:'comedy',rating:89,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA5MjUxNDgwNF5BMl5BanBnXkFtZTgwMDI5NjMwNDE@._V1_SX300.jpg'},{title:'Fullmetal Alchemist Brotherhood',genre:'animated',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Peaky Blinders',genre:'drama',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX300.jpg'},{title:'You',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDJjOTg4OWYtYWIyOS00MjQ3LTg5ZDktYzU2N2RkNmYzNjZlXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},
    {title:'Band of Brothers',genre:'drama',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SX300.jpg'},{title:"Schitt's Creek",genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Arrested Development',genre:'comedy',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg'},{title:'Community',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_SX300.jpg'},{title:'Orange is the New Black',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'The Office',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Sex Education',genre:'comedy',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg'},{title:'Better Call Saul',genre:'drama',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Heroes',genre:'scifi',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjI3ODU0OTQ1MV5BMl5BanBnXkFtZTgwNzI0MTQ2MzE@._V1_SX300.jpg'},{title:'The Mandalorian',genre:'scifi',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BMWI0OTJlYTItNzMwZi00YzRiLWJhMjItMWRlMDNhZjNiMzJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'Love, Death, & Robots',genre:'scifi',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTc1MjIyNDI3Nl5BMl5BanBnXkFtZTgwMjQ1OTI0NzM@._V1_SX300.jpg'},{title:'Curb Your Enthusiasm',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjYyMmJjYWUtZjBjMS00MWQzLTk0OWYtYzU1MmE3NzFhZjJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The Kominsky Method',genre:'comedy',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDg1NDNiNTUtOWQyMi00ZmFhLTg0YTEtNzgyYjBiMjhhOWE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The Boys',genre:'action',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg'},{title:'The Walking Dead',genre:'action',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'Supernatural',genre:'fantasy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWZlYjYzYTctNTliMy00YzMzLWI2NDEtYWZhZjRlZTM2MGQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Travelers',genre:'scifi',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjUzOTQwOTg1MF5BMl5BanBnXkFtZTgwNzE4NzQ3NjM@._V1_SX300.jpg'},{title:'New Girl',genre:'comedy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_SX300.jpg'},{title:'Silicon Valley',genre:'comedy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTcwNzU2MGEtMzUzNC00MzMwLWJhZGItNDY3NDllYjU5YzAyXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Big Mouth',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzRlYzczMTQtNjdjZi00NzU3LTliZWEtMDRlNzhiZTVmYmNjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {title:'The Legend of Korra',genre:'animated',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTRmM2E5OWYtYmYzMi00MDRiLTg2ZTYtZGQyZTNhZDMxYTgzXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg'},{title:'Shameless',genre:'comedy',rating:81,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzFmODNkNDMtOTgzMy00NzQ1LWEwNDItNzU1MmYyYThhYzUwXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg'},{title:'Grimm',genre:'fantasy',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_SX300.jpg'},{title:'Californication',genre:'comedy',rating:83,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAyMDM2ODExNF5BMl5BanBnXkFtZTgwNTI2MjkzMTE@._V1_SX300.jpg'},{title:'Daredevil',genre:'action',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_SX300.jpg'},
    {title:'One Punch Man',genre:'animated',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg'},{title:'House of Cards',genre:'drama',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg'},{title:'Trailer Park Boys',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTA0NTAwMTc1MF5BMl5BanBnXkFtZTgwODk2NjY0ODE@._V1_SX300.jpg'},{title:'Brooklyn Nine-Nine',genre:'comedy',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg'},
    {title:'Dexter',genre:'drama',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_SX300.jpg'},{title:"Bob's Burgers",genre:'animated',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGJiNmM1NDctNWUxYS00YzE4LWJjNTgtYTJhYzE0NjFmMTMwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},{title:'Rick and Morty',genre:'animated',rating:87,imageSrc:'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg'},{title:'Atlanta',genre:'comedy',rating:85,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzk5NDE5NDY1Ml5BMl5BanBnXkFtZTgwNTk0MTc3NDM@._V1_SX300.jpg'},{title:'Master of None',genre:'comedy',rating:80,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTk3ODYxNjQ3OV5BMl5BanBnXkFtZTgwNzA1MDQ5MTI@._V1_SX300.jpg'},
    {title:'Everything Sucks!',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2IwOTRkYjctYmNhYS00NThlLThkZGEtZDQ1Y2IwZDlmZTBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Sense8',genre:'scifi',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA4MTEyMzcwMl5BMl5BanBnXkFtZTgwMTIwODczNTM@._V1_SX300.jpg'},{title:'Altered Carbon',genre:'scifi',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BNjIxMWMzMzctYmZkYy00OTkzLWFlMWUtMjc3ZDFmYzQ3YmVkXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SX300.jpg'},{title:'Barry',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMmY1NTk5N2QtYWQyOS00NjhiLWFhZmYtYWZmZGFlMjEzY2E2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Luke Cage',genre:'action',rating:82,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAxOTM3NjEwMV5BMl5BanBnXkFtZTgwNTkyOTY4NTM@._V1_SX300.jpg'},
    {title:'Maniac',genre:'scifi',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDMwOTgyNzYtNWI2Zi00MDcwLWEyNmUtMGQ5YzA3ZTljMTA2XkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SX300.jpg'},{title:'Death Note',genre:'animated',rating:84,imageSrc:'https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg'},{title:'Living With Yourself',genre:'comdey',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BYjIyYWVkY2UtZDkxOC00NTE4LWFhZWUtZGYwMmJjNDA3YmVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'The OA',genre:'scifi',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTY5OTkwNDkzOF5BMl5BanBnXkFtZTgwMDEyNzI1NzM@._V1_SX300.jpg'},{title:'Russian Doll',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmViMjdhZmQtODIyZi00Mzc4LWFhNTItOTk4NGM1NGU0ZDZjXkEyXkFqcGdeQXVyNjc2NTQzMjU@._V1_SX300.jpg'},
    {title:'The Good Place',genre:'comedy',rating:79,imageSrc:'https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg'},{title:'Entourage',genre:'comedy',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BZDg3ZDc2MDQtNzQwZi00YzFjLTgyOTMtMDMzZTc5N2VlNTg2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Kantaro: The Sweet Tooth Salaryman',genre:'comedy',rating:70,imageSrc:'https://m.media-amazon.com/images/M/MV5BYWU3NGNiMDAtOGM3ZS00ZmQ0LWE5OTEtZDNhOWM0ZmQyZjQ0XkEyXkFqcGdeQXVyMjU1ODUyNzE@._V1_SX300.jpg'},{title:'Unbreakable Kimmy Schmidt',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTgyNTQyNjUwN15BMl5BanBnXkFtZTgwNjMwNjUzNzM@._V1_SX300.jpg'},{title:'Blue Mountain State',genre:'comedy',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjQxOTI0MjcxM15BMl5BanBnXkFtZTcwOTY1MDk5NA@@._V1_SX300.jpg'},
    {title:'Burn Notice',genre:'action',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTczMzg4NjU1Ml5BMl5BanBnXkFtZTcwODc4NzY5Nw@@._V1_SX300.jpg'},{title:'Spartacus',genre:'action',rating:75,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTEwZTM3MzUtMzk3Yy00YWI4LWI1ZTktOTc1MmRjZWM5ZDhmXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg'},{title:'The Punisher',genre:'action',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTExODIwOTUxNzFeQTJeQWpwZ15BbWU4MDE5MDA0MTcz._V1_SX300.jpg'},{title:'Bones',genre:'drama',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjA3ODMxMzM5NF5BMl5BanBnXkFtZTgwMDM1NjU0OTE@._V1_SX300.jpg'},{title:'Fate Zero',genre:'animated',rating:76,imageSrc:'https://m.media-amazon.com/images/M/MV5BMDNiZjIzMzYtMDg1Zi00ZjM3LWFlZjUtZmNhMTQ1MDU3ODU0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg'},
    {title:'Fate/Stay Night: Unlimited Blade Works',genre:'animated',rating:71,imageSrc:'https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg'},{title:'Tiger King',genre:'documentary',rating:73,imageSrc:'https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},{title:'Mobile Suit Gundam: Iron Blooded Orphans',genre:'animated',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BZTVlZGI0ODQtOWY5MS00YmRjLWExMjctNGY5ODk1YmMzZjFjXkEyXkFqcGdeQXVyMTU3OTE4NjU@._V1_SX300.jpg'},{title:'Cobra Kai',genre:'comedy',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BYTI3NjcxNjctNzZhZS00NjQwLTg4NDEtMmQzOGJiYTUwNWFjXkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_SX300.jpg'},{title:'Scrubs',genre:'comedy',rating:86,imageSrc:'https://m.media-amazon.com/images/M/MV5BODE1MGVjZjMtODc5My00ODBjLTg0NWItMDllNTNlM2Y3ZGYyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},
    {title:'Revolution',genre:'scifi',rating:56,imageSrc:'https://m.media-amazon.com/images/M/MV5BNTQ0YTIxZmUtMTVmZC00MzgxLThmYTItMDdlZjg5YmU2NzM0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},{title:'The Tomorrow People',genre:'scifi',rating:43,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjEyMDA4NjY0Nl5BMl5BanBnXkFtZTgwMDgzNDIxMDE@._V1_SX300.jpg'},{title:'Eastbound & Down',genre:'comedy',rating:69,imageSrc:'https://m.media-amazon.com/images/M/MV5BMjAwNDU2NTM4Nl5BMl5BanBnXkFtZTcwMzg0NTc4Mw@@._V1_SX300.jpg'},{title:'Summer Heights High',genre:'comedy',rating:53,imageSrc:'https://m.media-amazon.com/images/M/MV5BODAxZGI4N2MtOTVhNi00MzhmLWIxYzItMzNkY2E0ZjQwY2VhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},{title:'Archer',genre:'animated',rating:78,imageSrc:'https://m.media-amazon.com/images/M/MV5BMTg3NTMwMzY2OF5BMl5BanBnXkFtZTgwMDcxMjQ0NDE@._V1_SX300.jpg'},
    {title:'Modern Family',genre:'comedy',rating:74,imageSrc:'https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_SX300.jpg'},{title:'Chernobyl',genre:'drama',rating:88,imageSrc:'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'},{title:'Dragon Ball Super',genre:'animated',rating:68,imageSrc:'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg'},{title:'Space Force',genre:'comedy',rating:55,imageSrc:'https://m.media-amazon.com/images/M/MV5BNWYwMzE2MGItOTYwYy00YmQyLWE0NGQtZWViMTU4ZTk4ZjQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},{title:'Fate/Apocrypha',genre:'animated',rating:60,imageSrc:'https://m.media-amazon.com/images/M/MV5BNmQwYTMzY2QtZTliMS00MGY0LTk0ODMtOWRlYjMyYzk0MjYxXkEyXkFqcGdeQXVyNzA2MTUzMzM@._V1_SX300.jpg'}];

    //variables that track which tab is selected
    $scope.home = true;
    $scope.movies = false;
    $scope.tvShows = false;
    $scope.sports = false;

    //loadContent takes in a tab name and displays that tab content
    //while hiding all other content, and changes the styling of the selected tab
    $scope.loadContent = function(tabName) {
        document.getElementById('homeTab').style.background = "";
        document.getElementById('moviesTab').style.background = "";
        document.getElementById('showsTab').style.background = "";
        document.getElementById('sportsTab').style.background = "";
        document.getElementById(tabName + 'Tab').style.background = "#495469";
        if (tabName == 'home') {
            $scope.home = true;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = false;
        }
        else if (tabName == 'movies') {
            $scope.home = false;
            $scope.movies = true;
            $scope.tvShows = false;
            $scope.sports = false;
        }
        else if (tabName == 'sports') {
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = false;
            $scope.sports = true;
        }
        else{
            $scope.home = false;
            $scope.movies = false;
            $scope.tvShows = true;
            $scope.sports = false;
        }
    }

    //variable that holds list of movie genres
    $scope.movieGenreList = [{genre:'all',display:'All'},{genre:'scifi',display:'Science Fiction'},{genre:'drama',display:'Drama'},
    {genre:'thriller',display:'Thriller'},{genre:'crime',display:'Crime'},{genre:'unique',display:'Very Unique'},{genre:'superhero',display:'Superhero'},
    {genre:'fantasy',display:'Fantasy'},{genre:'action',display:'Action'},]

    //variable that tracks the minimum rating to filter movies
    $scope.minRating = 0;

    //variable that tracks which movie genre tab is selected
    $scope.movieGenre = "all";
    $scope.genreDisplay = "All Movies";

    //variable that tracks if a genre has been selected
    //$scope.genreFilter = false;

    //movieFilter is used to determine which movies to show in the ng-repeat
    $scope.movieFilter = function(movie) {
        if ($scope.movieGenre == 'all') {
            return (movie.rating >= $scope.minRating);
        }
        return ((movie.genre == $scope.movieGenre) && (movie.rating >= $scope.minRating));
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
        /*document.getElementById('allTab').style.background = "";
        document.getElementById('scifiTab').style.background = "";
        document.getElementById('dramaTab').style.background = "";
        document.getElementById('thrillerTab').style.background = "";
        document.getElementById('crimeTab').style.background = "";
        document.getElementById('uniqueTab').style.background = "";
        document.getElementById('superheroTab').style.background = "";
        document.getElementById(genre + 'Tab').style.background = "#495469";*/
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

    $scope.showTVPopup = false;

    //getShowInfo takes in a tv show title, calls the movie info API
    //for that title, and sets the popup variables
    $scope.getShowInfo = function(title) {
        $http({
            method: 'GET',
            url: "https://www.omdbapi.com/?t=" + title + "&apikey=8f59097f"
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

    $scope.showMovieFilter = false;

    $scope.toggleMovieFilter = function() {
        $scope.showMovieFilter = !($scope.showMovieFilter);
    }

    $scope.hideTVPopup = function() {
        $scope.showTVPopup = false;
    }

    //variable that determines which team tab has been clicked
    $scope.selectedTeam = "eagles";

    //loadEaglesData displays the Eagles page contents
    $scope.loadEaglesData = function() {
        $scope.selectedTeam = "eagles";
    }

    //variable that holds Sixers' record
    $scope.sixersRecord = "43-30";

    //loadSixersData displays the Sixers page contents
    $scope.loadSixersData = function() {
        $scope.selectedTeam = "sixers";
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

    //Below function not working as intended, as the API seems to expect an integer
    //for the 'name_part' despite the documentation saying that is a string field
    //(waiting for response to my discussion post about this)
    //getPlayerInfo
    /*$scope.getPlayerInfo = function(playerName) {
        $http({
            method: 'GET',
            url: "https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam/name_part=" + playerName,
            headers: {
                "rapidapi-key": "d111e2f0d6msh1f805bf26cac48bp13c744jsn26bf5382001c"
            }
        }).then(function success(response) {
            alert(response.data);
        },
        function error(response){
            alert(response.data);
        });
    }*/

});
/*create directive - must use camel case when defining and use dashes
with all lowercase in the html*/
app.directive("testDirective", function() {
    return {
        template : "<p>Test directive constructor<p>"
    };
});