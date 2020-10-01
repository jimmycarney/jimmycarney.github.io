/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";
    $scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}]; */

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


});
/*create directive - must use camel case when defining and use dashes
with all lowercase in the html*/
app.directive("testDirective", function() {
    return {
        template : "<p>Test directive constructor<p>"
    };
});