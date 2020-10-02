/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";*/
    //$scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}];

    $scope.moviesList=[{title:'The Departed',genre:'crime'},{title:'Ex Machina',genre:'scifi'},{title:'The Social Network',genre:'drama'},{title:'Fight Club',genre:'thriller'},
    {title:'Good Will Hunting',genre:'drama'},{title:'Dead Poets Society',genre:'drama'},{title:'Terminator 2: Judgement Day',genre:'scifi'},{title:'The Empire Strikes Back',genre:'scifi'},{title:'The Return of the King',genre:'fantasy'},
    {title:'Nightcrawler',genre:'thriller'},{title:'Goodfellas',genre:'crime'},{title:'The Shape of Water',genre:'unique'},{title:'Moon',genre:'scifi'},{title:'The Godfather I & II',genre:'crime'},
    {title:'Blade Runner',genre:'scifi'},{title:'Memento',genre:'thriller'},{title:'Birdman',genre:'drama'},{title:'Spotlight',genre:'drama'},{title:'Hell or High Water',genre:'crime'},
    {title:'Silence of the Lambs',genre:'thriller'},{title:'Rocky',genre:'drama'},{title:'A Clockwork Orange',genre:'scifi'},{title:'Children of Men',genre:'scifi'},
    {title:'Arrival',genre:'scifi'},{title:'Moonlight',genre:'drama'},{title:'The Shining',genre:'thriller'},{title:'Scarface',genre:'crime'},{title:'',genre:''},
    {title:'The Dark Knight',genre:'superhero'},{title:'The Prestige',genre:'thriller'},{title:'The Terminator',genre:'scifi'},{title:'Her',genre:'scifi'},{title:'Alien',genre:'scifi'},
    {title:'Spiderman: Into the Spider-Verse',genre:'superhero'},{title:'Die Hard',genre:'action'},{title:'Interstellar',genre:'scifi'},{title:'Up in the Air',genre:'drama'},{title:'Snowpiercer',genre:'scifi'},
    {title:'The Farewell',genre:'drama'},{title:'Twelve Monkeys',genre:'scifi'},{title:'Black Panther',genre:'superhero'},{title:'Lady Bird',genre:'drama'},{title:'Scarface',genre:'crime'},
    {title:'The Martian',genre:'scifi'},{title:'Blade Runner: 2049',genre:'scifi'},{title:'Mad Max: Fury Road',genre:'scifi'},{title:'The Nice Guys',genre:'crime'},{title:'Argo',genre:'drama'},
    {title:'WALL-E',genre:'scifi'},{title:'Get Out',genre:'thriller'},{title:'There Will Be Blood',genre:'drama'},{title:'BlacKkKlansman',genre:'drama'},{title:'Gladiator',genre:'action'}];

    //variables that track which tab is selected
    $scope.home = true;
    $scope.movies = false;
    $scope.football = false;

    //loadContent takes in a tab name and displays that tab content
    //while hiding all other content
    $scope.loadContent = function(tabName) {
        if (tabName == 'home') {
            document.getElementById('homeTab').style.background = "#495469";
            document.getElementById('moviesTab').style.background = "";
            document.getElementById('footballTab').style.background = "";
            $scope.home = true;
            $scope.movies = false;
            $scope.football = false;
        }
        else if (tabName == 'movies') {
            document.getElementById('homeTab').style.background = "";
            document.getElementById('moviesTab').style.background = "#495469";
            document.getElementById('footballTab').style.background = "";
            $scope.home = false;
            $scope.movies = true;
            $scope.football = false;
        }
        else{
            document.getElementById('homeTab').style.background = "";
            document.getElementById('moviesTab').style.background = "";
            document.getElementById('footballTab').style.background = "#495469";
            $scope.home = false;
            $scope.movies = false;
            $scope.football = true;
        }
    }

    //variable that tracks which movie genre tab is selected
    $scope.movieGenre = "scifi";

    $scope.selectGenre = function(genre) {
        $scope.movieGenre = genre;   
    }

    $scope.testMovieAPI = function(title) {
        $http({
            method: 'GET',
            url: "https://www.omdbapi.com/?t=" + title + "&apikey=8f59097f"
            /*url: "https://cors-anywhere.herokuapp.com/" + "https://www.omdbapi.com/?t=" + title + "&apikey=8f59097f"*/
        }).then(function success(response) {
            alert(response.data.Poster);
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