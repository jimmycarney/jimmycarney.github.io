/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";*/
    //$scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}];

    $scope.moviesList=[{title:'The Departed',genre:'crime',rating:99},{title:'Ex Machina',genre:'scifi',rating:99},{title:'The Social Network',genre:'drama',rating:98},{title:'Fight Club',genre:'thriller',rating:97},
    {title:'Good Will Hunting',genre:'drama',rating:96},{title:'Dead Poets Society',genre:'drama',rating:95},{title:'Terminator 2: Judgement Day',genre:'scifi',rating:95},{title:'The Empire Strikes Back',genre:'scifi',rating:95},{title:'The Return of the King',genre:'fantasy',rating:95},
    {title:'Nightcrawler',genre:'thriller',rating:91},{title:'Goodfellas',genre:'crime',rating:94},{title:'The Shape of Water',genre:'unique',rating:91},{title:'Moon',genre:'scifi',rating:90},{title:'The Godfather Part II',genre:'crime',rating:90},
    {title:'Blade Runner',genre:'scifi',rating:88},{title:'Memento',genre:'thriller',rating:93},{title:'Birdman',genre:'drama',rating:90},{title:'Spotlight',genre:'drama',rating:90},{title:'Hell or High Water',genre:'crime',rating:89},
    {title:'Silence of the Lambs',genre:'thriller',rating:87},{title:'Rocky',genre:'drama',rating:89},{title:'A Clockwork Orange',genre:'scifi',rating:88},{title:'Children of Men',genre:'scifi',rating:88},
    {title:'Arrival',genre:'scifi',rating:88},{title:'Moonlight',genre:'drama',rating:88},{title:'The Shining',genre:'thriller',rating:86},{title:'The Godfather',genre:'crime',rating:89},
    {title:'The Dark Knight',genre:'superhero',rating:88},{title:'The Prestige',genre:'thriller',rating:86},{title:'The Terminator',genre:'scifi',rating:91},{title:'Her',genre:'scifi',rating:91},{title:'Alien',genre:'scifi',rating:90},
    {title:'Spiderman: Into the Spider-Verse',genre:'superhero',rating:91},{title:'Die Hard',genre:'action',rating:89},{title:'Interstellar',genre:'scifi',rating:89},{title:'Up in the Air',genre:'drama',rating:89},{title:'Snowpiercer',genre:'scifi',rating:89},
    {title:'The Farewell',genre:'drama',rating:88},{title:'Twelve Monkeys',genre:'scifi',rating:87},{title:'Black Panther',genre:'superhero',rating:87},{title:'Lady Bird',genre:'drama',rating:87},{title:'Scarface',genre:'crime',rating:87},
    {title:'The Martian',genre:'scifi',rating:87},{title:'Blade Runner: 2049',genre:'scifi',rating:89},{title:'Mad Max: Fury Road',genre:'scifi',rating:90},{title:'The Nice Guys',genre:'crime',rating:87},{title:'Argo',genre:'drama',rating:87},
    {title:'WALL-E',genre:'scifi',rating:90},{title:'Get Out',genre:'thriller',rating:87},{title:'There Will Be Blood',genre:'drama',rating:87},{title:'BlacKkKlansman',genre:'drama',rating:87},{title:'Gladiator',genre:'action',rating:88},
    {title:'Perks of Being a Wallflower',genre:'drama',rating:85},{title:'Ready Player One',genre:'scifi',rating:85},{title:'Se7en',genre:'thriller',rating:84},{title:'Inception',genre:'scifi',rating:87},
    {title:'The Town',genre:'crime',rating:86},{title:'The Shawshank Redemption',genre:'drama',rating:87},{title:'Starship Troopers',genre:'scifi',rating:86},{title:'The Hurt Locker',genre:'drama',rating:86},
    {title:'The Peanut Butter Falcon',genre:'drama',rating:85},{title:'The Sixth Sense',genre:'thriller',rating:85},{title:'Taxi Driver',genre:'drama',rating:84},{title:'The Matrix',genre:'scifi',rating:90},
    {title:'Casino Royale',genre:'action',rating:87},{title:'Jurassic Park',genre:'scifi',rating:88},{title:'Mission: Impossible - Fallout',genre:'action',rating:87},{title:'Minority Report',genre:'scifi',rating:86},
    {title:'Us',genre:'thriller',rating:82},{title:'Moneyball',genre:'drama',rating:83},{title:'Pulp Fiction',genre:'unique',rating:85},{title:'Source Code',genre:'scifi',rating:84},
    {title:'Knives Out',genre:'crime',rating:85},{title:'Sorry to Bother You',genre:'unique',rating:85},{title:'Thor: Ragnarok',genre:'superhero',rating:86},{title:'Being John Malkovich',genre:'unique',rating:86},
    {title:'District 9',genre:'scifi',rating:85},{title:'Captain America: Civil War',genre:'superhero',rating:84},{title:'Avengers: Infinity War',genre:'superhero',rating:84},{title:'Ford v Ferrari',genre:'drama',rating:84},
    {title:'Once Upon a Time...In Hollywood',genre:'drama',rating:83},{title:'Inglorious Bastards',genre:'action',rating:83},{title:'Django Unchained',genre:'action',rating:83},{title:'Dallas Buyers Club',genre:'drama',rating:83},
    {title:'Drive',genre:'crime',rating:84},{title:'A Quiet Place',genre:'thriller',rating:83},{title:'The Theory of Everything',genre:'drama',rating:81},{title:'Zodiac',genre:'thriller',rating:81}];

    //variables that track which tab is selected
    $scope.home = true;
    $scope.movies = false;
    $scope.football = false;

    //loadContent takes in a tab name and displays that tab content
    //while hiding all other content, and changes the styling of the selected tab
    $scope.loadContent = function(tabName) {
        document.getElementById('homeTab').style.background = "";
        document.getElementById('moviesTab').style.background = "";
        document.getElementById('footballTab').style.background = "";
        document.getElementById(tabName + 'Tab').style.background = "#495469";
        if (tabName == 'home') {
            $scope.home = true;
            $scope.movies = false;
            $scope.football = false;
        }
        else if (tabName == 'movies') {
            $scope.home = false;
            $scope.movies = true;
            $scope.football = false;
        }
        else{
            $scope.home = false;
            $scope.movies = false;
            $scope.football = true;
        }
    }

    //variable that tracks which movie genre tab is selected
    $scope.movieGenre = "scifi";

    //selectGenre sets the movieGenre variable, displaying that genre content, 
    //and changes the styling of the selected tab
    $scope.selectGenre = function(genre) {
        $scope.movieGenre = genre;
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

    //hidePopup sets the showPopup variable to false
    $scope.hidePopup = function() {
        $scope.showPopup = false;
    }

});
/*create directive - must use camel case when defining and use dashes
with all lowercase in the html*/
app.directive("testDirective", function() {
    return {
        template : "<p>Test directive constructor<p>"
    };
});